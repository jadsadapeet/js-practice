# 04 — Object

เรื่องที่ฝึก: การอ่าน/เขียน property, `Object.keys/values/entries`, destructuring, spread, optional chaining `?.`

แก้ไฟล์ `exercise.js` แล้วรัน `npm run test:04`

**กติกา:** ห้ามแก้ object ที่รับเข้ามา ให้คืน object ใหม่

| function | ทำอะไร | ตัวอย่าง |
|---|---|---|
| `getFullName(user)` | ต่อชื่อกับนามสกุล ใช้ destructuring | `{ first: "Ann", last: "Lee" }` → `"Ann Lee"` |
| `countWords(text)` | นับว่าแต่ละคำมีกี่ครั้ง ไม่สนตัวใหญ่ตัวเล็ก | `"a b A"` → `{ a: 2, b: 1 }` |
| `pick(obj, keys)` | เอาเฉพาะ key ที่ระบุ ถ้า key ไม่มีใน obj ให้ข้ามไป | `pick({a:1,b:2,c:3}, ["a","c"])` → `{a:1,c:3}` |
| `omit(obj, keys)` | ตัด key ที่ระบุออก | `omit({a:1,b:2}, ["a"])` → `{b:2}` |
| `invert(obj)` | สลับ key กับ value | `{a:"x"}` → `{x:"a"}` |
| `groupBy(arr, key)` | จัดกลุ่ม object ตามค่าของ key | ดู test |
| `getCity(user)` | คืนชื่อเมืองจาก `user.address.city` ถ้าไม่มีให้คืน `"unknown"` ใช้ `?.` กับ `??` | ดู test |
| `mergeSettings(defaults, custom)` | รวม object โดยค่าใน custom ทับค่าใน defaults | ดู test |
