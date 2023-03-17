import { CLASS_SELECTOR, EVENT, ID_SELECTOR } from '../constant.js';
import { $ } from '../utils.js';

export const submitButtonActivationHandler = () => {
  const $inputBarForm = $(CLASS_SELECTOR.inputBarForm);
  const { date, money, memo, payment, category } = $inputBarForm.elements;
  const $submitButton = $(ID_SELECTOR.submitButton);

  $inputBarForm.addEventListener(EVENT.change, () =>
    changeSubmitButtonActivation(
      { date, money, memo, payment, category },
      $submitButton
    )
  );
};

const changeSubmitButtonActivation = (
  { date, money, memo, payment, category },
  button
) => {
  const userInputValues = [
    date.value,
    money.value,
    memo.value,
    payment.value,
    category.value,
  ];
  const isAllInputFilled = userInputValues.every((val) => !!val === true);
  isAllInputFilled ? (button.disabled = false) : (button.disabled = true);
};
