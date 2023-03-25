import { changeHeaderMonthYear } from '../../../Components/header.js';
import { storage } from '../../../Storage.js';
import { getDateFormat } from '../../../utils.js';
import { monthlyHistoryView } from '../../History/monthlyHistoryView.js';

export const formSubmitHandler = (event) => {
  event.preventDefault();
  const { fullDate, money, memo, payment, category } = event.target.elements;
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
    const monthlyHistory = storage.saveDailyItem(dailyItemData);
    monthlyHistoryView(monthlyHistory);

    const { year, monthNumber, monthChar } = getDateFormat(dailyItemData.date);
    changeHeaderMonthYear({ year, monthNumber, monthChar });
  } catch (err) {
    // 에러 메시지 유저에게 보여주는 UI 추가하기
    console.error(err.message);
  }
};
