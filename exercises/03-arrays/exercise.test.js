import { test } from 'node:test';
import assert from 'node:assert/strict';
import { doubleAll, onlyPositive, sum, average, unique, chunk, flatten, sortByAge, countBy } from './exercise.js';

test('doubleAll', () => {
  assert.deepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
  assert.deepEqual(doubleAll([]), []);
});

test('doubleAll: ห้ามแก้ array เดิม', () => {
  const input = [1, 2];
  doubleAll(input);
  assert.deepEqual(input, [1, 2]);
});

test('onlyPositive', () => {
  assert.deepEqual(onlyPositive([-1, 0, 3, 5]), [3, 5]);
  assert.deepEqual(onlyPositive([-1]), []);
});

test('sum', () => {
  assert.equal(sum([1, 2, 3]), 6);
  assert.equal(sum([]), 0);
});

test('average', () => {
  assert.equal(average([2, 4]), 3);
  assert.equal(average([5]), 5);
  assert.equal(average([]), null);
});

test('unique', () => {
  assert.deepEqual(unique([1, 2, 1, 3, 2]), [1, 2, 3]);
  assert.deepEqual(unique(['a', 'a']), ['a']);
  assert.deepEqual(unique([]), []);
});

test('chunk', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  assert.deepEqual(chunk([1, 2, 3], 3), [[1, 2, 3]]);
  assert.deepEqual(chunk([], 2), []);
});

test('flatten', () => {
  assert.deepEqual(flatten([[1, 2], [3], []]), [1, 2, 3]);
  assert.deepEqual(flatten([]), []);
  assert.ok(!flatten.toString().includes('.flat('), 'ห้ามใช้ .flat()');
});

test('sortByAge', () => {
  const people = [
    { name: 'Ann', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Cat', age: 25 },
  ];
  const sorted = sortByAge(people);
  assert.deepEqual(sorted.map((p) => p.name), ['Bob', 'Cat', 'Ann']);
  assert.equal(people[0].name, 'Ann', 'ห้ามแก้ array เดิม');
});

test('countBy', () => {
  const parity = (n) => (n % 2 === 0 ? 'even' : 'odd');
  assert.deepEqual(countBy([1, 2, 3, 4, 5], parity), { odd: 3, even: 2 });
  assert.deepEqual(countBy(['apple', 'avocado', 'banana'], (s) => s[0]), { a: 2, b: 1 });
  assert.deepEqual(countBy([], parity), {});
});
