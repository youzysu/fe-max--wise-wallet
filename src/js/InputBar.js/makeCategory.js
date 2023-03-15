const EXPENSE_TEXT = [
  '생활',
  '식비',
  '교통',
  '쇼핑/뷰티',
  '의료/건강',
  '문화/여가',
  '미분류',
];
const INCOME_TEXT = ['월급', '용돈', '기타 수입'];

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

export const $expenseCategory = makeCategoryNode(
  EXPENSE_TEXT,
  'category-list body-small'
);

export const $incomeCategory = makeCategoryNode(
  INCOME_TEXT,
  'category-list body-small'
);
