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
})
