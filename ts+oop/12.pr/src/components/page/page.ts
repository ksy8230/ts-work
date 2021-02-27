import { BaseComponent, Component, Composable, Section } from '../base.js';
import { ItemComponent } from './container.js';

// ul 컴포넌트
// @EnableDrop
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  private children = new Set<Section>();
  private dropTarget?: Section;
  private dragTarget?: Section;

  constructor() {
    super('<ul class="page"></ul>');

    this.element.addEventListener('dragover', (event: DragEvent) => {
      this.onDragOver && this.onDragOver(event);
    });
    this.element.addEventListener('drop', (event: DragEvent) => {
      this.onDrop && this.onDrop(event);
    });
  }

  addChild(section: Component): void {
    const li = new ItemComponent();
    li.addChild(section);
    li.attachTo(this.element, 'beforeend');
    li.setOnCloseListener(() => {
      li.removeFrom(this.element);
      this.children.delete(li);
    });
    this.children.add(li);
    li.setOnDragStateListener((target: Section, state) => {
      switch (state) {
        case 'start':
          this.dragTarget = target;
          this.updateSections('mute');
          break;
        case 'end':
          this.dragTarget = undefined;
          this.updateSections('unmute');
          break;
        case 'enter':
          this.dropTarget = target;
          console.log('enter', target);
          break;
        case 'leave':
          this.dropTarget = undefined;
          console.log('leave', target);
          break;
        default:
          throw new Error(`unsupported state ${state}`);
      }
    });
  }

  private updateSections(state: 'mute' | 'unmute'): void {
    this.children.forEach((section: Section) => {
      section.muteChildren(state);
    });
  }

  // 타겟으로 드래그가 올라왔을 때 이벤트
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
  // 타겟으로 드래그가 떨궈졌을 때
  onDrop(event: DragEvent): void {
    event.preventDefault();
    // 위치 바꾸기
    if (!this.dropTarget) return;
    if (this.dropTarget && this.dragTarget && this.dropTarget !== this.dragTarget) {
      console.log('this.dropTarget=', this.dropTarget);
      console.log('this.dragTarget=', this.dragTarget);

      const dropY = event.clientY;
      console.log('드립시키는 y 좌표', dropY);
      const srcElement = this.dragTarget.getBoundingRect();
      console.log('드래그 중인 엘레먼트의 원래 y 좌표', srcElement.y);
      this.dropTarget?.attach(this.dragTarget, dropY < srcElement.y ? 'beforebegin' : 'afterend');
    }

    this.dropTarget.onDropped();
  }
}
