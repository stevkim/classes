class Stack {
  stack: number[];
  size: number;

  constructor() {
    this.stack = [];
    this.size = 0;
  };

  push(value:number) {
    this.stack.push(value);
  };

  pop():number {
    return this.stack.pop();
  };

  randomValue():number {
    const randomIndex = Math.floor(Math.random() * this.size);
    return this.stack[randomIndex];
  };

  clearStack():void {
    this.stack = [];
    this.size = 0;
  };
}

export default Stack;
