/**
 * html element 생성을 캡슐화하는 클래스
 */

import { Draggable, Hoverable } from './common/type';

export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
  attach(component: Component, position?: InsertPosition): void;
  registerEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  ): void;
}

export interface Composable {
  addChild(child: Component): void;
}

export interface Section extends Component, Composable, Draggable, Hoverable {
  muteChildren(state: 'mute' | 'unmute'): void;
  getBoundingRect(): DOMRect;
  onDropped(): void;
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

  attach(component: Component, position?: InsertPosition): void {
    component.attachTo(this.element, position);
  }

  // The same signature as the HTMLElement.addEventListener method
  registerEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  ): void {
    this.element.addEventListener(type, listener);
  }
}
