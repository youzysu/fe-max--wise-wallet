import { DailyItem } from '../History/DailyItem.js';
import { historyStorage } from '../History/HistoryStorage.js';
import { MonthlyHistoryView } from '../View/MonthlyHistoryView.js';
import { CLASS_SELECTOR, EVENT } from '../constant.js';
import { changeHeaderMonthYear } from '../init.js';
import { $ } from '../utils.js';
import { checkSubmitButtonActivation } from './checkSubmitButtonActivation.js';

export const submitButtonHandler = () => {
  const $inputBarForm = $(CLASS_SELECTOR.inputBarForm);

  $inputBarForm.addEventListener(EVENT.change, checkSubmitButtonActivation);
  $inputBarForm.addEventListener(EVENT.submit, inputSubmitHandler);
};

const inputSubmitHandler = (e) => {
  e.preventDefault();
  const { fullDate, money, memo, payment, category } = e.target.elements;
  const dailyItemData = {
    fullDate: fullDate.value,
    moneyValue: money.value,
    memoValue: memo.value,
    payment: payment.value,
    category: category.value,
  };
  saveDailyItem(dailyItemData);
};

const saveDailyItem = (dailyItemData) => {
  const dailyItem = new DailyItem(dailyItemData);
  if (!dailyItem.isValidValues) return;

  const curMonthlyHistory = historyStorage.getMonthlyHistory(
    dailyItem.monthYear
  );
  const dailyHistory = curMonthlyHistory.getDailyHistory(dailyItem.date);

  dailyHistory.addItem(dailyItem);
  render(curMonthlyHistory, dailyItem);
};

const render = (curMonthlyHistory, dailyItem) => {
  MonthlyHistoryView(curMonthlyHistory);

  const currentDate = new Date(
    `${dailyItem.year}-${dailyItem.month}-${dailyItem.date}`
  );
  const year = currentDate.getFullYear();
  const monthNumber = currentDate.toLocaleString('en-US', { month: 'numeric' });
  const monthChar = currentDate.toLocaleString('en-US', { month: 'long' });

  changeHeaderMonthYear({ year, monthNumber, monthChar });
};
