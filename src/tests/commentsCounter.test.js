/**
 * @jest-environment jsdom
 */

import commentsCounter from './commentsCounter';

describe('Array length to determine comment count', () => {
  test('Comments on item with id 0', () => commentsCounter(0).then((data) => {
    expect(data).toBe(3);
  }));

  test('Comments on item with id 1', () => commentsCounter(1).then((data) => {
    expect(data).toBe(2);
  }));

  test('Comments on item with id 2', () => commentsCounter(2).then((data) => {
    expect(data).toBe(1);
  }));

  test('Comments on item with id 3', () => commentsCounter(3).then((data) => {
    expect(data).toBe(0);
  }));
});