import { $, $all, toggleActiveClass } from '../utils.js';
import { $expenseCategory, $incomeCategory } from './makeCategory.js';

export function InputBar() {
  const $inputBarForm = $('.input-bar__form');
  $inputBarForm.addEventListener('submit', (e) => e.preventDefault());

  const $paymentInput = $('#payment-input');
  const $categoryInput = $('#category-input');
  toggleDropdown($paymentInput);
  toggleDropdown($categoryInput);

  changeSelectedOption('.input-bar__dropdown');

  const $moneyTypeCheckbox = $('#money-type-checkbox');
  const $categoryDropdown = $('.category-dropdown');
  changeCategoryList($moneyTypeCheckbox, $categoryDropdown);

  const $moneyInput = $('#money-input');
  formatMoneyValue($moneyInput);

  const $dateInput = $('#date-input');
  validateDateValue($dateInput);

  // const $paymentList = $('.payment-list');
  // changePaymentOption($paymentList);
}

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

const formatMoneyValue = (element) => {
  element.addEventListener('input', ({ target }) => {
    let moneyValue = target.value;
    moneyValue = Number(moneyValue.replaceAll(',', ''));
    if (isNaN(moneyValue)) return (target.value = '');
    target.value = moneyValue.toLocaleString('ko-KR');
  });
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
