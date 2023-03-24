import { CLASSNAME, WEEKDAY } from '../../constant.js';
import { $, createNode, formatMoney } from '../../utils.js';
import { dailyItemView } from './dailyItemView.js';

export const dailyHistoryView = (dailyHistory) => {
  const {
    date,
    dailyItems,
    incomeDailyItems,
    expenseDailyItems,
    incomeAmount,
    expenseAmount,
  } = dailyHistory;

  const $dailyHistory = createNode('div', 'daily-history');
  const $dailyHistoryList = createNode('ul', 'daily-history__list');

  const isTotalIncomeChecked = $('#total-income').checked;
  const isTotalExpenseChecked = $('#total-expense').checked;
  const $dailyInfo = makeDailyInfo(
    isTotalIncomeChecked,
    isTotalExpenseChecked,
    date,
    incomeAmount,
    expenseAmount
  );

  if (isTotalIncomeChecked && incomeAmount) {
    if (isTotalExpenseChecked) {
      appendDailyItemViews($dailyHistoryList, dailyItems);
    } else {
      appendDailyItemViews($dailyHistoryList, incomeDailyItems);
    }
    $dailyHistory.append($dailyInfo, $dailyHistoryList);
    return $dailyHistory;
  }

  if (isTotalExpenseChecked && expenseAmount) {
    appendDailyItemViews($dailyHistoryList, expenseDailyItems);
    $dailyHistory.append($dailyInfo, $dailyHistoryList);
    return $dailyHistory;
  }

  return '';
};

const appendDailyItemViews = (parent, items) => {
  const $dailyItems = Object.values(items).map(dailyItemView);
  parent.append(...$dailyItems);
};

const makeDailyInfo = (
  isTotalIncomeChecked,
  isTotalExpenseChecked,
  date,
  incomeAmount,
  expenseAmount
) => {
  const $dailyInfo = createNode('div', CLASSNAME.dailyInfo);

  const $dailyDateInfo = makeDailyDateInfo(date);
  const $dailyTotal = makeDailyTotal(
    isTotalIncomeChecked,
    isTotalExpenseChecked,
    incomeAmount,
    expenseAmount
  );

  $dailyInfo.append($dailyDateInfo, $dailyTotal);
  return $dailyInfo;
};

const makeDailyTotal = (
  isTotalIncomeChecked,
  isTotalExpenseChecked,
  incomeAmount,
  expenseAmount
) => {
  const $dailyTotal = createNode('div', 'daily-history__total');

  if (isTotalIncomeChecked && incomeAmount) {
    const $dailyTotalIncome = createNode('span');
    $dailyTotalIncome.textContent = `수입 ${formatMoney(incomeAmount)}원 `;
    $dailyTotal.append($dailyTotalIncome);
  }

  if (isTotalExpenseChecked && expenseAmount) {
    const $dailyTotalExpense = createNode('span');
    $dailyTotalExpense.textContent = `지출 ${formatMoney(expenseAmount)}원`;
    $dailyTotal.append($dailyTotalExpense);
  }

  return $dailyTotal;
};

const makeDailyDateInfo = (date) => {
  const $dailyDateInfo = createNode('div', 'daily-history__date');
  const $dailyInfoDateChar = createNode('span', 'daily-history__dateChar');
  const $dailyInfoDay = createNode('span', 'daily-history__day');

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const dateView = dateObj.getDate();
  const day = WEEKDAY[dateObj.getDay()];

  $dailyInfoDateChar.textContent = `${month}월 ${dateView}일`;
  $dailyInfoDay.textContent = `${day}`;

  $dailyDateInfo.append($dailyInfoDateChar, $dailyInfoDay);
  return $dailyDateInfo;
};
