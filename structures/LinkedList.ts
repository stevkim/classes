import { ListNode } from "./Node";

class LinkedList<T> {
  #head: ListNode<T> | null;
  #tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.length = 0;
  }

  addToTail(value:T):void {
    const newNode = new ListNode(value);

    if (this.#tail) {
      this.#tail.next = newNode;
      this.#tail = newNode;
    } else {
      this.#head = newNode;
      this.#tail = newNode;
    };
    this.length++;
  }

  addToHead(value:T):void {
    const newNode = new ListNode(value);

    if (this.#head) {
      newNode.next = this.#head;
      this.#head = newNode;
    } else {
      this.#head = newNode;
      this.#tail = newNode;
    }
    this.length++;
  }

  removeFromTail():void {
    if (!this.#tail) return;

    let newTail = this.#head;

    while (newTail !== this.#tail) {
      newTail = newTail.next;
    }
    this.#tail = newTail;
    newTail.next= null;
    this.length--;
  }

  removeFromHead():void {
    if (!this.#head) return;

    this.#head = this.#head.next;
    this.length--;
  }

  getList():T[] {
    const result = [];
    let current = this.#head;

    while (current) {
      result.push(current.val);

      current = current.next;
    }

    return result;
  }

  exists(value:T):boolean {
    let current = this.#head;

    while (current) {
      if (current.val === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  getIndex(value:T):number {
    let current = this.#head;
    let index = 0;

    while (current) {
      if (current.val === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  addAtIndex(value:T, index:number) {
    if (index > this.length) return;
    let current = this.#head;

    // because we want it to be 0 indexed
    while (index > 1) {
      current = current.next;
      index--;
    }

    const newNode = new ListNode(value);
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  removeAtIndex(index:number) {
    if (index > this.length) return;
    if (this.length === 1) {
      return this.clear();
    }
    if (index === 0) {
      return this.removeFromHead();
    }

    let current = this.#head;
    let prevNode = new ListNode(null, current);

    while (index > 0) {
      current = current.next;
      prevNode = prevNode.next;
      index--;
    }
    prevNode.next = current.next;
  };

  reverseList():void {
    const list = [];
    let current = this.#head;
    while (current) {
      list.push(current.val);
      current = current.next;
    }
    const newHead = new ListNode(list.pop());
    this.#head = newHead;
    let newCurrent = newHead;

    while (!!list.length) {
      const newNode = new ListNode(list.pop());
      newCurrent.next = newNode;
      this.#tail = newCurrent;
      newCurrent = newCurrent.next;
    }
  }

  createLoop():void {
    if (this.length < 2) return;

    let randomIndex = Math.floor(Math.random() * this.length - 1);
    let current = this.#head;

    while (randomIndex > 0) {
      current = current.next;
      randomIndex--;
    }
    this.#tail.next = current;
  }

  isLooped():boolean {
    let left = this.#head;
    let right = left.next;

    while (right && right.next) {
      if (left === right) return true;
      left = left.next;
      right = right.next.next;
    }
    return false;
  }

  clear() {
    this.#head = null;
    this.#tail = null;
    this.length = 0;
  }
}

export default LinkedList;
