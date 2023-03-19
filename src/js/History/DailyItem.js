import { EXPENSE_TEXT, INCOME_TEXT } from '../constant.js';

export class DailyItem {
  #uuid;

  constructor({
    fulldate,
    moneyType,
    moneyValue,
    memoValue,
    payment,
    category,
  }) {
    this.#uuid = self.crypto.randomUUID();
    this.fulldate = fulldate;
    this.moneyType = moneyType;
    this.money = Number(moneyValue.replaceAll(',', ''));
    this.memo = memoValue;
    this.payment = payment;
    this.category = category;
    this.isValidValues = this.validateInputValues(this.category);
  }

  validateInputValues(category, date) {
    return inputValueValidator.isValidCategory(category);
  }

  getTemplate() {}

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
