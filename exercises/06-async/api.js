// API จำลอง ห้ามแก้ไฟล์นี้

const users = {
  1: { id: 1, name: 'Ann' },
  2: { id: 2, name: 'Bob' },
  3: { id: 3, name: 'Cat' },
};

export function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[id]) resolve(users[id]);
      else reject(new Error(`user ${id} not found`));
    }, 50);
  });
}
