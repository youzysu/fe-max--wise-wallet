import { DailyHistoryItem } from '../History.js/DailyHistoryItem.js';
import { CLASS_SELECTOR, EVENT, ID_SELECTOR } from '../constant.js';
import { $ } from '../utils.js';

export const submitButtonHandler = () => {
  const $inputBarForm = $(CLASS_SELECTOR.inputBarForm);
  const $submitButton = $(ID_SELECTOR.submitButton);
  const { date, money, memo, payment, category, moneyType } =
    $inputBarForm.elements;

  $inputBarForm.addEventListener(EVENT.change, () => {
    isAllInputFilled({ date, money, memo, payment, category })
      ? ($submitButton.disabled = false)
      : ($submitButton.disabled = true);
  });

  $inputBarForm.addEventListener(EVENT.submit, (e) => inputSubmitHandler(e));
};

const inputSubmitHandler = (e) => {
  e.preventDefault();
  const { date, moneyType, money, memo, payment, category } = e.target.elements;
  const dailyHistoryItemData = [
    date.value,
    moneyType.checked,
    money.value,
    memo.value,
    payment.value,
    category.value,
  ];
  const dailyHistoryItem = new DailyHistoryItem(dailyHistoryItemData);

  if (dailyHistoryItem.isValidValues()) {
    localStorage.setItem(
      dailyHistoryItem.uuid,
      JSON.stringify(dailyHistoryItem)
    );
  }
};

const isAllInputFilled = ({ date, money, memo, payment, category }) => {
  const userInputValues = [
    date.value,
    money.value,
    memo.value,
    payment.value,
    category.value,
  ];
  return userInputValues.every((val) => !!val === true);
};
