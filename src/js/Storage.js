import {
  DailyHistory,
  DailyItem,
  MonthlyHistory,
} from './MainPage/History/History.js';

class Storage {
  constructor() {
    this.monthlyHistories = {};
    this.init();
  }

  init() {
    const monthlyHistories = JSON.parse(localStorage.getItem('wiseWallet'));

    if (monthlyHistories) {
      const monthYearItems = Object.entries(monthlyHistories);
      for (const [key, value] of monthYearItems) {
        this.monthlyHistories[key] = value;
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

    this.addDailyItem(monthlyHistory, dailyHistory, dailyItem);
    localStorage.setItem('wiseWallet', JSON.stringify(this.monthlyHistories));

    return monthlyHistory;
  }

  modifyDailyItem(updatedItem, stoargedItem) {
    this.deleteDailyItem(stoargedItem);

    const itemDate = updatedItem.date;
    const monthlyHistory = this.getMonthlyHistory(itemDate);
    const dailyHistory = this.getDailyHistory(monthlyHistory, itemDate);

    this.addDailyItem(monthlyHistory, dailyHistory, updatedItem);
    localStorage.setItem('wiseWallet', JSON.stringify(this.monthlyHistories));

    return monthlyHistory;
  }

  getDailyItem(itemDate, itemId) {
    const monthlyHistory = this.getMonthlyHistory(itemDate);
    const dailyHistory = this.getDailyHistory(monthlyHistory, itemDate);
    return dailyHistory.dailyItems[itemId];
  }

  getMonthlyHistory(date) {
    const monthYearKey = this.getMonthYearKey(date);
    const monthYearHistory = this.monthlyHistories[monthYearKey];
    return monthYearHistory ?? this.makeMonthlyHistory(monthYearKey);
  }

  makeMonthlyHistory(monthYearKey) {
    const monthYearHistory = new MonthlyHistory(monthYearKey);
    this.monthlyHistories[monthYearKey] = monthYearHistory;

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

  addDailyItem(monthlyHistory, dailyHistory, newDailyItem) {
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

  deleteDailyItem({ date, uuid, isIncomeMoney, money }) {
    const itemDate = new Date(date);
    const monthlyHistory = this.getMonthlyHistory(itemDate);
    const dailyHistory = this.getDailyHistory(monthlyHistory, itemDate);

    delete monthlyHistory.dailyHistories[itemDate].dailyItems[uuid];
    monthlyHistory.totalCount -= 1;

    if (isIncomeMoney) {
      delete dailyHistory.incomeDailyItems[uuid];
      dailyHistory.incomeAmount -= money;
      monthlyHistory.totalIncome -= money;
      localStorage.setItem('wiseWallet', JSON.stringify(this.monthlyHistories));

      return monthlyHistory;
    }

    delete dailyHistory.expenseDailyItems[uuid];
    dailyHistory.expenseAmount -= money;
    monthlyHistory.totalExpense -= money;
    localStorage.setItem('wiseWallet', JSON.stringify(this.monthlyHistories));

    return monthlyHistory;
  }

  getMonthYearKey(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const monthYear = `${year}${month}`;

    return monthYear;
  }
}

export const storage = new Storage();
