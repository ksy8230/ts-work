import { BaseComponent } from '../../base.js';

export class RecordComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="record">
                <div class="record__holder">
                    <iframe class="record__iframe"></iframe>
                </div>
                <h2 class="record__title"></h2>
            </section>`);

    const titleElement = this.element.querySelector('.record__title') as HTMLHeadingElement;
    titleElement.textContent = title;

    const recordElement = this.element.querySelector('.record__iframe') as HTMLIFrameElement;
    recordElement.src = this.convertEmbedURL(url);
  }

  // https://youtu.be/Y476dImW2vI
  // https://www.youtube.com/watch?v=Y476dImW2vI&feature=youtu.be

  private convertEmbedURL(url: string): string {
    const regExp = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
    const match = url.match(regExp);
    console.log('match', match);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

/**
 * 정규표현식 설명
 * https://regexr.com/
 */
