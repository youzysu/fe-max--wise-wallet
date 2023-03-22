import {
  CLASSLIST,
  EXPENSE_TEXT,
  INCOME_TEXT,
  SELECTOR,
} from '../../constant.js';
import { $ } from '../../utils.js';

export const changeCategoryList = (target) => {
  const $categoryList = $(SELECTOR.categoryList);
  const $categoryDropdown = $(SELECTOR.categoryDropdown);
  const $incomeCategory = makeCategoryNode(INCOME_TEXT, CLASSLIST.category);
  const $expenseCategory = makeCategoryNode(EXPENSE_TEXT, CLASSLIST.category);

  const categoryTemplate = target.checked ? $incomeCategory : $expenseCategory;
  $categoryDropdown.replaceChild(categoryTemplate, $categoryList);
};

const makeCategoryNode = (optionList, className) => {
  const $category = document.createElement('ul');
  $category.classList = className;

  optionList.forEach((text) => {
    const $li = document.createElement('li');
    $li.classList = 'input-option';

    const $span = document.createElement('span');
    $span.textContent = text;

    $li.appendChild($span);
    $category.appendChild($li);
  });

  return $category;
};
