# 03 — Array

เรื่องที่ฝึก: `map`, `filter`, `reduce`, `find`, `some`, `every`, spread `...`

แก้ไฟล์ `exercise.js` แล้วรัน `npm run test:03`

**กติกา:** ห้ามแก้ array ที่รับเข้ามา (ห้าม mutate) ให้สร้าง array ใหม่เสมอ

| function | ทำอะไร | ตัวอย่าง |
|---|---|---|
| `doubleAll(nums)` | คูณ 2 ทุกตัว ใช้ `map` | `[1, 2]` → `[2, 4]` |
| `onlyPositive(nums)` | เอาเฉพาะตัวที่มากกว่า 0 ใช้ `filter` | `[-1, 0, 3]` → `[3]` |
| `sum(nums)` | ผลรวม ใช้ `reduce` array ว่างได้ `0` | `[1, 2, 3]` → `6` |
| `average(nums)` | ค่าเฉลี่ย array ว่างคืน `null` | `[2, 4]` → `3` |
| `unique(arr)` | ตัดตัวซ้ำออก คงลำดับเดิม | `[1, 2, 1, 3]` → `[1, 2, 3]` |
| `chunk(arr, size)` | แบ่ง array เป็นกลุ่มละ size | `chunk([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]` |
| `flatten(arr)` | แตก array ซ้อนออกมาชั้นเดียว (ซ้อนลึกแค่ 1 ชั้น) **ห้ามใช้** `.flat()` | `[[1,2],[3],[]]` → `[1,2,3]` |
| `sortByAge(people)` | เรียง object ตาม `age` จากน้อยไปมาก ห้ามแก้ array เดิม | ดู test |
| `countBy(arr, fn)` | นับจำนวนตามผลลัพธ์ของ fn | `countBy([1,2,3,4], n => n % 2 === 0 ? 'even' : 'odd')` → `{ odd: 2, even: 2 }` |

**คำใบ้:** `new Set(arr)`, `[...arr]`, `arr.toSorted()`
