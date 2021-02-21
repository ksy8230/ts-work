/**
 * html element 생성을 캡슐화하는 클래스
 */

export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'): void {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement): void {
    parent.removeChild(this.element);
  }
}
