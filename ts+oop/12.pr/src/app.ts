import { PageComponent } from './components/page/page.js';
import { Component, Composable } from './components/base.js';
import { AddPopup } from './components/popup/addPopup.js';

import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { RecordComponent } from './components/page/item/record.js';
import { TodoComponent } from './components/page/item/todo.js';

import { TextSection } from './components/popup/input/text-input.js';
import { MediaSection } from './components/popup/input/media-input.js';

/**
 * ✨ node에서 import export를 사용할 땐 웹팩이 자동으로 번들을 해줘서 확장자 생략이 가능하지만
 * 여기는 웹팩이 없고 html에서 js를 불러올 때 type="module"을 지정했기 때문에 .js로 모듈을 불러와야 한다 :)
 */

/**
 * TextSection과 MediaSection 중 하나의 생성자 만드는 타입
 */
type InputSectionType<T = TextSection | MediaSection> = {
  new (...args: any[]): T;
};

/**
 * TextSection과 MediaSection 중 하나의 타입을 input 인자로 받아서 컴포넌트를 만들어주는 타입
 */
type MakeSectionType<T = TextSection | MediaSection> = (input: T) => Component;

class App {
  // page는 Component이면서 Composable이 가능한 요소
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, private popupRoot: HTMLElement) {
    this.page = new PageComponent();

    this.makePopupContent('#new-note', TextSection, (input) => new NoteComponent(input.title, input.body));
    this.makePopupContent('#new-photo', MediaSection, (input) => new ImageComponent(input.title, input.url));
    this.makePopupContent('#new-record', MediaSection, (input) => new RecordComponent(input.title, input.url));
    this.makePopupContent('#new-todo', TextSection, (input) => new TodoComponent(input.title, input.body));

    this.page.addChild(new ImageComponent('image title 1', 'https://picsum.photos/seed/picsum/200/300'));
    this.page.addChild(new RecordComponent('video title 1', 'https://www.youtube.com/watch?v=V60QQDA57SA'));
    this.page.addChild(new NoteComponent('note title 1', 'this is note contents'));
    this.page.addChild(new TodoComponent('todo title 1', 'this is todo contents'));
    this.page.addChild(new TodoComponent('todo title 2', 'this is todo contents'));
    this.page.addChild(new RecordComponent('video title 2', 'https://www.youtube.com/watch?v=V60QQDA57SA'));
    this.page.addChild(new NoteComponent('note title 2', 'this is note contents'));
    this.page.addChild(new TodoComponent('todo title 3', 'this is todo contents'));

    this.page.attachTo(appRoot);
  }

  private makePopupContent<T extends TextSection | MediaSection>(
    selector: string,
    InputSection: InputSectionType<T>,
    makeSection: MakeSectionType<T>,
  ) {
    const noteButton = document.querySelector(selector)! as HTMLButtonElement;
    noteButton.onclick = () => {
      const addPopup = new AddPopup();
      const input = new InputSection();
      addPopup.addChild(input);
      addPopup.attachTo(this.popupRoot);

      addPopup.setOnSubmitListener(() => {
        const note = makeSection(input);
        this.page.addChild(note);
        addPopup.removeFrom(this.popupRoot);
      });
      addPopup.setOnCloseListener(() => {
        addPopup.removeFrom(this.popupRoot);
      });
    };
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);

/**
 * querySelector의 타입은 Element이다.
 * 즉, querySelector는 Element를 상속하는 어떤 자식요소도 리턴할 수 있다.
 */

/**
 * App은 읽기만 가능한 PageComponent 멤버변수를 가지고 있고
 * App을 불러오면 PageComponent 인스턴스가 생성된 후 attachTo 메서드를 호출한다
 * App의 인자에는 PageComponent가 붙을 부모인자를 넣어준다
 * .document(App) > ul (PageComponent)
 */
