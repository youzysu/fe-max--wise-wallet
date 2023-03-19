export class DailyHistory {
  #fullDate;

  constructor(fullDate) {
    this.#fullDate = fullDate;
    this.year;
    this.month;
    this.date;
    this.day;
    this.incomeItems = {};
    this.expenseItems = {};
    this.incomeAmount = 0;
    this.expenseAmount = 0;
  }
}
