import { BaseComponent, Component } from '../base.js';
import { ItemContainer } from './container.js';
import { DragState } from './container.js';
export interface Composable {
  addChild(child: Component): void;
}

// 아이템 컴포넌트를 감싼 아이템 컨테이너(li)를 (ul)감싸주는 컴포넌트
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
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
    const li = new ItemContainer();
    li.addChild(section);
    li.attachTo(this.element, 'beforeend');
    li.setOnCloseListener(() => {
      li.removeFrom(this.element);
    });
    li.setOnDragStateListener((target: Component, state: DragState) => {
      console.log(target, state);
    });
  }

  // 타겟으로 드래그가 올라왔을 때 이벤트
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    //console.log('onDragOver', event);
  }
  // 타겟으로 드래그가 떨궈졌을 때
  onDrop(event: DragEvent): void {
    event.preventDefault();
    //console.log('onDrop', event);
  }
}
