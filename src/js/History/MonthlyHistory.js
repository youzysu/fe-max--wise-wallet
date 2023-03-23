export class MonthlyHistory {
  constructor(monthYear) {
    this.monthYear = monthYear;
    this.dailyHistories = {};
    this.totalCount = 0;
    this.totalIncome = 0;
    this.totalExpense = 0;
  }
}
