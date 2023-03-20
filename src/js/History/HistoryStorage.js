import { MonthlyHistory } from './MonthlyHistory.js';

export class HistoryStorage {
  constructor() {
    this.monthlyHistoryItems = {};
  }

  static getLocalStorage(monthYear) {
    return JSON.parse(localStorage.getItem(monthYear));
  }

  static setLocalStorage(monthYear, history) {
    localStorage.setItem(monthYear, JSON.stringify(history));
  }

  getMonthlyHistory(monthYear) {
    const monthYearHistory = this.monthlyHistoryItems[monthYear];
    return monthYearHistory ?? this.makeMonthlyHistory(monthYear);
  }

  makeMonthlyHistory(monthYear) {
    const monthYearHistory = new MonthlyHistory(monthYear);
    this.monthlyHistoryItems[monthYear] = monthYearHistory;

    return monthYearHistory;
  }
}

export const historyStorage = new HistoryStorage();
