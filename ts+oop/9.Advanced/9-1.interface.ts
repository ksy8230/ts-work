{
  type Position = {
    x: number;
    y: number;
  };

  interface PositionI {
    x: number;
    y: number;
  }

  // object ❤
  // 둘 다 객체를 정의하고 타입을 할당할 수 있다
  const object1: Position = {
    x: 1,
    y: 1,
  };

  const object2: PositionI = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ❤
  // 둘 다 클래스를 구현할 수 있다
  class pos1 implements Position {
    x: number;
    y: number;
  }

  class pos2 implements PositionI {
    x: number;
    y: number;
  }

  // extends ❤
  // 둘 다 확장이 가능하다
  // interface는 extends를 이용해서, type은 intersection을 이용해서
  interface ZPositionI extends PositionI {
    z: number;
  }

  type ZPosition = Position & { z: number };

  // interface만 결합이 가능하다
  interface PositionI {
    z: number;
  }

  // Type만 프로퍼티를 이용한 계산이 가능하다
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string 타입이 지정된다

  // Type만 유니언 타입이 가능하다
  type Ors = 'man' | 'woman';
}
