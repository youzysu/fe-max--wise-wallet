import { CATEGORY_OPTIONS, INCOME_TEXT, REGEX } from '../../constant.js';

export class DailyItem {
  constructor({ date, money, memo, payment, category }) {
    this.uuid = self.crypto.randomUUID();
    this.date = date;
    this.money = Number(money.replaceAll(',', ''));
    this.memo = memo;
    this.payment = payment;
    this.category = category;
    this.isIncomeMoney = INCOME_TEXT.includes(this.category);
  }

  isValidValues() {
    return inputValueValidator.isValidCategory(this.category);
  }
}

export class DailyHistory {
  constructor(date) {
    this.date = date;
    this.dailyItems = {};
    this.incomeDailyItems = {};
    this.expenseDailyItems = {};
    this.incomeAmount = 0;
    this.expenseAmount = 0;
  }
}

export class MonthlyHistory {
  constructor(monthYear) {
    this.monthYear = monthYear;
    this.dailyHistories = {};
    this.totalCount = 0;
    this.totalIncome = 0;
    this.totalExpense = 0;
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
