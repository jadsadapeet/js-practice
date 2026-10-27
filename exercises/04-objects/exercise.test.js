import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getFullName, countWords, pick, omit, invert, groupBy, getCity, mergeSettings } from './exercise.js';

test('getFullName', () => {
  assert.equal(getFullName({ first: 'Ann', last: 'Lee' }), 'Ann Lee');
});

test('countWords', () => {
  assert.deepEqual(countWords('a b A'), { a: 2, b: 1 });
  assert.deepEqual(countWords('the cat and the hat'), { the: 2, cat: 1, and: 1, hat: 1 });
  assert.deepEqual(countWords(''), {});
});

test('pick', () => {
  assert.deepEqual(pick({ a: 1, b: 2, c: 3 }, ['a', 'c']), { a: 1, c: 3 });
  assert.deepEqual(pick({ a: 1 }, ['z']), {});
});

test('omit', () => {
  const input = { a: 1, b: 2, c: 3 };
  assert.deepEqual(omit(input, ['a', 'c']), { b: 2 });
  assert.deepEqual(input, { a: 1, b: 2, c: 3 }, 'ห้ามแก้ object เดิม');
});

test('invert', () => {
  assert.deepEqual(invert({ a: 'x', b: 'y' }), { x: 'a', y: 'b' });
  assert.deepEqual(invert({}), {});
});

test('groupBy', () => {
  const pets = [
    { name: 'Tom', type: 'cat' },
    { name: 'Rex', type: 'dog' },
    { name: 'Kit', type: 'cat' },
  ];
  assert.deepEqual(groupBy(pets, 'type'), {
    cat: [pets[0], pets[2]],
    dog: [pets[1]],
  });
  assert.deepEqual(groupBy([], 'type'), {});
});

test('getCity', () => {
  assert.equal(getCity({ address: { city: 'Bangkok' } }), 'Bangkok');
  assert.equal(getCity({ address: {} }), 'unknown');
  assert.equal(getCity({}), 'unknown');
  assert.equal(getCity(null), 'unknown');
});

test('mergeSettings', () => {
  const defaults = { theme: 'light', fontSize: 14, lang: 'th' };
  const merged = mergeSettings(defaults, { theme: 'dark' });
  assert.deepEqual(merged, { theme: 'dark', fontSize: 14, lang: 'th' });
  assert.equal(defaults.theme, 'light', 'ห้ามแก้ defaults');
});
