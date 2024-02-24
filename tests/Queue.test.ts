// const { describe, expect, test} = require('@jest/globals');
// const Queue = require('../structures/Queue');
import { describe, expect, test } from '@jest/globals';
import Queue from '../structures/Queue';

describe('Queue', () => {
  const queue = new Queue();
  const list = [0, 1, 2, 3, 4];

  beforeEach(() => {
    return queue.clearQueue();
  })

  test('Successfully initializes', () => {
    expect(queue.queue).toStrictEqual([]);
    expect(queue.size).toStrictEqual(0);
  });

  test('Successfully adds to the Queue', () => {
    queue.enqueue(0);
    expect(queue.queue).toStrictEqual([0]);
    queue.clearQueue();

    for (const value in list) {
      queue.enqueue(list[value]);
    }
    expect(queue.queue).toStrictEqual(list);
  });

  test('Successfully removes from the queue', () => {
    queue.enqueue(0);
    expect(queue.queue).toStrictEqual([0]);
    queue.dequeue();
    expect(queue.queue).toStrictEqual([]);

    for (const value in list) {
      queue.enqueue(list[value]);
    }
    expect(queue.queue).toStrictEqual(list);
    queue.dequeue();
    expect(queue.queue).toStrictEqual([1, 2, 3, 4]);
  });

  test('Successfully gets a random value from queue', () => {
    for (const value in list) {
      queue.enqueue(list[value]);
    }

    for (let i = 0; i < 3; i++) {
      const random: number = queue.randomQueue();
      expect(list.includes(random)).toBe(true);
    }
  });
})
