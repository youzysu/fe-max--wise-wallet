import { historyStorage } from '../../History/HistoryStorage.js';
import { MonthlyHistoryView } from '../../View/MonthlyHistoryView.js';

export const inputSubmitHandler = (e) => {
  e.preventDefault();
  const { fullDate, money, memo, payment, category } = e.target.elements;
  const [year, month, date] = [
    fullDate.value.slice(0, 4),
    fullDate.value.slice(4, 6),
    fullDate.value.slice(6),
  ];
  const dailyItemData = {
    date: new Date(`${year}-${month}-${date}`),
    moneyValue: money.value,
    memoValue: memo.value,
    payment: payment.value,
    category: category.value,
  };
  saveDailyItem(dailyItemData);
};

const saveDailyItem = (dailyItemData) => {
  historyStorage.saveDailyItem(dailyItemData);
  // render(curMonthlyHistory, dailyItem);
};

const render = (curMonthlyHistory, dailyItem) => {
  MonthlyHistoryView(curMonthlyHistory);

  const currentDate = new Date(
    `${dailyItem.year}-${dailyItem.month}-${dailyItem.date}`
  );

  const { year, monthNumber, monthChar } = getDateFormat(currentDate);
  changeHeaderMonthYear({ year, monthNumber, monthChar });
};
