import { DailyHistory } from './DailyHistory.js';

export class MonthlyHistory {
  #monthYear;
  #totalCount;
  #totalIncome;
  #totalExpense;

  constructor(monthYear) {
    this.#monthYear = monthYear;
    this.dailyHistoryItems = new Map();
    this.#totalCount = 0;
    this.#totalIncome = 0;
    this.#totalExpense = 0;
  }

  getDailyHistory(date) {
    const dailyHistory = this.dailyHistoryItems.get(date);
    return dailyHistory ?? this.makeDailyHistory(date);
  }

  makeDailyHistory(date) {
    const fulldate = `${this.#monthYear}${date}`;
    const dailyHistory = new DailyHistory(fulldate);
    this.dailyHistoryItems.set(date, dailyHistory);

    return dailyHistory;
  }

  getState() {
    const dailyHistories = [...this.dailyHistoryItems.values()];
    this.#totalIncome = dailyHistories.reduce(
      (acc, cur) => acc + cur.incomeAmount,
      0
    );
    this.#totalExpense = dailyHistories.reduce(
      (acc, cur) => acc + cur.expenseAmount,
      0
    );
    this.#totalCount = dailyHistories.reduce(
      (acc, cur) => acc + cur.dailyItems.size,
      0
    );

    return {
      count: this.#totalCount,
      income: this.#totalIncome,
      expense: this.#totalExpense,
    };
  }
}
