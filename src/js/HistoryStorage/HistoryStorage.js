import { DailyItem } from './DailyItem.js';
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

  saveDailyItem(dailyItemData) {
    const dailyItem = new DailyItem(dailyItemData);
    const monthlyHistory = this.getMonthlyHistory(dailyItem.date);
    const date = dailyItem.date.getDate();
    const dailyHistory = monthlyHistory.getDailyHistory(date);
    dailyHistory.addItem(dailyItem);

    return monthlyHistory;
  }

  getMonthlyHistory(dateObject) {
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const monthYear = `${year}${month}`;

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
