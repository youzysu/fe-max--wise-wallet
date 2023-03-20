import { EXPENSE_TEXT, INCOME_TEXT } from '../constant.js';

export class DailyItem {
  #uuid;
  #fullDate;
  #money;
  #memo;
  #payment;
  #category;

  constructor({ fullDate, moneyValue, memoValue, payment, category }) {
    this.#uuid = self.crypto.randomUUID();
    this.#fullDate = fullDate;
    this.monthYear = fullDate.slice(0, 6);
    this.year = fullDate.slice(0, 4);
    this.month = fullDate.slice(4, 6);
    this.date = fullDate.slice(6);
    this.#money = Number(moneyValue.replaceAll(',', ''));
    this.#memo = memoValue;
    this.#payment = payment;
    this.#category = category;
    this.isIncomeMoney = INCOME_TEXT.includes(this.category);
    this.isValidValues = this.validateInputValues(this.category);
  }

  validateInputValues(category, date) {
    return inputValueValidator.isValidCategory(category);
  }

  get uuid() {
    return this.#uuid;
  }

  get fullDate() {
    return this.#fullDate;
  }

  get money() {
    return this.#money;
  }

  get payment() {
    return this.#payment;
  }

  get category() {
    return this.#category;
  }

  get memo() {
    return this.#memo;
  }
}

const inputValueValidator = {
  isValidCategory(categoryValue) {
    const categoryOptions = EXPENSE_TEXT.concat(INCOME_TEXT);
    return categoryOptions.includes(categoryValue);
  },
};
