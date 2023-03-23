import { DailyHistory } from './DailyHistory.js';

export class MonthlyHistory {
  constructor(monthYear) {
    this.monthYear = monthYear;
    this.dailyHistoryItems = {};
    this.totalCount = 0;
    this.totalIncome = 0;
    this.totalExpense = 0;
  }

  getDailyHistory(dateKey) {
    const dailyHistory = this.dailyHistoryItems[dateKey];
    return dailyHistory ?? this.makeDailyHistory(dateKey);
  }

  makeDailyHistory(dateKey) {
    const fulldate = `${this.monthYear}${dateKey}`;
    const dailyHistory = new DailyHistory(fulldate);
    this.dailyHistoryItems[dateKey] = dailyHistory;

    return dailyHistory;
  }

  getState() {
    const dailyHistories = Object.values(this.dailyHistoryItems);
    this.totalIncome = dailyHistories.reduce(
      (acc, cur) => acc + cur.incomeAmount,
      0
    );
    this.totalExpense = dailyHistories.reduce(
      (acc, cur) => acc + cur.expenseAmount,
      0
    );
    this.totalCount = dailyHistories.reduce(
      (acc, cur) => acc + Object.keys(cur.dailyItems).length,
      0
    );

    return {
      count: this.totalCount,
      income: this.totalIncome,
      expense: this.totalExpense,
    };
  }
}
