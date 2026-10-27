export function addItem(cart, item) {
  var found = cart.find((x) => x.id == item.id);
  if (found) {
    found.qty = item.qty;
    return cart;
  }
  cart.push(item);
  return cart;
}

export function removeItem(cart, id) {
  const index = cart.findIndex((x) => x.id === id);
  cart.splice(index, 1);
  return cart;
}

export function getTotal(cart) {
  let t = 0;
  for (let i = 0; i <= cart.length - 1; i++) {
    t += cart[i].price;
  }
  return t;
}

export function applyDiscount(total, percent) {
  return total - total * percent;
}
