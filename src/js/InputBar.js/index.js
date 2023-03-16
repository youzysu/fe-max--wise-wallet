import { $, $all, toggleActiveClass } from '../utils.js';
import { $expenseCategory, $incomeCategory } from './makeCategory.js';

export function InputBar() {
  const $paymentInput = $('#payment-input');
  const $categoryInput = $('#category-input');
  toggleDropdown($paymentInput);
  toggleDropdown($categoryInput);

  const DROPDOWN_SELECTOR_NAME = '.input-bar__dropdown';
  changeSelectedOption(DROPDOWN_SELECTOR_NAME);

  const $moneyTypeCheckbox = $('#money-type-checkbox');
  const $categoryDropdown = $('.category-dropdown');
  changeCategoryList($moneyTypeCheckbox, $categoryDropdown);

  const $moneyInput = $('#money-input');
  moneyInputEventHandler($moneyInput);

  const $dateInput = $('#date-input');
  validateDateValue($dateInput);

  const $inputBarForm = $('.input-bar__form');
  const $submitButton = $('#submit-btn');

  $inputBarForm.addEventListener('change', () => {
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

const validateDateValue = (element) => {
  element.addEventListener('blur', ({ target }) => {
    const dateValue = target.value;
    if (!/^2\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])/.test(dateValue)) {
      target.focus();
    }
  });
};

const changePaymentOption = (element) => {
  element.addEventListener('click', ({ target }) => {
    if (target.className.contains('delete-btn')) {
      // 배경 딤처리
      // 삭제 모달창 띄우기
    }
  });
};

const moneyInputEventHandler = (element) => {
  element.addEventListener('input', ({ target }) =>
    formatMoneyValue({ target })
  );
};

const formatMoneyValue = ({ target }) => {
  let moneyValue = target.value;
  moneyValue = Number(moneyValue.replaceAll(',', ''));
  if (!moneyValue || isNaN(moneyValue)) return (target.value = '');
  target.value = moneyValue.toLocaleString('ko-KR');
};

const toggleDropdown = (element) => {
  element.addEventListener('click', ({ target }) => {
    const dropdown = target.nextElementSibling;
    toggleActiveClass(dropdown);
  });
};

const changeSelectedOption = (dropdownClassName) => {
  const $dropdowns = $all(dropdownClassName);

  $dropdowns.forEach((el) => {
    el.addEventListener('click', ({ target }) => {
      if (target.tagName !== 'SPAN') return;

      const spanText = target.textContent;
      const input = target.closest(dropdownClassName).previousElementSibling;
      input.value = spanText;
      toggleActiveClass(el);
    });
  });
};

const changeCategoryList = ($moneyTypeCheckbox, $categoryDropdown) => {
  $moneyTypeCheckbox.addEventListener('click', () => {
    const $categoryList = $('.category-list');
    const categoryTemplate = $moneyTypeCheckbox.checked
      ? $incomeCategory
      : $expenseCategory;
    $categoryDropdown.replaceChild(categoryTemplate, $categoryList);
  });
};
