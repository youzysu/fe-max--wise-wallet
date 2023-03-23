export class DailyHistory {
  constructor(fullDate) {
    this.fullDate = fullDate;
    this.dailyItems = {};
    this.incomeDailyItems = {};
    this.expenseDailyItems = {};
    this.incomeAmount = 0;
    this.expenseAmount = 0;
  }

  addItem(newDailyItem) {
    this.dailyItems[newDailyItem.uuid] = newDailyItem;

    if (newDailyItem.isIncomeMoney) {
      this.incomeDailyItems[newDailyItem.uuid] = newDailyItem;
      this.incomeAmount += newDailyItem.money;
      return;
    }

    this.expenseDailyItems[newDailyItem.uuid] = newDailyItem;
    this.expenseAmount += newDailyItem.money;
    return;
  }
}
