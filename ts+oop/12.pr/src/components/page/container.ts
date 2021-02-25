import { BaseComponent, Component } from '../base.js';
import { Composable } from './page.js';

// 아이템 컴포넌트를 받아서 (li)로 감싸주는 컴포넌트
type onCloseListener = () => void;

export type DragState = 'start' | 'end' | 'enter' | 'leave';

/**
 * Component 기능을 가진 T라는 타입을 타겟으로 잡고
 * 상태도 넘겨주는 타입
 */
export type OnDragStateListener<T extends Component> = (target: T, state: DragState) => void;

export class ItemContainer extends BaseComponent<HTMLElement> implements Composable {
  // 외부로부터 전달 받은 콜백 함수를 저장할 닫기 리스너 저장
  private closeListener: onCloseListener | undefined;
  private dragListener: OnDragStateListener<ItemContainer> | undefined;

  constructor() {
    super(
      `<li class="page__item" draggable="true">
        <div class="page__item__body"></div>
        <button class="close">❎</button>
      </li>`,
    );
    // 생성자 호출 시 해당 닫기 버튼을 가져온다
    const removeButton = this.element.querySelector('.close')! as HTMLButtonElement;
    // 해당 버튼이 클릭이 되면 전달 받은 콜백 함수 호출
    removeButton.onclick = () => {
      this.closeListener && this.closeListener();
    };
    this.element.addEventListener('dragstart', (event: DragEvent) => {
      this.onDragStart && this.onDragStart(event);
    });
    this.element.addEventListener('dragend', (event: DragEvent) => {
      this.onDragEnd && this.onDragEnd(event);
    });
    this.element.addEventListener('dragenter', (event: DragEvent) => {
      this.onDragEnter && this.onDragEnter(event);
    });
    this.element.addEventListener('dragleave', (event: DragEvent) => {
      this.onDragLeave && this.onDragLeave(event);
    });
  }
  // li body 안에 컴포넌트 넣어주기
  addChild(child: Component): void {
    const container = this.element.querySelector('.page__item__body')! as HTMLElement;
    child.attachTo(container);
  }
  // 닫기 리스너에 전달 받은 리스너 등록
  setOnCloseListener(listener: onCloseListener): void {
    this.closeListener = listener;
  }

  // (타겟 입장) 드래그 시작 이벤트
  onDragStart(_: DragEvent): void {
    this.notifyDragObserver('start');
  }
  // (타겟 입장) 드래그 끝 이벤트
  onDragEnd(_: DragEvent): void {
    this.notifyDragObserver('end');
  }
  // (엔터 입장) 드래그 들어옴
  onDragEnter(_: DragEvent): void {
    this.notifyDragObserver('enter');
  }
  // (엔터 입장) 드래그 나감
  onDragLeave(_: DragEvent): void {
    this.notifyDragObserver('leave');
  }

  /**
   * 네 군데 다 업데이트하기 보다는 하나로 묶어서 dragListener 콜백 함수 관리
   */
  notifyDragObserver(state: DragState): void {
    this.dragListener && this.dragListener(this, state);
  }

  // 내가 누군지, 내 상태가 어떤지 외부에서 사용할 때 알려주는 이벤트
  setOnDragStateListener(listener: OnDragStateListener<ItemContainer>): void {
    this.dragListener = listener;
  }
}
