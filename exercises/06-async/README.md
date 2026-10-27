# 06 — Async

เรื่องที่ฝึก: Promise, `async/await`, `try/catch`, `Promise.all`

แก้ไฟล์ `exercise.js` แล้วรัน `npm run test:06`

ในโจทย์นี้ใช้ `api.js` เป็น API จำลองแทนการเรียกเว็บจริง ห้ามแก้ไฟล์ `api.js`

| function | ทำอะไร |
|---|---|
| `delay(ms)` | คืน Promise ที่ resolve หลังผ่านไป ms มิลลิวินาที |
| `getUserName(id)` | เรียก `fetchUser(id)` แล้วคืนแค่ `name` |
| `getUserNameSafe(id)` | เหมือนข้อบน แต่ถ้า error ให้คืน `"anonymous"` |
| `getManyUsers(ids)` | ดึง user หลายคน**พร้อมกัน** (ไม่ใช่ทีละคน) แล้วคืน array ของ name ตามลำดับ ids |
| `retry(fn, times)` | เรียก async function `fn` ถ้า error ให้ลองใหม่ ลองได้สูงสุด `times` ครั้ง ถ้าครบแล้วยัง error ให้ throw error ตัวสุดท้าย |

**คำใบ้:** `new Promise(resolve => setTimeout(resolve, ms))`, `Promise.all`
