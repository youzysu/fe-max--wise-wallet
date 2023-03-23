import { changeHeaderMonthYear } from '../../Header/HeaderEventHandler.js';
import { historyStorage } from '../../HistoryStorage/HistoryStorage.js';
import { monthlyHistoryView } from '../../MainPage/monthlyHistoryView.js';
import { getDateFormat } from '../../utils.js';

export const formSubmitHandler = (e) => {
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
  try {
    const monthlyHistory = historyStorage.saveDailyItem(dailyItemData);
    monthlyHistoryView(monthlyHistory);

    const { year, monthNumber, monthChar } = getDateFormat(dailyItemData.date);
    changeHeaderMonthYear({ year, monthNumber, monthChar });
  } catch (e) {
    // 에러 메시지 유저에게 보여주는 UI 추가하기
    // console.error(e.message);
  }
};
