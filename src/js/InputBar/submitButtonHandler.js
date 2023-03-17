import { DailyHistoryItem } from '../History.js/DailyHistoryItem.js';
import { CLASS_SELECTOR, EVENT, ID_SELECTOR } from '../constant.js';
import { $ } from '../utils.js';

export const submitButtonHandler = () => {
  const $inputBarForm = $(CLASS_SELECTOR.inputBarForm);

  $inputBarForm.addEventListener(EVENT.change, checkSubmitButtonActivation);
  $inputBarForm.addEventListener(EVENT.submit, (e) => inputSubmitHandler(e));
};

export const checkSubmitButtonActivation = () => {
  const $inputBarForm = $(CLASS_SELECTOR.inputBarForm);
  const $submitButton = $(ID_SELECTOR.submitButton);
  const { date, money, memo, payment, category, moneyType } =
    $inputBarForm.elements;

  isAllInputFilled({ date, money, memo, payment, category })
    ? ($submitButton.disabled = false)
    : ($submitButton.disabled = true);
};

const inputSubmitHandler = (e) => {
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
