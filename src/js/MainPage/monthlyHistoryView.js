import { $, createNode, formatMoney } from '../utils.js';
import { dailyHistoryView } from './dailyHistoryView.js';

export const monthlyHistoryView = ({ dailyHistoryItems }) => {
  const $main = $('main');
  const $prevHistorySection = $('.monthly-history');

  if ($prevHistorySection) {
    $prevHistorySection.remove();
  }

  const $historySection = createNode('section');
  $historySection.classList = 'monthly-history';
  $historySection.innerHTML = monthlyInfoTemplate({ dailyHistoryItems });

  const $dailyWrapper = createNode('div');
  $dailyWrapper.classList = 'daily-wrapper';

  const dailyHistories = sortLatestDate({ dailyHistoryItems });
  const monthlyItemViews = dailyHistories.map(dailyHistoryView);
  $dailyWrapper.append(...monthlyItemViews);

  $historySection.append($dailyWrapper);
  $main.append($historySection);
};

const sortLatestDate = ({ dailyHistoryItems }) => {
  const monthlyHistories = Object.entries(dailyHistoryItems).sort(
    ([dateA], [dateB]) => dateB - dateA
  );

  return monthlyHistories.map((item) => item[1]);
};

const monthlyInfoTemplate = ({ dailyHistoryItems }) => {
  const { totalIncome, totalExpense, totalCount } =
    getTotalState(dailyHistoryItems);

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

const getTotalState = (dailyHistoryItems) => {
  const dailyHistories = Object.values(dailyHistoryItems);
  const totalIncome = dailyHistories.reduce(
    (acc, cur) => acc + cur.incomeAmount,
    0
  );
  const totalExpense = dailyHistories.reduce(
    (acc, cur) => acc + cur.expenseAmount,
    0
  );
  const totalCount = dailyHistories.reduce(
    (acc, cur) => acc + Object.keys(cur.dailyItems).length,
    0
  );

  return { totalIncome, totalExpense, totalCount };
};
