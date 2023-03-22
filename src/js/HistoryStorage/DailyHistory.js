export class DailyHistory {
  #fullDate;
  #incomeAmount;
  #expenseAmount;

  constructor(fullDate) {
    this.#fullDate = fullDate;
    this.dailyItems = new Map();
    this.incomeDailyItems = {};
    this.expenseDailyItems = {};
    this.#incomeAmount = 0;
    this.#expenseAmount = 0;
  }

  addItem(newDailyItem) {
    this.dailyItems.set(newDailyItem.uuid, newDailyItem);

    if (newDailyItem.isIncomeMoney) {
      this.#incomeAmount += newDailyItem.money;
      return;
    }

    this.#expenseAmount += newDailyItem.money;
    return;
  }

  get incomeAmount() {
    return this.#incomeAmount;
  }

  get expenseAmount() {
    return this.#expenseAmount;
  }

  get fullDate() {
    return this.#fullDate;
  }
}
