import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/item/image.js';
import { RecordComponent } from './components/page/item/record.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
/**
 * ✨ node에서 import export를 사용할 땐 웹팩이 자동으로 번들을 해줘서 확장자 생략이 가능하지만
 * 여기는 웹팩이 없고 html에서 js를 불러올 때 type="module"을 지정했기 때문에 .js로 모듈을 불러와야 한다 :)
 */

class App {
  // private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    // this.page = new PageComponent();
    // this.page.attachTo(appRoot);
    const page = new PageComponent();
    page.attachTo(appRoot, 'beforeend');

    const image = new ImageComponent(
      'title..',
      'https://picsum.photos/id/104/500/500',
    );
    image.attachTo(appRoot, 'beforeend');

    const record = new RecordComponent(
      'record title...',
      'https://www.youtube.com/Y476dImW2vI',
    );
    record.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('note title...', 'I am note body content');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('todo title...', 'I am todo content');
    todo.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);

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
