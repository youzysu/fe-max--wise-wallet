export class DailyHistory {
  constructor(fullDate) {
    this.fullDate = fullDate;
    this.dailyItems = {};
    this.incomeDailyItems = {};
    this.expenseDailyItems = {};
    this.incomeAmount = 0;
    this.expenseAmount = 0;
  }
}
