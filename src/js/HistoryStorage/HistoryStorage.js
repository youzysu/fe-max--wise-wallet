import { getMonthYearKey } from '../utils.js';
import { DailyHistory } from './DailyHistory.js';
import { DailyItem } from './DailyItem.js';
import { MonthlyHistory } from './MonthlyHistory.js';

class HistoryStorage {
  constructor() {
    this.monthlyHistoryItems = {};
    this.init();
  }

  init() {
    const monthYearKeys = Object.keys(localStorage);
    monthYearKeys.forEach((key, index) => {
      this.monthlyHistoryItems[key] = JSON.parse(localStorage.getItem(key));
    });
  }

  saveDailyItem(dailyItemData) {
    const dailyItem = new DailyItem(dailyItemData);

    if (!dailyItem.isValidValues()) {
      throw new Error('올바른 입력값이 아닙니다.');
      return;
    }

    const itemDate = dailyItem.date;
    const monthYearKey = getMonthYearKey(itemDate);
    const dateKey = itemDate.getDate();

    const monthlyHistory = this.getMonthlyHistory(itemDate);
    const dailyHistory = this.getDailyHistory(monthlyHistory, dateKey);

    this.addItem(dailyHistory, dailyItem);
    localStorage.setItem(monthYearKey, JSON.stringify(monthlyHistory));

    return monthlyHistory;
  }

  addItem(dailyHistory, newDailyItem) {
    dailyHistory.dailyItems[newDailyItem.uuid] = newDailyItem;

    if (newDailyItem.isIncomeMoney) {
      dailyHistory.incomeDailyItems[newDailyItem.uuid] = newDailyItem;
      dailyHistory.incomeAmount += newDailyItem.money;
      return;
    }

    dailyHistory.expenseDailyItems[newDailyItem.uuid] = newDailyItem;
    dailyHistory.expenseAmount += newDailyItem.money;
    return;
  }

  getDailyHistory(monthlyHistory, dateKey) {
    const dailyHistory = monthlyHistory.dailyHistoryItems[dateKey];
    return dailyHistory ?? this.makeDailyHistory(dateKey);
  }

  makeDailyHistory(monthlyHistory, dateKey) {
    const monthYear = monthlyHistory.monthYear;
    const fulldate = `${monthYear}${dateKey}`;
    const dailyHistory = new DailyHistory(fulldate);
    dailyHistoryItems[dateKey] = dailyHistory;

    return dailyHistory;
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
