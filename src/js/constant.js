export const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

export const TAG_NAME = {
  ul: 'ul',
  li: 'li',
  div: 'div',
  span: 'span',
  button: 'button',
};

export const MONEY_TYPE = {
  income: 'income',
  expense: 'expense',
};

export const FILE_PATH = {
  dailyItemDeleteBtn: './src/assets/icon/delete-item-icon.svg',
};

export const CLASSLIST = {
  category: 'category-list body-small',
  dailyItem: 'daily-item',
  dailyItemCategory: 'daily-item__category bold-medium',
  dailyItemMemo: 'daily-item__memo body-medium',
  dailyItemPayment: 'daily-item__payment body-medium',
  dailyItemMoney: 'daily-item__money body-medium',
  dailyItemDeleteBtn: 'daily-item__delete-btn',
  dailyDateInfo: 'daily-history__date',
  dailyTotal: 'daily-history__total',
  dailyInfo: 'daily-history__info bold-medium',
};

export const SELECTOR = {
  categoryDropdown: '.category-dropdown',
  inputBarDropdown: '.input-bar__dropdown',
  inputOption: '.input-option',
  categoryDropdown: '.category-dropdown',
  categoryList: '.category-list',
  inputBarForm: '.input-bar__form',
  historySection: '.monthly-history',
  currentYear: '#year',
  currentMonthNumber: '#monthNumber',
  currentMonthChar: '#monthChar',
  nextYearMonthBtn: '#next-yearMonth-btn',
  prevYearMonthBtn: '#prev-yearMonth-btn',
  paymentInput: '#payment-input',
  categoryInput: '#category-input',
  moneyCheckbox: '#money-type-checkbox',
  moneyInput: '#money-input',
  dateInput: '#date-input',
  submitButton: '#submit-btn',
  totalCount: '#total-count',
  currentYear: '#year',
  currentMonth: '#monthNumber',
  totalIncomeValue: '#total-income-value',
  totalExpenseValue: '#total-expense-value',
};

export const EVENT = {
  click: 'click',
  input: 'input',
  blur: 'blur',
  change: 'change',
  submit: 'submit',
};

export const EXPENSE_CATEGORY = {
  living: '생활',
  food: '식비',
  traffic: '교통',
  shoppingBeauty: '쇼핑/뷰티',
  cultureLeisure: '문화/여가',
  health: '의료/건강',
  unclassified: '미분류',
};

export const INCOME_CATEGORY = {
  monthlySalary: '월급',
  allowance: '용돈',
  otherIncome: '기타 수입',
};

export const EXPENSE_TEXT = Object.values(EXPENSE_CATEGORY);

export const INCOME_TEXT = Object.values(INCOME_CATEGORY);

export const CATEGORY_OPTIONS = EXPENSE_TEXT.concat(INCOME_TEXT);

export const REGEX = {
  dateFormat: /^2\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])/,
};
