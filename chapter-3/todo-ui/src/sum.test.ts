import { describe, expect, it } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should add two numbers', () => {
    expect.assertions(1);
    expect(sum(1, 2)).toBe(3);
  });
});
