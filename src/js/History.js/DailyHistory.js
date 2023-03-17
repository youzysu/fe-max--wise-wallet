class DailyHistory {
  #fullDate;

  constructor(fullDate, items) {
    this.#fullDate = fullDate;
    this.year;
    this.month;
    this.date;
    this.day;
    this.items = items;
    this.incomeAmount = 0;
    this.expenseAmount = 0;
  }
}
