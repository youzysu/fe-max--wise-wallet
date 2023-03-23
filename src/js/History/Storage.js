import { DailyHistory } from './DailyHistory.js';
import { DailyItem } from './DailyItem.js';
import { MonthlyHistory } from './MonthlyHistory.js';

class Storage {
  constructor() {
    this.monthlyHistoryItems = {};
    this.init();
  }

  init() {
    const monthlyHistoryItems = JSON.parse(localStorage.getItem('wiseWallet'));

    if (monthlyHistoryItems) {
      const monthYearItems = Object.entries(monthlyHistoryItems);
      for (const [key, value] of monthYearItems) {
        this.monthlyHistoryItems[key] = value;
      }
    }
  }

  saveDailyItem(dailyItemData) {
    const dailyItem = new DailyItem(dailyItemData);

    if (!dailyItem.isValidValues()) {
      throw new Error('올바른 입력값이 아닙니다.');
      return;
    }

    const itemDate = dailyItem.date;
    const monthlyHistory = this.getMonthlyHistory(itemDate);
    const dailyHistory = this.getDailyHistory(monthlyHistory, itemDate);

    this.updateStorage(monthlyHistory, dailyHistory, dailyItem);
    localStorage.setItem(
      'wiseWallet',
      JSON.stringify(this.monthlyHistoryItems)
    );

    return monthlyHistory;
  }

  getMonthlyHistory(date) {
    const monthYearKey = this.getMonthYearKey(date);
    const monthYearHistory = this.monthlyHistoryItems[monthYearKey];
    return monthYearHistory ?? this.makeMonthlyHistory(monthYearKey);
  }

  makeMonthlyHistory(monthYear) {
    const monthYearHistory = new MonthlyHistory(monthYear);
    this.monthlyHistoryItems[monthYear] = monthYearHistory;

    return monthYearHistory;
  }

  getDailyHistory(monthlyHistory, date) {
    const dailyHistory = monthlyHistory.dailyHistories[date];
    return dailyHistory ?? this.makeDailyHistory(monthlyHistory, date);
  }

  makeDailyHistory(monthlyHistory, date) {
    const dailyHistory = new DailyHistory(date);
    monthlyHistory.dailyHistories[date] = dailyHistory;

    return dailyHistory;
  }

  updateStorage(monthlyHistory, dailyHistory, newDailyItem) {
    dailyHistory.dailyItems[newDailyItem.uuid] = newDailyItem;
    monthlyHistory.totalCount += 1;

    if (newDailyItem.isIncomeMoney) {
      dailyHistory.incomeDailyItems[newDailyItem.uuid] = newDailyItem;
      dailyHistory.incomeAmount += newDailyItem.money;
      monthlyHistory.totalIncome += newDailyItem.money;
      return;
    }

    dailyHistory.expenseDailyItems[newDailyItem.uuid] = newDailyItem;
    dailyHistory.expenseAmount += newDailyItem.money;
    monthlyHistory.totalExpense += newDailyItem.money;
    return;
  }

  getMonthYearKey(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const monthYear = `${year}${month}`;

    return monthYear;
  }
}

export const storage = new Storage();
