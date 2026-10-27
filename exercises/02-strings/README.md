# 02 — String

เรื่องที่ฝึก: method ของ string, การวนอ่านทีละตัวอักษร, template literal

แก้ไฟล์ `exercise.js` แล้วรัน `npm run test:02`

| function | ทำอะไร | ตัวอย่าง |
|---|---|---|
| `reverse(str)` | กลับลำดับตัวอักษร | `reverse("abc")` → `"cba"` |
| `capitalize(str)` | ตัวแรกเป็นตัวใหญ่ ที่เหลือเป็นตัวเล็ก | `capitalize("hELLO")` → `"Hello"` |
| `countVowels(str)` | นับสระ a e i o u ทั้งตัวเล็กและตัวใหญ่ | `countVowels("Banana")` → `3` |
| `isPalindrome(str)` | อ่านจากหน้าหรือหลังได้เหมือนกันไหม ไม่สนตัวใหญ่ตัวเล็ก ช่องว่าง และเครื่องหมายวรรคตอน | `isPalindrome("A man, a plan, a canal: Panama")` → `true` |
| `titleCase(str)` | ทุกคำขึ้นต้นด้วยตัวใหญ่ | `titleCase("hello big world")` → `"Hello Big World"` |
| `greet(name, age)` | ใช้ template literal | `greet("Ann", 20)` → `"Hi Ann, you are 20 years old"` |
| `truncate(str, max)` | ถ้ายาวเกิน max ให้ตัดแล้วต่อด้วย `"..."` โดยความยาวรวม `"..."` ต้องไม่เกิน max | `truncate("Hello world", 8)` → `"Hello..."` |

**คำใบ้:** `split`, `join`, `toUpperCase`, `toLowerCase`, `slice`, `replace` กับ regex `/[^a-z0-9]/g`
