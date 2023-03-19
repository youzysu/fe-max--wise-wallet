import { EXPENSE_TEXT, INCOME_TEXT } from '../constant.js';

export class DailyItem {
  #uuid;

  constructor({ fulldate, moneyValue, memoValue, payment, category }) {
    this.#uuid = self.crypto.randomUUID();
    this.fulldate = fulldate;
    this.money = Number(moneyValue.replaceAll(',', ''));
    this.memo = memoValue;
    this.payment = payment;
    this.category = category;
    this.isIncomeMoney = INCOME_TEXT.includes(this.category);
    this.isValidValues = this.validateInputValues(this.category);
  }

  validateInputValues(category, date) {
    return inputValueValidator.isValidCategory(category);
  }

  get uuid() {
    return this.#uuid;
  }
}

const inputValueValidator = {
  isValidCategory(categoryValue) {
    const categoryOptions = EXPENSE_TEXT.concat(INCOME_TEXT);
    return categoryOptions.includes(categoryValue);
  },
};
