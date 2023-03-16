import { $ } from '../utils.js';
import { dateEventHandler } from './dateEventHandler.js';
import { dropdownClickHandler } from './dropdownClickHandler.js';
import { moneyCheckboxClickHandler } from './moneyCheckboxClickHandler.js';
import { moneyInputHandler } from './moneyInputHandler.js';
import { selectboxClickHandler } from './selectboxClickHandler.js';

export function InputBar() {
  dropdownClickHandler();
  moneyCheckboxClickHandler();
  selectboxClickHandler();
  moneyInputHandler();
  dateEventHandler();

  const $inputBarForm = $('.input-bar__form');
  const $submitButton = $('#submit-btn');

  $inputBarForm.addEventListener('input', () => {
    checkUserInputValue($inputBarForm)
      ? ($submitButton.disabled = false)
      : ($submitButton.disabled = true);
  });
  $inputBarForm.addEventListener('submit', (e) => e.preventDefault());
}

const checkUserInputValue = (form) => {
  const inputElements = form.elements;
  const userInputValues = [
    inputElements.date.value,
    inputElements.money.value,
    inputElements.memo.value,
    inputElements.payment.value,
    inputElements.category.value,
  ];
  return userInputValues.every((v) => !!v === true);
};

const changePaymentOption = (element) => {
  element.addEventListener('click', ({ target }) => {
    if (target.className.contains('delete-btn')) {
      // 배경 딤처리
      // 삭제 모달창 띄우기
    }
  });
};
