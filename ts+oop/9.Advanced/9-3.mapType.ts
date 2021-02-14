{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  /*
  type VideoOptional = {
    title?: string;
    author?: string;
    description?: string;
  };
  */

  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    author: 'sy',
    // animal: 'rabbit', 지정된 타입 프로퍼티만 사용 가능하기 때문에 error!
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    age: 12,
  };
  animal.age = 20;

  const readOnlyAnimal: ReadOnly<Animal> = {
    name: 'rabbit',
    age: 12,
  };
  // readOnlyAnimal.age = 20; 지정된 타입들이 readonly이기 때문에  error!

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  // Nullable타입은 기존에 주어진 T 타입의 키를 돌면서 기존의 밸류 타입을 쓰거나 null을 지정한다

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: null,
  };
  obj2.title = 'title';

  /**
   * type 객체 안에서 [] 배열 키를 사용하면 순차적으로 순회를 하면서 타입을 매핑해준다 ✨
   */
}
