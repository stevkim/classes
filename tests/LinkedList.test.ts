import LinkedList from "../structures/LinkedList";
import { describe, test, expect } from "@jest/globals";

describe('Linked Lists', () => {
  const list = new LinkedList<number>();
  const numList = [0, 1, 2, 3, 4];

  beforeEach(() => {
    list.clear();
  })

  test('Successfully initializes', () => {
    expect(list.length).toStrictEqual(0);
  });

  test('Successfully adds to the list', () => {
    list.addToHead(0);
    expect(list.length).toStrictEqual(1);
    list.clear();

    for (let value of numList) {
      list.addToTail(value);
    }
    expect(list.length).toStrictEqual(numList.length);
    expect(list.getList()).toStrictEqual(numList);
    list.clear();

    for(let value of numList) {
      list.addToHead(value);
    }
    expect(list.length).toStrictEqual(numList.length);

    const tempList = [...numList];
    expect(list.getList()).toStrictEqual(tempList.reverse());
  });

  test('Successfully removes from the list', () => {
    list.removeFromHead();
    expect(list.length).toStrictEqual(0);
    list.removeFromTail();
    expect(list.length).toStrictEqual(0);

    for (let value of numList) {
      list.addToTail(value);
    }
    list.removeFromHead();
    expect(list.length).toStrictEqual(numList.length - 1);
    expect(list.getList()).toStrictEqual(numList.slice(1));

    list.removeFromTail();
    expect(list.length).toStrictEqual(numList.length - 2);
    expect(list.getList()).toStrictEqual(numList.slice(1, numList.length));
  });

  test('Successfully adds at index', () => {
    for (let value of numList) {
      list.addToTail(value);
    }
    list.addAtIndex(10, 2);
    expect(list.getList()).not.toStrictEqual(numList);
    expect(list.exists(10)).toBe(true);
    expect(list.getIndex(10)).toStrictEqual(2);
  });

  test('Successfully removes at index', () => {
    for (let value of numList) {
      list.addToTail(value);
    }
    list.removeAtIndex(10);
    expect(list.getList()).toStrictEqual(numList);

    list.removeAtIndex(2);
    expect(list.exists(2)).toBe(false);

    list.removeAtIndex(1);
    expect(list.exists(1)).toBe(false);
    expect(list.exists(3)).toBe(true);
  })

  test('Successfully reverses list', () => {
    for (let value of numList) {
      list.addToTail(value);
    }
    list.reverseList();
    expect(list.getList()).not.toStrictEqual(numList);
    const tempList = [...numList];
    expect(list.getList()).toStrictEqual(tempList.reverse());

    const stringList = new LinkedList<string>();
    const testList = ['a', 'b', 'c', 'd'];
    for (let value of testList) {
      stringList.addToTail(value);
    }
    expect(stringList.getList()).toStrictEqual(testList);
    stringList.reverseList();
    expect(stringList.getList()).not.toStrictEqual(testList);
    expect(stringList.getList()).toStrictEqual(testList.reverse());
  })
})
