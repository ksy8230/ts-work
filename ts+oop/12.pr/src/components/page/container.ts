import { BaseComponent, Component } from '../base.js';
import { Composable } from './page.js';

// 아이템 컴포넌트를 받아서 (li)로 감싸주는 컴포넌트
export class ItemContainer extends BaseComponent<HTMLElement> implements Composable {
  constructor() {
    super(
      `<li class="page__item">
            <button class="page__item__close">close</button>
            <div class="page__item__body"></div>
        </li>`,
    );
  }

  addChild(child: Component): void {
    const container = this.element.querySelector('.page__item__body')! as HTMLElement;
    child.attachTo(container);
  }
}
