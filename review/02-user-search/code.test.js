import { test } from 'node:test';
import assert from 'node:assert/strict';
import { searchUsers, sortByName, paginate, findById, getActiveEmails } from './code.js';

const users = () => [
  { id: 3, name: 'Charlie', email: 'c@x.com', active: true },
  { id: 1, name: 'alice', email: 'a@x.com', active: false },
  { id: 2, name: 'Bob', email: null, active: true },
  { id: 4, name: 'Alex', email: 'alex@x.com', active: 'yes' },
];

test('searchUsers: ไม่สนตัวใหญ่ตัวเล็ก', () => {
  const names = searchUsers(users(), 'AL').map((u) => u.name);
  assert.deepEqual(names, ['alice', 'Alex']);
});

test('searchUsers: keyword ว่างคืนทุกคน', () => {
  assert.equal(searchUsers(users(), '').length, 4);
});

test('sortByName: เรียง A-Z ไม่สนตัวใหญ่ตัวเล็ก', () => {
  const names = sortByName(users()).map((u) => u.name);
  assert.deepEqual(names, ['Alex', 'alice', 'Bob', 'Charlie']);
});

test('sortByName: ห้ามแก้ array เดิม', () => {
  const list = users();
  const result = sortByName(list);
  assert.notEqual(result, list, 'ต้องคืน array ใหม่ ไม่ใช่ array เดิม');
  assert.deepEqual(list.map((u) => u.id), [3, 1, 2, 4]);
});

test('paginate: page เริ่มที่ 1', () => {
  const list = [1, 2, 3, 4, 5];
  assert.deepEqual(paginate(list, 1, 2), [1, 2]);
  assert.deepEqual(paginate(list, 3, 2), [5]);
  assert.deepEqual(paginate(list, 4, 2), []);
});

test('findById', () => {
  assert.equal(findById(users(), 2).name, 'Bob');
  assert.equal(findById(users(), 99), null);
  assert.equal(findById(users(), '2'), null);
});

test('getActiveEmails: active ต้องเป็น true และต้องมี email', () => {
  assert.deepEqual(getActiveEmails(users()), ['c@x.com']);
});
