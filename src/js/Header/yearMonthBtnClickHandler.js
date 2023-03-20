import { historyStorage } from '../History/HistoryStorage.js';
import { MonthlyHistoryView } from '../View/MonthlyHistoryView.js';
import { EVENT, ID_SELECTOR } from '../constant.js';
import { $ } from '../utils.js';

export const yearMonthBtnClickHandler = () => {
  const $nextYearMonthBtn = $(ID_SELECTOR.nextYearMonthBtn);
  $nextYearMonthBtn.addEventListener(EVENT.click, () =>
    monthYearBtnClickHandler(getNextYearMonth)
  );

  const $prevYearMonthBtn = $(ID_SELECTOR.prevYearMonthBtn);
  $prevYearMonthBtn.addEventListener(EVENT.click, () =>
    monthYearBtnClickHandler(getPrevYearMonth)
  );
};

const monthYearBtnClickHandler = (getChangeYearMonth) => {
  const { changeYear, changeMonth } = setYearMonth(getChangeYearMonth);
  const currentMonthYear = `${changeYear}${changeMonth
    .toString()
    .padStart(2, '0')}`;
  const curMonthlyHistory = historyStorage.getMonthlyHistory(currentMonthYear);

  MonthlyHistoryView(curMonthlyHistory);
};

const setYearMonth = (changeYearMonth) => {
  const $currentYear = $(ID_SELECTOR.currentYear);
  const $currentMonthNumber = $(ID_SELECTOR.currentMonthNumber);
  const $currentMonthChar = $(ID_SELECTOR.currentMonthChar);

  const { changeYear, changeMonth } = changeYearMonth(
    $currentYear.textContent,
    $currentMonthNumber.textContent
  );

  $currentYear.textContent = changeYear;
  $currentMonthNumber.textContent = changeMonth;
  $currentMonthChar.textContent = new Date(
    changeYear,
    changeMonth - 1
  ).toLocaleString('en-US', { month: 'long' });

  return { changeYear, changeMonth };
};

const getNextYearMonth = (currentYear, currentMonth) => {
  let nextYear = Number(currentYear);
  let nextMonth = Number(currentMonth) + 1;

  if (nextMonth > 12) {
    nextMonth = 1;
    nextYear += 1;
  }

  return { changeYear: nextYear, changeMonth: nextMonth };
};

const getPrevYearMonth = (currentYear, currentMonth) => {
  let prevYear = Number(currentYear);
  let prevMonth = Number(currentMonth) - 1;

  if (prevMonth < 1) {
    prevMonth = 12;
    prevYear -= 1;
  }

  return { changeYear: prevYear, changeMonth: prevMonth };
};
