# รีวิว 02 — ค้นหาผู้ใช้

โค้ดหน้าค้นหาผู้ใช้ในระบบหลังบ้าน

**สเปกที่ต้องการ:**
- `searchUsers(users, keyword)` คืนผู้ใช้ที่ `name` มี keyword อยู่ ไม่สนตัวใหญ่ตัวเล็ก ถ้า keyword ว่างให้คืนทุกคน
- `sortByName(users)` เรียงตามชื่อ A–Z คืน array ใหม่ ห้ามแก้ array เดิม
- `paginate(users, page, perPage)` แบ่งหน้า โดย `page` เริ่มที่ 1
- `findById(users, id)` หาผู้ใช้ตาม id ถ้าไม่เจอคืน `null` ต้องเทียบแบบเข้มงวด (`'1'` ไม่เท่ากับ `1`)
- `getActiveEmails(users)` คืน email ของคนที่ `active` เป็น `true` และมี email เท่านั้น
