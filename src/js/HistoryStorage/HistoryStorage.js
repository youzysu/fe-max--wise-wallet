import { getMonthYearKey } from '../utils.js';
import { DailyItem } from './DailyItem.js';
import { MonthlyHistory } from './MonthlyHistory.js';

class HistoryStorage {
  constructor() {
    this.monthlyHistoryItems = {};
    // this.init();
  }

  init() {
    const monthYearKeys = Object.keys(localStorage);
    monthYearKeys.forEach((key, index) => {
      this.monthlyHistoryItems[key] = JSON.parse(localStorage.getItem(key));
    });
  }

  // getLocalStorage(monthYear) {
  //   return JSON.parse(localStorage.getItem(monthYear));
  // }

  // setLocalStorage(monthYear, history) {
  //   localStorage.setItem(monthYear, JSON.stringify(history));
  // }

  saveDailyItem(dailyItemData) {
    const dailyItem = new DailyItem(dailyItemData);

    if (!dailyItem.isValidValues()) {
      throw new Error('올바른 입력값이 아닙니다.');
      return;
    }

    const itemDate = dailyItem.date;
    const monthlyHistory = this.getMonthlyHistory(itemDate);
    const dateKey = itemDate.getDate();
    const dailyHistory = monthlyHistory.getDailyHistory(dateKey);
    dailyHistory.addItem(dailyItem);

    const monthYearKey = getMonthYearKey(itemDate);
    localStorage.setItem(monthYearKey, JSON.stringify(monthlyHistory));

    console.log(monthlyHistory);
    console.log(JSON.stringify(monthlyHistory));

    return monthlyHistory;
  }

  getMonthlyHistory(dateObject) {
    const monthYear = getMonthYearKey(dateObject);

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
