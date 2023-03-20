import { CLASS_SELECTOR, ID_SELECTOR } from '../constant.js';
import { $, formatMoney } from '../utils.js';
import { DailyHistoryView } from './DailyHistoryView.js';

export const MonthlyHistoryView = (monthlyHistory) => {
  const $historySection = $(CLASS_SELECTOR.historySection);
  changeTotalInfo(monthlyHistory, $historySection);
  const $dailyWrapper = $('.daily-wrapper', $historySection);

  $dailyWrapper.innerText = '';
  const monthlyItems = [...monthlyHistory.dailyHistoryItems.values()];
  const monthlyItemViews = monthlyItems.map(DailyHistoryView);
  $dailyWrapper.append(...monthlyItemViews);
};

const changeTotalInfo = (monthlyHistory, parentNode) => {
  const $totalCount = $(ID_SELECTOR.totalCount, parentNode);
  const $totalIncomeValue = $(ID_SELECTOR.totalIncomeValue, parentNode);
  const $totalExpenseValue = $(ID_SELECTOR.totalExpenseValue, parentNode);

  $totalCount.textContent = formatMoney(monthlyHistory.totalCount);
  $totalIncomeValue.textContent = formatMoney(monthlyHistory.totalIncome);
  $totalExpenseValue.textContent = formatMoney(monthlyHistory.totalExpense);
};
