import { BaseComponent, Component } from '../base.js';
import { Composable } from './page.js';

// 아이템 컴포넌트를 받아서 (li)로 감싸주는 컴포넌트
type onCloseListener = () => void;
export class ItemContainer extends BaseComponent<HTMLElement> implements Composable {
  // 외부로부터 전달 받은 콜백 함수를 저장할 닫기 리스너 저장
  private closeListener: onCloseListener | undefined;

  constructor() {
    super(
      `<li class="page__item">
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
}
