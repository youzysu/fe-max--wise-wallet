import { CATEGORY_OPTIONS, INCOME_TEXT } from '../constant.js';

export class DailyItem {
  #uuid;
  #date;
  #money;
  #memo;
  #payment;
  #category;

  constructor({ date, moneyValue, memoValue, payment, category }) {
    this.#uuid = self.crypto.randomUUID();
    this.#date = date;
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

  get date() {
    return this.#date;
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
    return CATEGORY_OPTIONS.includes(categoryValue);
  },
};
