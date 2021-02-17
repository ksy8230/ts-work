export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is Page Component';
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}

/**
 * PageComponent는 불러오자마자 ul 태그를 생성하고
 * attachTo라는 메서드를 갖고 있는데
 * 이 메서드는 내가 붙을 부모인자와 위치 인자를 갖고 있다.
 */