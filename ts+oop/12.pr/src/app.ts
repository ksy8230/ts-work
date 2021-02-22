import { Composable, PageComponent } from './components/page/page.js';

import { ImageComponent } from './components/page/item/image.js';
import { Component } from './components/base.js';
import { RecordComponent } from './components/page/item/record.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { AddPopup } from './components/popup/addPopup.js';
// import { MediaSection } from './components/popup/input/media-input.js';
import { TextSection } from './components/popup/input/text-input.js';

/**
 * ✨ node에서 import export를 사용할 땐 웹팩이 자동으로 번들을 해줘서 확장자 생략이 가능하지만
 * 여기는 웹팩이 없고 html에서 js를 불러올 때 type="module"을 지정했기 때문에 .js로 모듈을 불러와야 한다 :)
 */

class App {
  // page는 Component이면서 Composable이 가능한 요소
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, popupRoot: HTMLElement) {
    this.page = new PageComponent();

    const image = new ImageComponent('title..', 'https://picsum.photos/id/104/500/500');
    this.page.addChild(image);

    const record = new RecordComponent('record title...', 'https://www.youtube.com/watch?v=Y476dImW2vI');
    this.page.addChild(record);

    //const note = new NoteComponent('note title...', 'I am note body content');
    //this.page.addChild(note);

    const todo = new TodoComponent('note title...', 'I am note body content');
    this.page.addChild(todo);

    /**
     * 추가 팝업
     */
    const imageButton = document.querySelector('#new-photo')! as HTMLButtonElement;
    imageButton.onclick = () => {
      const addPopup = new AddPopup();
      const inputSection = new TextSection();
      addPopup.addChild(inputSection);
      addPopup.attachTo(popupRoot);

      addPopup.setOnSubmitListener(() => {
        const note = new NoteComponent(inputSection.title, inputSection.body);
        this.page.addChild(note);
        addPopup.removeFrom(popupRoot);
      });
      addPopup.setOnCloseListener(() => {
        addPopup.removeFrom(popupRoot);
      });
    };

    this.page.attachTo(appRoot);
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
