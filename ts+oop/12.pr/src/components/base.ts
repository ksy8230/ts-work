/**
 * html element 생성을 캡슐화하는 클래스
 */

export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T; // 외부에서 볼 수 없고 이것을 상속하는 자식 클래스에서만 접근 가능, 읽기만 가능

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'): void {
    parent.insertAdjacentElement(position, this.element);
  }
}
