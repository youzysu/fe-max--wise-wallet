import { EXPENSE_TEXT, INCOME_TEXT, REGEX } from '../constant.js';

export class DailyHistoryItem {
  #uuid;

  constructor([date, moneyType, money, memo, payment, category]) {
    this.#uuid = self.crypto.randomUUID();
    this.date = date;
    this.moneyType = moneyType;
    this.money = Number(money.replaceAll(',', ''));
    this.memo = memo;
    this.payment = payment;
    this.category = category;
  }

  isValidValues() {
    return (
      inputValueValidator.isValidCategory(this.category) &&
      inputValueValidator.isValidDate(this.date)
    );
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

  isValidDate(date) {
    return REGEX.dateFormat.test(date);
  },
};
