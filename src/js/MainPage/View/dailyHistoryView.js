import { CLASSLIST, TAG_NAME, WEEKDAY } from '../../constant.js';
import { createNode, formatMoney } from '../../utils.js';
import { dailyItemView } from './dailyItemView.js';

export const dailyHistoryView = (dailyHistory) => {
  const { date, dailyItems, incomeAmount, expenseAmount } = dailyHistory;

  const $dailyHistory = createNode(TAG_NAME.div);
  $dailyHistory.classList = 'daily-history';
  const $dailyHistoryList = createNode(TAG_NAME.ul);
  $dailyHistoryList.classList = 'daily-history__list';

  const $dailyInfo = makeDailyInfo(date, incomeAmount, expenseAmount);
  const $dailyItems = Object.values(dailyItems).map(dailyItemView);

  $dailyHistoryList.append(...$dailyItems);
  $dailyHistory.append($dailyInfo, $dailyHistoryList);
  return $dailyHistory;
};

const makeDailyInfo = (date, incomeAmount, expenseAmount) => {
  const $dailyInfo = createNode(TAG_NAME.div);
  $dailyInfo.classList = CLASSLIST.dailyInfo;

  const $dailyDateInfo = makeDailyDateInfo(date);
  const $dailyTotal = makeDailyTotal(incomeAmount, expenseAmount);

  $dailyInfo.append($dailyDateInfo, $dailyTotal);
  return $dailyInfo;
};

const makeDailyDateInfo = (date) => {
  const $dailyDateInfo = createNode(TAG_NAME.div);
  $dailyDateInfo.classList = 'daily-history__date';

  const $dailyInfoDateChar = createNode(TAG_NAME.span);
  const $dailyInfoDay = createNode(TAG_NAME.span);

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const dateView = dateObj.getDate();
  const day = WEEKDAY[dateObj.getDay()];

  $dailyInfoDateChar.textContent = `${month}월 ${dateView}일`;
  $dailyInfoDateChar.classList = 'daily-history__dateChar';

  $dailyInfoDay.textContent = `${day}`;
  $dailyInfoDay.classList = 'daily-history__day';

  $dailyDateInfo.append($dailyInfoDateChar, $dailyInfoDay);
  return $dailyDateInfo;
};

const makeDailyTotal = (incomeAmount, expenseAmount) => {
  const $dailyTotal = createNode(TAG_NAME.div);
  $dailyTotal.classList = 'daily-history__total';

  const $dailyTotalIncome = createNode(TAG_NAME.span);
  $dailyTotalIncome.textContent = `수입 ${formatMoney(incomeAmount)}원 `;

  const $dailyTotalExpense = createNode(TAG_NAME.span);
  $dailyTotalExpense.textContent = `지출 ${formatMoney(expenseAmount)}원`;

  if (incomeAmount) {
    $dailyTotal.append($dailyTotalIncome);
  }

  if (expenseAmount) {
    $dailyTotal.append($dailyTotalExpense);
  }

  return $dailyTotal;
};
