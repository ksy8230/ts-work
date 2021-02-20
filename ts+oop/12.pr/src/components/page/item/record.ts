import { BaseComponent } from '../../base.js';

export class RecordComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="record">
                <div class="record__holder">
                    <iframe class="record__iframe"></iframe>
                </div>
                <h2 class="record__title"></h2>
            </section>`);

    const titleElement = this.element.querySelector(
      '.record__title',
    ) as HTMLHeadingElement;
    titleElement.textContent = title;

    const recordElement = this.element.querySelector(
      '.record__iframe',
    ) as HTMLIFrameElement;
    recordElement.src = 'https://www.youtube.com/embed/Y476dImW2vI';
  }

  // https://youtu.be/Y476dImW2vI
  // https://www.youtube.com/watch?v=Y476dImW2vI&feature=youtu.be
}
