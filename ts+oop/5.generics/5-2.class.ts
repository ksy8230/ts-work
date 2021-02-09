interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

// number와 number 타입을 갖는다
const either: Either<number, number> = new SimpleEither(4, 5);
either.left();

// { name: string } 타입의 객체와 string을 갖는다
const best = new SimpleEither({ name: 'sy' }, 'hello');
