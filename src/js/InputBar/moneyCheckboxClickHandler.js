import {
  CLASS_NAME,
  CLASS_SELECTOR,
  EVENT,
  EXPENSE_TEXT,
  ID_SELECTOR,
  INCOME_TEXT,
} from '../constant.js';
import { $ } from '../utils.js';

export const moneyCheckboxClickHandler = () => {
  const $moneyTypeCheckbox = $(ID_SELECTOR.moneyCheckbox);
  $moneyTypeCheckbox.addEventListener(EVENT.click, ({ target }) => {
    changeCategoryList(target);
  });
};

const changeCategoryList = (target) => {
  const $categoryList = $(CLASS_SELECTOR.categoryList);
  const $categoryDropdown = $(CLASS_SELECTOR.categoryDropdown);
  const $incomeCategory = makeCategoryNode(INCOME_TEXT, CLASS_NAME.category);
  const $expenseCategory = makeCategoryNode(EXPENSE_TEXT, CLASS_NAME.category);

  const categoryTemplate = target.checked ? $incomeCategory : $expenseCategory;
  $categoryDropdown.replaceChild(categoryTemplate, $categoryList);
};

const makeCategoryNode = (optionList, className) => {
  const $category = document.createElement('ul');
  $category.setAttribute('class', className);

  optionList.forEach((text) => {
    const $li = document.createElement('li');
    $li.setAttribute('class', 'input-option');

    const $span = document.createElement('span');
    $span.textContent = text;

    $li.appendChild($span);
    $category.appendChild($li);
  });

  return $category;
};
