class Queue {
  queue:number[];
  size:number;

  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(value:number):void {
    this.queue.push(value);
    this.size++;
  }

  dequeue():number {
    const val = this.queue.shift();

    if (val) {
      this.size--;
      return val;
    } else {
      return;
    }
  }

  randomQueue():number {
    if (this.size === 0) return;

    const randomIndex = Math.floor(Math.random() * this.size);

    return this.queue[randomIndex];
  }

  clearQueue():void {
    this.queue = [];
    this.size = 0;
  }
}

export default Queue;
