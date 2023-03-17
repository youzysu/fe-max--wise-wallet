import { CLASS_SELECTOR, EVENT, ID_SELECTOR } from '../constant.js';
import { $ } from '../utils.js';

export const submitButtonActivationHandler = () => {
  const $inputBarForm = $(CLASS_SELECTOR.inputBarForm);
  const $submitButton = $(ID_SELECTOR.submitButton);
  const { date, money, memo, payment, category } = $inputBarForm.elements;

  $inputBarForm.addEventListener(EVENT.change, () => {
    isAllInputFilled({ date, money, memo, payment, category })
      ? ($submitButton.disabled = false)
      : ($submitButton.disabled = true);
  });
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
