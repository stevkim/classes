import { describe, test, expect } from "@jest/globals";
import Stack from "../structures/Stack";

describe('Stack', () => {
  const stack = new Stack();
  const list = [0, 1, 2, 3, 4];

  beforeEach(() => {
    return stack.clearStack();
  })

  test('Successfully initializes', () => {
    expect(stack.stack).toStrictEqual([]);
    expect(stack.size).toStrictEqual(0);
  })

  test('Successfully adds to the Stack', () => {
    stack.push(0);
    expect(stack.stack).toStrictEqual([0]);
    stack.clearStack();

    for (const value of list) {
      stack.push(value);
    }
    expect(stack.stack).toStrictEqual(list);

    expect(stack.stack.includes(10)).not.toBe(true);
  })

  test('Successfully removes from the Stack', () => {
    stack.push(0);
    expect(stack.stack).toStrictEqual([0]);
    const removed = stack.pop();
    expect(stack.stack).toStrictEqual([]);
    expect(removed).toBe(0);

    for (const value of list) {
      stack.push(value);
    }
    expect(stack.stack).toStrictEqual(list);
    const removedFromEnd = stack.pop();
    expect(stack.stack).toStrictEqual([0, 1, 2, 3]);
    expect(removedFromEnd).toBe(4);
  });

  test('Successfully gets a random value from Stack', () => {
    for (const value of list) {
      stack.push(value);
    }

    for (let i = 0; i < 3; i++) {
      const random: number = stack.randomValue();
      expect(list.includes(random)).toBe(true);
    }
  });
})
