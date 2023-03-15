import { $, $all, toggleActiveClass } from '../utils.js';
import { $expenseCategory, $incomeCategory } from './makeCategory.js';

export function InputBar() {
  const $inputBarForm = $('.input-bar__form');
  $inputBarForm.addEventListener('submit', (e) => e.preventDefault());

  const $paymentInput = $('#payment-input');
  const $categoryInput = $('#category-input');
  handleDropdownClick($paymentInput);
  handleDropdownClick($categoryInput);
  handleOptionClick('.input-bar__dropdown');

  const $moneyTypeCheckbox = $('#money-type-checkbox');
  const $categoryDropdown = $('.category-dropdown');
  changeCategoryList($moneyTypeCheckbox, $categoryDropdown);
}

const handleDropdownClick = (element) => {
  element.addEventListener('click', ({ target }) => {
    const dropdown = target.nextElementSibling;
    toggleActiveClass(dropdown);
  });
};

const handleOptionClick = (dropdownClassName) => {
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
