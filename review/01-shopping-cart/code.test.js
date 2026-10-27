import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addItem, removeItem, getTotal, applyDiscount } from './code.js';

test('addItem: เพิ่มสินค้าใหม่', () => {
  const cart = addItem([], { id: 1, price: 10, qty: 1 });
  assert.deepEqual(cart, [{ id: 1, price: 10, qty: 1 }]);
});

test('addItem: สินค้าซ้ำต้องบวก qty', () => {
  const cart = [{ id: 1, price: 10, qty: 2 }];
  const result = addItem(cart, { id: 1, price: 10, qty: 3 });
  assert.equal(result[0].qty, 5);
});

test('addItem: ห้ามแก้ตะกร้าเดิม', () => {
  const cart = [{ id: 1, price: 10, qty: 2 }];
  addItem(cart, { id: 1, price: 10, qty: 3 });
  addItem(cart, { id: 2, price: 5, qty: 1 });
  assert.deepEqual(cart, [{ id: 1, price: 10, qty: 2 }]);
});

test('removeItem', () => {
  const cart = [{ id: 1 }, { id: 2 }];
  assert.deepEqual(removeItem(cart, 1), [{ id: 2 }]);
  assert.equal(cart.length, 2, 'ห้ามแก้ตะกร้าเดิม');
});

test('removeItem: id ที่ไม่มี ต้องไม่ลบอะไร', () => {
  const cart = [{ id: 1 }, { id: 2 }];
  assert.deepEqual(removeItem(cart, 99), [{ id: 1 }, { id: 2 }]);
});

test('getTotal: คิด qty ด้วย', () => {
  const cart = [
    { id: 1, price: 10, qty: 2 },
    { id: 2, price: 5, qty: 1 },
  ];
  assert.equal(getTotal(cart), 25);
});

test('getTotal: ปัดทศนิยม 2 ตำแหน่ง', () => {
  const cart = [
    { id: 1, price: 0.1, qty: 1 },
    { id: 2, price: 0.2, qty: 1 },
  ];
  assert.equal(getTotal(cart), 0.3);
});

test('applyDiscount', () => {
  assert.equal(applyDiscount(200, 10), 180);
  assert.equal(applyDiscount(200, 0), 200);
  assert.equal(applyDiscount(200, 100), 0);
});

test('applyDiscount: percent นอกช่วงต้อง throw', () => {
  assert.throws(() => applyDiscount(200, -5));
  assert.throws(() => applyDiscount(200, 150));
});
