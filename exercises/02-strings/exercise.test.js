import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reverse, capitalize, countVowels, isPalindrome, titleCase, greet, truncate } from './exercise.js';

test('reverse', () => {
  assert.equal(reverse('abc'), 'cba');
  assert.equal(reverse(''), '');
  assert.equal(reverse('a b'), 'b a');
});

test('capitalize', () => {
  assert.equal(capitalize('hELLO'), 'Hello');
  assert.equal(capitalize('a'), 'A');
  assert.equal(capitalize(''), '');
});

test('countVowels', () => {
  assert.equal(countVowels('Banana'), 3);
  assert.equal(countVowels('AEIOU'), 5);
  assert.equal(countVowels('xyz'), 0);
});

test('isPalindrome', () => {
  assert.equal(isPalindrome('racecar'), true);
  assert.equal(isPalindrome('Racecar'), true);
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
  assert.equal(isPalindrome('hello'), false);
});

test('titleCase', () => {
  assert.equal(titleCase('hello big world'), 'Hello Big World');
  assert.equal(titleCase('jAVA sCRIPT'), 'Java Script');
});

test('greet', () => {
  assert.equal(greet('Ann', 20), 'Hi Ann, you are 20 years old');
});

test('truncate', () => {
  assert.equal(truncate('Hello world', 8), 'Hello...');
  assert.equal(truncate('Hi', 8), 'Hi');
  assert.equal(truncate('12345678', 8), '12345678');
  assert.ok(truncate('a very long sentence', 10).length <= 10);
});
