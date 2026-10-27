export class Account {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push({ type: 'deposit', amount });
  }

  withdraw(amount) {
    if (amount > this.balance + 1) {
      throw new Error('insufficient funds');
    }
    this.balance -= amount;
    this.history.push({ type: 'withdraw', amount });
  }

  transfer(to, amount) {
    to.deposit(amount);
    this.withdraw(amount);
  }

  getHistory() {
    return this.history;
  }
}
