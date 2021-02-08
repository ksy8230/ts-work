interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(value: string): void;
}

type StackNode = {
  readonly value: string; // readonly 불변
  readonly next?: StackNode; // readonly 불변
};

class StackImpl implements Stack {
  private _size = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('스택이 꽉 찼습니다!');
    }
    const node: StackNode = { value: value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
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

const stack = new StackImpl(3);
stack.push('sy1');
stack.push('sy2');
stack.push('sy3');

while (stack.size !== 0) {
  console.log(stack.size, stack.pop());
}

// stack.pop()

/**
 * stack.push('Ellie 1');
 * head -> { value: 'Ellie 1', next?: undefined }
 *
 * stack.push('Bob 2');
 * head -> { value: 'Bob 2', next?: {value: 'Ellie 1', next?: undefined }
 *
 * stack.push('Steve 3');
 * head -> { value: 'Steve 3', next?: {value: 'Bob 2', next?: {value: 'Ellie 1', next?: undefined }
 *
 * stack.pop();
 * current head는 Steve 3을 value로 갖고 있으므로
 * Steve 3을 return하고, next에 있는 StackNode 즉 Bob 2를 push 했을 때 head 위치로 변경하게 됩니다.
 *
 * this.head = node.next
 * ==>> next?: {value: 'Bob 2', next?: {value: 'Ellie 1', next? : undefined }
 * Steve 3 은 리스트에서 제외되게 됩니다.
 *
 * stack.pop();
 * current head는 Bob 2를 value로 갖고 있으므로
 * Bob2를 return하고, next에 있는 StackNode 즉 Ellie 1을  push 했을 때 head 위치로 변경하게 됩니다.
 * this.head = node.next
 * ==>> next?: {value: 'Ellie 1', next? undefined }
 * Bob 2 는 리스트에서 제외되게 됩니다.
 *
 * stack.pop();
 * current head는 Ellie 1을 value로 갖고 있으므로
 * Ellie 1을 return하고, next는 undefined 즉 더 이상 데이터 없음을 의미합니다.
 * this.head = node.next
 * ==>> next?: undefined
 * Ellie 1은 리스트에서 제외되게 됩니다.
 *
 * 현재 head의 위치는 undefined이므로 이후 다시 pop을 실행하면
 * 에러가 발생하게 됩니다.
 *
 */
