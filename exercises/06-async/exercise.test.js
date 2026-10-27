import { test } from 'node:test';
import assert from 'node:assert/strict';
import { delay, getUserName, getUserNameSafe, getManyUsers, retry } from './exercise.js';

test('delay', async () => {
  const start = Date.now();
  const result = delay(100);
  assert.ok(result instanceof Promise, 'delay ต้องคืน Promise');
  await result;
  assert.ok(Date.now() - start >= 90);
});

test('getUserName', async () => {
  assert.equal(await getUserName(1), 'Ann');
  await assert.rejects(getUserName(99));
});

test('getUserNameSafe', async () => {
  assert.equal(await getUserNameSafe(2), 'Bob');
  assert.equal(await getUserNameSafe(99), 'anonymous');
});

test('getManyUsers', async () => {
  assert.deepEqual(await getManyUsers([3, 1]), ['Cat', 'Ann']);
});

test('getManyUsers: ต้องดึงพร้อมกัน ไม่ใช่ทีละคน', async () => {
  const start = Date.now();
  await getManyUsers([1, 2, 3]);
  // fetchUser ใช้เวลาครั้งละ 50ms ถ้าดึงทีละคนจะใช้ 150ms ขึ้นไป
  assert.ok(Date.now() - start < 120, 'ใช้เวลานานเกินไป ลองใช้ Promise.all');
});

test('retry: สำเร็จหลังลองใหม่', async () => {
  let attempts = 0;
  const flaky = async () => {
    attempts++;
    if (attempts < 3) throw new Error('fail');
    return 'ok';
  };
  assert.equal(await retry(flaky, 5), 'ok');
  assert.equal(attempts, 3);
});

test('retry: ลองครบแล้วยังพัง', async () => {
  let attempts = 0;
  const alwaysFail = async () => {
    attempts++;
    throw new Error(`fail ${attempts}`);
  };
  await assert.rejects(retry(alwaysFail, 3), { message: 'fail 3' });
  assert.equal(attempts, 3);
});
