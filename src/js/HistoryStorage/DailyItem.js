import { CATEGORY_OPTIONS, INCOME_TEXT, REGEX } from '../constant.js';

export class DailyItem {
  constructor({ date, moneyValue, memoValue, payment, category }) {
    this.uuid = self.crypto.randomUUID();
    this.date = date;
    this.money = Number(moneyValue.replaceAll(',', ''));
    this.memo = memoValue;
    this.payment = payment;
    this.category = category;
    this.isIncomeMoney = INCOME_TEXT.includes(this.category);
  }

  isValidValues() {
    return inputValueValidator.isValidCategory(this.category);
  }
}

const inputValueValidator = {
  isValidCategory(categoryValue) {
    return CATEGORY_OPTIONS.includes(categoryValue);
  },

  isValidDate(date) {
    return REGEX.dateFormat.test(date);
  },
};
