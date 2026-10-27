# JS Practice

แบบฝึกหัด JavaScript พร้อม test ให้รันเช็คคำตอบเองได้ แบ่งเป็น 2 ส่วน คือ **เขียนโค้ด** กับ **รีวิวโค้ด**

## เริ่มต้น

ต้องมี [Node.js](https://nodejs.org) เวอร์ชัน 22 ขึ้นไป (เช็คด้วยคำสั่ง `node --version`) ไม่ต้อง `npm install` เพราะไม่มี dependency

```bash
git clone <url ของ repo นี้>
cd js-practice
npm run test:01      # รัน test เฉพาะชุดที่ 1
```

ตอนเริ่ม test จะ fail เกือบทั้งหมด ถือว่าปกติ หน้าที่ของคุณคือแก้โค้ดจนผ่านทุกข้อ

## วิธีทำแต่ละชุด

1. อ่าน `README.md` ในโฟลเดอร์ของชุดนั้น
2. แก้ `exercise.js` โดยลบบรรทัด `throw new Error('ยังไม่ได้ทำ')` แล้วเขียนโค้ดของคุณแทน
3. รัน `npm run test:XX`
4. อ่าน error ที่ fail แล้วแก้ไปเรื่อย ๆ จนผ่านทุกข้อ

**ห้ามแก้ไฟล์ `*.test.js`** เพราะ test เป็นตัวตรวจคำตอบ ถ้าแก้ test ให้ผ่านก็เท่ากับโกงตัวเอง

> ใช้ `npm run watch` ได้ ระบบจะรัน test ใหม่ให้อัตโนมัติทุกครั้งที่ save ไฟล์

## ลำดับโจทย์

| ชุด | หัวข้อ | คำสั่ง |
|---|---|---|
| [01-basics](exercises/01-basics) | ตัวแปร, if, loop, function | `npm run test:01` |
| [02-strings](exercises/02-strings) | method ของ string | `npm run test:02` |
| [03-arrays](exercises/03-arrays) | map / filter / reduce | `npm run test:03` |
| [04-objects](exercises/04-objects) | object, destructuring, spread | `npm run test:04` |
| [05-functions](exercises/05-functions) | closure, higher-order function | `npm run test:05` |
| [06-async](exercises/06-async) | Promise, async/await | `npm run test:06` |
| [review](review) | **ฝึกรีวิว** หา bug ในโค้ดคนอื่น | `npm run test:review` |

แนะนำให้เริ่มทำ `review/` หลังจบชุด 04 เพราะต้องรู้เรื่อง array กับ object ก่อน

## ส่งงานให้รีวิว

ทำเสร็จแต่ละชุดแล้ว ให้ commit แล้ว push จากนั้นให้ Claude (หรือใครก็ได้) รีวิว โดยไม่ได้ดูแค่ว่า test ผ่านไหม แต่ดูด้วยว่า

- โค้ดอ่านง่ายไหม
- มีวิธีเขียนที่สั้นหรือชัดกว่านี้ไหม
- มี edge case ที่ test ยังไม่ได้ครอบคลุมไหม

ทุกครั้งที่ push ระบบ GitHub Actions จะรัน test ให้อัตโนมัติ ดูผลได้ที่แท็บ **Actions**

GitHub Actions ตรวจเฉพาะ**ชุดที่เริ่มทำแล้ว** คือชุดที่ไฟล์คำตอบถูกแก้ไปจากตอนเริ่มต้น ชุดที่ยังไม่ได้แตะจะถูกข้ามไป
- ✅ ทุกชุดที่เริ่มทำแล้วผ่านหมด
- ❌ มีอย่างน้อย 1 ชุดที่เริ่มทำแล้วแต่ยังไม่ผ่าน (รวมถึงชุดที่ทำไปแค่บางข้อด้วย)

ถ้าอยากตรวจแบบเดียวกันในเครื่อง ให้รัน `npm run test:started`
