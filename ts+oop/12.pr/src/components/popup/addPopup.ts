import { BaseComponent, Component } from '../base.js';
import { Composable } from '../page/page.js';

type ClickLister = () => void;

export class AddPopup extends BaseComponent<HTMLElement> implements Composable {
  private clickCloseListener?: ClickLister;
  private clickSubmitListener?: ClickLister;
  constructor() {
    super(`<dialog class="dialog">
                <div class="dialog__container">
                <button class="close">❎</button>
                <div class="popup-body"></div>
                <button class="popup-submit">Submit✅</button>
                </div>
            </dialog>
            `);
    const closeButton = this.element.querySelector('.close')! as HTMLButtonElement;
    closeButton.onclick = () => {
      this.clickCloseListener && this.clickCloseListener();
    };

    const submitButton = this.element.querySelector('.popup-submit')! as HTMLButtonElement;
    submitButton.onclick = () => {
      this.clickSubmitListener && this.clickSubmitListener();
    };
  }

  setOnCloseListener(listener: ClickLister): void {
    this.clickCloseListener = listener;
  }

  setOnSubmitListener(listener: ClickLister): void {
    this.clickSubmitListener = listener;
  }

  addChild(child: Component): void {
    const body = this.element.querySelector('.popup-body')! as HTMLElement;
    child.attachTo(body);
  }
}
