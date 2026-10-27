# 05 — Function ขั้นสูง

เรื่องที่ฝึก: function ที่รับหรือคืน function (higher-order function), closure, rest parameter `...args`

แก้ไฟล์ `exercise.js` แล้วรัน `npm run test:05`

| function | ทำอะไร | ตัวอย่าง |
|---|---|---|
| `makeCounter()` | คืน object ที่มี `increment()`, `decrement()`, `value()` โดยค่าเริ่มที่ 0 และแต่ละ counter แยกกัน | ดู test |
| `multiplier(n)` | คืน function ที่คูณด้วย n | `multiplier(3)(5)` → `15` |
| `once(fn)` | คืน function ที่เรียก fn ได้แค่ครั้งแรก ครั้งต่อไปคืนผลลัพธ์เดิม | ดู test |
| `memoize(fn)` | คืน function ที่จำผลลัพธ์ไว้ ถ้าเรียกด้วย argument เดิม (ตัวเดียว) ไม่ต้องเรียก fn ซ้ำ | ดู test |
| `compose(...fns)` | รวม function จากขวาไปซ้าย `compose(f, g)(x)` = `f(g(x))` | ดู test |
| `sumAll(...nums)` | รวมเลขกี่ตัวก็ได้ | `sumAll(1, 2, 3)` → `6` |

**คำใบ้:** closure คือ function ข้างในยังเข้าถึงตัวแปรของ function ข้างนอกได้ แม้ function ข้างนอกจะทำงานจบไปแล้ว
