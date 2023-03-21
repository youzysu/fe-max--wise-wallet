import { DailyHistory } from './DailyHistory.js';

export class MonthlyHistory {
  #monthYear;
  #totalCount;
  #totalIncome;
  #totalExpense;

  constructor(monthYear) {
    this.#monthYear = monthYear;
    this.dailyHistoryItems = new Map();
    this.#totalCount = this.calculateTotalCount();
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

  calculateTotalCount() {
    return this.dailyHistoryItems.size;
  }

  calculateTotalIncome() {}

  calculateTotalExpense() {}

  get totalCount() {
    return this.#totalCount;
  }

  get totalIncome() {
    return this.#totalIncome;
  }

  get totalExpense() {
    return this.#totalExpense;
  }
}
