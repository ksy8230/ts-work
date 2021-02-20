import { BaseComponent } from '../../base.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
                <h2 class="todo__title"></h2>
                <input type="checkbox" class="todo__box" />
            </section>`);

    const todoElement = this.element.querySelector('.todo__box')! as HTMLInputElement;
    todoElement.insertAdjacentText('afterend', todo);
    const titleElement = this.element.querySelector('.todo__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
