import { $, createNode, formatMoney } from '../utils.js';
import { dailyHistoryView } from './dailyHistoryView.js';

export const monthlyHistoryView = (monthlyHistory) => {
  const $main = $('main');
  const $prevHistorySection = $('.monthly-history');

  if ($prevHistorySection) {
    $prevHistorySection.remove();
  }

  const $historySection = createNode('section');
  $historySection.classList = 'monthly-history';
  $historySection.innerHTML = monthlyInfoTemplate(monthlyHistory);

  const $dailyWrapper = createNode('div');
  $dailyWrapper.classList = 'daily-wrapper';

  const dailyHistories = sortLatestDate(monthlyHistory);
  const monthlyItemViews = dailyHistories.map(dailyHistoryView);
  $dailyWrapper.append(...monthlyItemViews);

  $historySection.append($dailyWrapper);
  $main.append($historySection);
};

const sortLatestDate = (monthlyHistory) => {
  const monthlyHistories = Object.entries(
    monthlyHistory.dailyHistoryItems
  ).sort(([dateA], [dateB]) => dateB - dateA);

  return monthlyHistories.map((item) => item[1]);
};

const monthlyInfoTemplate = (monthlyHistory) => {
  const { count, income, expense } = monthlyHistory.getState();

  const totalCount = count;
  const totalIncomeValue = formatMoney(income);
  const totalExpenseValue = formatMoney(expense);

  return `
  <div class="monthly-history__info">
    <div class="monthly-history__left body-large">
      <span>전체 내역 </span><span id="total-count">${totalCount}</span><span>건</span>
    </div>
    <form action="" class="monthly-history__right">
      <fieldset class="body-medium">
        <input
          type="checkbox"
          name="total-income"
          id="total-income"
          checked />
        <label for="total-income"
          ><span>수입 </span><span id="total-income-value">${totalIncomeValue}</span
        ></label>
        <input
          type="checkbox"
          name="total-expense"
          id="total-expense"
          checked />
        <label for="total-expense"
          ><span>지출 </span><span id="total-expense-value">${totalExpenseValue}</span
        ></label>
      </fieldset>
    </form>
  </div>
  `;
};
