export class MonthlyHistory {
  constructor(monthYear) {
    this.monthYear = monthYear;
    this.dailyHistoryItems = {};
    this.totalCount = 0;
    this.totalIncome = 0;
    this.totalExpense = 0;
  }
}
