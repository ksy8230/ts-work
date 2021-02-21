import { BaseComponent, Component } from '../base.js';
import { ItemContainer } from './container.js';

export interface Composable {
  addChild(child: Component): void;
}

// 아이템 컴포넌트를 감싼 아이템 컨테이너(li)를 (ul)감싸주는 컴포넌트
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component): void {
    const li = new ItemContainer();
    li.addChild(section);
    li.attachTo(this.element, 'beforeend');
    li.setOnCloseListener(() => {
      li.removeFrom(this.element);
    });
  }
}
