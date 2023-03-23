import { $, createNode, formatMoney } from '../utils.js';
import { dailyHistoryView } from './dailyHistoryView.js';

export const monthlyHistoryView = ({
  dailyHistories,
  totalCount,
  totalIncome,
  totalExpense,
}) => {
  const $main = $('main');
  const $prevHistorySection = $('.monthly-history');

  if ($prevHistorySection) {
    $prevHistorySection.remove();
  }

  const $historySection = createNode('section');
  $historySection.classList = 'monthly-history';
  $historySection.innerHTML = monthlyInfoTemplate({
    totalCount,
    totalIncome,
    totalExpense,
  });

  const $dailyWrapper = createNode('div');
  $dailyWrapper.classList = 'daily-wrapper';

  const sortedLatestDailyHistories = sortLatestDate({ dailyHistories });

  const monthlyItemViews = sortedLatestDailyHistories.map(dailyHistoryView);
  $dailyWrapper.append(...monthlyItemViews);

  $historySection.append($dailyWrapper);
  $main.append($historySection);
};

const sortLatestDate = ({ dailyHistories }) => {
  const monthlyHistories = Object.entries(dailyHistories).sort(
    ([dateA], [dateB]) => new Date(dateB) - new Date(dateA)
  );

  return monthlyHistories.map((item) => item[1]);
};

const monthlyInfoTemplate = ({ totalCount, totalIncome, totalExpense }) => {
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
          ><span>수입 </span><span id="total-income-value">${formatMoney(
            totalIncome
          )}</span
        ></label>
        <input
          type="checkbox"
          name="total-expense"
          id="total-expense"
          checked />
        <label for="total-expense"
          ><span>지출 </span><span id="total-expense-value">${formatMoney(
            totalExpense
          )}</span
        ></label>
      </fieldset>
    </form>
  </div>
  `;
};
