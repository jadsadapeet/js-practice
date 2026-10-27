import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Account } from './code.js';

test('deposit', () => {
  const acc = new Account('Ann', 100);
  acc.deposit(50);
  assert.equal(acc.balance, 150);
});

test('deposit: amount ผิดต้อง throw', () => {
  const acc = new Account('Ann', 100);
  assert.throws(() => acc.deposit(-50));
  assert.throws(() => acc.deposit(0));
  assert.throws(() => acc.deposit('50'));
  assert.equal(acc.balance, 100);
});

test('withdraw', () => {
  const acc = new Account('Ann', 100);
  acc.withdraw(100);
  assert.equal(acc.balance, 0);
});

test('withdraw: ถอนเกินยอดต้อง throw', () => {
  const acc = new Account('Ann', 100);
  assert.throws(() => acc.withdraw(100.5));
  assert.equal(acc.balance, 100);
});

test('withdraw: amount ติดลบต้อง throw', () => {
  const acc = new Account('Ann', 100);
  assert.throws(() => acc.withdraw(-50));
  assert.equal(acc.balance, 100);
});

test('transfer', () => {
  const a = new Account('Ann', 100);
  const b = new Account('Bob', 0);
  a.transfer(b, 30);
  assert.equal(a.balance, 70);
  assert.equal(b.balance, 30);
});

test('transfer: โอนไม่สำเร็จ ยอดเงินต้องไม่เปลี่ยน', () => {
  const a = new Account('Ann', 100);
  const b = new Account('Bob', 0);
  assert.throws(() => a.transfer(b, 500));
  assert.equal(a.balance, 100);
  assert.equal(b.balance, 0);
});

test('getHistory: แก้จากภายนอกไม่ได้', () => {
  const acc = new Account('Ann', 100);
  acc.deposit(10);
  acc.getHistory().push({ type: 'deposit', amount: 1000000 });
  assert.equal(acc.getHistory().length, 1);
});
