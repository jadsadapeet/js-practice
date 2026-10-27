export function searchUsers(users, keyword) {
  return users.filter((u) => u.name.includes(keyword));
}

export function sortByName(users) {
  return users.sort((a, b) => a.name > b.name);
}

export function paginate(users, page, perPage) {
  const start = page * perPage;
  return users.slice(start, start + perPage);
}

export function findById(users, id) {
  for (const u of users) {
    if (u.id == id) return u;
  }
}

export function getActiveEmails(users) {
  const result = [];
  users.forEach((u) => {
    if (u.active) result.push(u.email);
  });
  return result;
}
