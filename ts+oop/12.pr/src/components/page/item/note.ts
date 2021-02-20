import { BaseComponent } from '../../base.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note">
                <h2 class="note__title"></h2>
                <div class="note__holder"></div>
            </section>`);
    const noteElement = this.element.querySelector('.note__holder') as HTMLDivElement;
    noteElement.textContent = body;
    const titleElement = this.element.querySelector('.note__title') as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
