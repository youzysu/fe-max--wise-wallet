import { CLASSLIST, TAG_NAME } from '../constant.js';
import { createNode, formatMoney } from '../utils.js';
import { DailyItemView } from './DailyItemView.js';

export const DailyHistoryView = (dailyHistory) => {
  const {
    fullDate,
    month,
    date,
    day,
    dailyItems,
    incomeAmount,
    expenseAmount,
  } = dailyHistory;

  const $dailyHistory = createNode(TAG_NAME.div);
  $dailyHistory.classList = 'daily-history';
  const $dailyHistoryList = createNode(TAG_NAME.ul);
  $dailyHistoryList.classList = 'daily-history__list';

  const $dailyInfo = makeDailyInfo(
    month,
    date,
    day,
    incomeAmount,
    expenseAmount
  );
  const $dailyItems = Object.values(dailyItems).map(DailyItemView);

  $dailyHistoryList.append(...$dailyItems);
  $dailyHistory.append($dailyInfo, $dailyHistoryList);
  return $dailyHistory;
};

const makeDailyInfo = (month, date, day, incomeAmount, expenseAmount) => {
  const $dailyInfo = createNode(TAG_NAME.div);
  $dailyInfo.classList = CLASSLIST.dailyInfo;

  const $dailyDateInfo = makeDailyDateInfo(month, date, day);
  const $dailyTotal = makeDailyTotal(incomeAmount, expenseAmount);

  $dailyInfo.append($dailyDateInfo, $dailyTotal);
  return $dailyInfo;
};

const makeDailyDateInfo = (month, date, day) => {
  const $dailyDateInfo = createNode(TAG_NAME.div);
  $dailyDateInfo.classList = 'daily-history__date';

  const $dailyInfoDateChar = createNode(TAG_NAME.span);
  $dailyInfoDateChar.textContent = `${month}월 ${date}일`;
  $dailyInfoDateChar.classList = 'daily-history__dateChar';

  const $dailyInfoDay = createNode(TAG_NAME.span);
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

  $dailyTotal.append($dailyTotalIncome, $dailyTotalExpense);
  return $dailyTotal;
};
