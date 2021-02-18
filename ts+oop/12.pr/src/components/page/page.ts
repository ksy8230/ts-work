import { BaseComponent } from './../base.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  // 부모 클래스의 생성자 호출
  constructor() {
    super('<ul class="page">This is Page</ul>');
  }
}
