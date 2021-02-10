interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(value: T): void;
}

type StackNode<T> = {
  readonly value: T; // readonly 불변
  readonly next?: StackNode<T>; // readonly 불변
};

class StackImpl<T> implements Stack<T> {
  private _size = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error('스택이 꽉 찼습니다!');
    }
    const node: StackNode<T> = { value: value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (this.head == null) {
      // null == undefined, null !== undefined
      throw new Error('스택이 비었습니다.');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}

const stack = new StackImpl<string>(3);
stack.push('sy1');
stack.push('sy2');
stack.push('sy3');

while (stack.size !== 0) {
  console.log(stack.size, stack.pop());
}

const stack2 = new StackImpl<number>(3);
stack2.push(11);
stack2.push(22);
stack2.push(333);

while (stack2.size !== 0) {
  console.log(stack2.size, stack2.pop());
}
