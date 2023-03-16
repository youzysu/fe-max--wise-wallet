import { CLASS_NAME, CLASS_SELECTOR, EVENT, ID_SELECTOR } from '../constant.js';
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
  const $incomeCategory = getIncomeCategory();
  const $expenseCategory = getExpenseCategory();

  const categoryTemplate = target.checked ? $incomeCategory : $expenseCategory;
  $categoryDropdown.replaceChild(categoryTemplate, $categoryList);
};

const getExpenseCategory = () => {
  const EXPENSE_TEXT = [
    '생활',
    '식비',
    '교통',
    '쇼핑/뷰티',
    '의료/건강',
    '문화/여가',
    '미분류',
  ];

  return makeCategoryNode(EXPENSE_TEXT, CLASS_NAME.category);
};

const getIncomeCategory = () => {
  const INCOME_TEXT = ['월급', '용돈', '기타 수입'];

  return makeCategoryNode(INCOME_TEXT, CLASS_NAME.category);
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
