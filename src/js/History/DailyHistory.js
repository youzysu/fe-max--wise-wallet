import { WEEKDAY } from '../constant.js';

export class DailyHistory {
  #fullDate;
  #incomeAmount;
  #expenseAmount;

  constructor(fullDate) {
    this.#fullDate = fullDate;
    this.monthYear = fullDate.slice(0, 6);
    this.year = fullDate.slice(0, 4);
    this.month = fullDate.slice(4, 6);
    this.date = fullDate.slice(6);
    this.day =
      WEEKDAY[new Date(`${this.year}-${this.month}-${this.date}`).getDay()];
    this.dailyItems = {};
    this.incomeDailyItems = {};
    this.expenseDailyItems = {};
    this.#incomeAmount = 0;
    this.#expenseAmount = 0;
  }

  addItem(newDailyItem) {
    if (newDailyItem.isIncomeMoney) {
      this.dailyItems[newDailyItem.uuid] = newDailyItem;
      this.#incomeAmount += newDailyItem.money;
      return;
    }

    this.dailyItems[newDailyItem.uuid] = newDailyItem;
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
