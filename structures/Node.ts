export class ListNode<T> {
  val: T | null;
  next: ListNode<T> | null;

  constructor(value: T, next = null) {
    this.val = value;
    this.next = next;
  }
}
