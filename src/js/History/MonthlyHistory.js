import { DailyHistory } from './DailyHistory.js';

export class MonthlyHistory {
  #monthYear;

  constructor(monthYear) {
    this.#monthYear = monthYear;
    this.items = new Map();
    this.totalCount;
    this.totalIncome;
    this.totalExpense;
  }

  getDailyHistory(date) {
    const dailyHistory = this.items.get(date);
    return dailyHistory ?? this.makeDailyHistory(date);
  }

  makeDailyHistory(date) {
    const fulldate = `${this.#monthYear}${date}`;
    const dailyHistory = new DailyHistory(fulldate);
    this.items.set(date, dailyHistory);

    return dailyHistory;
  }

  calculateTotalCount() {}
  calculateTotalIncome() {}
  calculateTotalExpense() {}
}
