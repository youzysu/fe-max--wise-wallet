import { MonthlyHistory } from './MonthlyHistory.js';

class Storage {
  constructor() {
    this.items = {};
  }

  static updateItems() {}

  static getItem(monthYear) {
    return JSON.parse(localStorage.getItem(monthYear));
  }

  static setItem(monthYear, history) {
    localStorage.setItem(monthYear, JSON.stringify(history));
  }

  getHistory(monthYear) {
    const monthYearHistory = this.items[monthYear];
    return monthYearHistory ?? this.makeHistory(monthYear);
  }

  makeHistory(monthYear) {
    const monthYearHistory = new MonthlyHistory(monthYear);
    this.items[monthYear] = monthYearHistory;

    return monthYearHistory;
  }
}

export const storage = new Storage();
