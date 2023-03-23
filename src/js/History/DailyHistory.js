export class DailyHistory {
  constructor(date) {
    this.date = date;
    this.dailyItems = {};
    this.incomeDailyItems = {};
    this.expenseDailyItems = {};
    this.incomeAmount = 0;
    this.expenseAmount = 0;
  }
}
