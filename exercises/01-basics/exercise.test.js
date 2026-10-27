import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, isEven, getGrade, sumTo, fizzBuzz, max3 } from './exercise.js';

test('add', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
  assert.equal(add(0.5, 0.25), 0.75);
});

test('isEven', () => {
  assert.equal(isEven(4), true);
  assert.equal(isEven(7), false);
  assert.equal(isEven(0), true);
  assert.equal(isEven(-2), true);
});

test('getGrade', () => {
  assert.equal(getGrade(100), 'A');
  assert.equal(getGrade(80), 'A');
  assert.equal(getGrade(79), 'B');
  assert.equal(getGrade(70), 'B');
  assert.equal(getGrade(65), 'C');
  assert.equal(getGrade(50), 'D');
  assert.equal(getGrade(49), 'F');
  assert.equal(getGrade(0), 'F');
});

test('getGrade: คะแนนนอกช่วง', () => {
  assert.equal(getGrade(-1), 'invalid');
  assert.equal(getGrade(101), 'invalid');
});

test('sumTo', () => {
  assert.equal(sumTo(4), 10);
  assert.equal(sumTo(1), 1);
  assert.equal(sumTo(100), 5050);
  assert.equal(sumTo(0), 0);
  assert.equal(sumTo(-5), 0);
});

test('fizzBuzz', () => {
  assert.deepEqual(fizzBuzz(5), [1, 2, 'Fizz', 4, 'Buzz']);
  assert.deepEqual(fizzBuzz(15).slice(-1), ['FizzBuzz']);
  assert.deepEqual(fizzBuzz(0), []);
});

test('max3', () => {
  assert.equal(max3(1, 9, 4), 9);
  assert.equal(max3(9, 1, 4), 9);
  assert.equal(max3(1, 4, 9), 9);
  assert.equal(max3(-3, -1, -2), -1);
  assert.equal(max3(5, 5, 5), 5);
  assert.ok(!max3.toString().includes('Math.max'), 'ห้ามใช้ Math.max ในโจทย์นี้');
});
