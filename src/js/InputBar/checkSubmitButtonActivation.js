import { CLASS_SELECTOR, ID_SELECTOR } from '../constant.js';
import { $ } from '../utils.js';

export const checkSubmitButtonActivation = () => {
  const $inputBarForm = $(CLASS_SELECTOR.inputBarForm);
  const $submitButton = $(ID_SELECTOR.submitButton);
  const { fullDate, money, memo, payment, category, moneyType } =
    $inputBarForm.elements;

  isAllInputFilled({ fullDate, money, memo, payment, category })
    ? ($submitButton.disabled = false)
    : ($submitButton.disabled = true);
};

const isAllInputFilled = ({ fullDate, money, memo, payment, category }) => {
  const userInputValues = [
    fullDate.value,
    money.value,
    memo.value,
    payment.value,
    category.value,
  ];
  return userInputValues.every((val) => !!val === true);
};