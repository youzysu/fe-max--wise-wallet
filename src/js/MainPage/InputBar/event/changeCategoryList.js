import {
  CLASSNAME,
  EXPENSE_TEXT,
  INCOME_TEXT,
  SELECTOR,
} from '../../../constant.js';
import { $, createNode } from '../../../utils.js';

export const changeCategoryList = (target) => {
  const $categoryList = $(SELECTOR.categoryList);
  const $categoryDropdown = $(SELECTOR.categoryDropdown);
  const $incomeCategory = makeCategoryNode(INCOME_TEXT, CLASSNAME.category);
  const $expenseCategory = makeCategoryNode(EXPENSE_TEXT, CLASSNAME.category);

  const categoryTemplate = target.checked ? $incomeCategory : $expenseCategory;
  $categoryDropdown.replaceChild(categoryTemplate, $categoryList);
};

const makeCategoryNode = (optionList, className) => {
  const $category = createNode('ul', className);

  optionList.forEach((text) => {
    const $li = createNode('li', 'input-option');
    const $span = createNode('span');
    $span.textContent = text;

    $li.appendChild($span);
    $category.appendChild($li);
  });

  return $category;
};
