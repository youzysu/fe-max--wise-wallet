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
}

const formatMoneyValue = (element) => {
  element.addEventListener('input', ({ target }) => {
    let moneyValue = target.value;
    moneyValue = Number(moneyValue.replaceAll(',', ''));
    if (isNaN(moneyValue)) return (target.value = '');

    const formatValue = moneyValue.toLocaleString('ko-KR');
    target.value = formatValue;
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
