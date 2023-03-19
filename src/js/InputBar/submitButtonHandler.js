import { DailyItem } from '../History/DailyItem.js';
import { storage } from '../History/Storage.js';
import { DailyItemView } from '../View/DailyItemView.js';
import { CLASS_SELECTOR, EVENT } from '../constant.js';
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
  const { monthYear, date, dailyItem } = makeDailyItem(dailyItemData);
  const monthYearHistory = storage.getHistory(monthYear);
  const dailyHistory = monthYearHistory.getDailyHistory(date);

  dailyHistory.items[dailyItem.uuid] = dailyItem;

  const $dailyItemList = DailyItemView(dailyItem);
  const $test = $('.daily-history');
  $test.appendChild($dailyItemList);
};

const makeDailyItem = (dailyItemData) => {
  const dailyItem = new DailyItem(dailyItemData);
  if (!dailyItem.isValidValues) return;

  const fullDate = dailyItemData.fullDate;
  const monthYear = fullDate.slice(0, 6);
  const date = fullDate.slice(6);

  return { monthYear, date, dailyItem };
};
