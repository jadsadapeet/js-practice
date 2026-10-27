import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeCounter, multiplier, once, memoize, compose, sumAll } from './exercise.js';

test('makeCounter', () => {
  const c = makeCounter();
  assert.equal(c.value(), 0);
  c.increment();
  c.increment();
  c.decrement();
  assert.equal(c.value(), 1);
});

test('makeCounter: แต่ละ counter แยกกัน', () => {
  const a = makeCounter();
  const b = makeCounter();
  a.increment();
  assert.equal(a.value(), 1);
  assert.equal(b.value(), 0);
});

test('multiplier', () => {
  assert.equal(multiplier(3)(5), 15);
  const double = multiplier(2);
  assert.equal(double(10), 20);
});

test('once', () => {
  let calls = 0;
  const init = once(() => {
    calls++;
    return 'ready';
  });
  assert.equal(init(), 'ready');
  assert.equal(init(), 'ready');
  assert.equal(calls, 1);
});

test('memoize', () => {
  let calls = 0;
  const slowSquare = (n) => {
    calls++;
    return n * n;
  };
  const fastSquare = memoize(slowSquare);
  assert.equal(fastSquare(4), 16);
  assert.equal(fastSquare(4), 16);
  assert.equal(calls, 1);
  assert.equal(fastSquare(5), 25);
  assert.equal(calls, 2);
});

test('compose', () => {
  const add1 = (x) => x + 1;
  const double = (x) => x * 2;
  assert.equal(compose(add1, double)(5), 11); // add1(double(5))
  assert.equal(compose(double, add1)(5), 12); // double(add1(5))
  assert.equal(compose()(7), 7);
});

test('sumAll', () => {
  assert.equal(sumAll(1, 2, 3), 6);
  assert.equal(sumAll(), 0);
});
