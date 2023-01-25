type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    const node = { value: item, prev: this.head };
    this.head = node;
    this.length++;
  }

  pop(): T | undefined {
    const head = this.head;
    this.head = head?.prev;
    this.length && this.length--;
    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
