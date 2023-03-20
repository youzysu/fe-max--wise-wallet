import { historyStorage } from './History/HistoryStorage.js';
import { MonthlyHistoryView } from './View/MonthlyHistoryView.js';
import { ID_SELECTOR } from './constant.js';
import { $, getNowDate } from './utils.js';

export const init = () => {
  const { year, monthNumber, monthChar, date } = getNowDate();
  changeHeaderMonthYear({ year, monthNumber, monthChar });
  initDateInput({ year, monthNumber, date });

  const currentMonthlyHistory = historyStorage.getMonthlyHistory(
    `${year}${monthNumber}`
  );
  MonthlyHistoryView(currentMonthlyHistory);
};

const initDateInput = ({ year, monthNumber, date }) => {
  const $dateInput = $(ID_SELECTOR.dateInput);
  const formatMonth = monthNumber.padStart(2, '0');
  const formatDate = date.padStart(2, '0');
  $dateInput.value = `${year}${formatMonth}${formatDate}`;
};

export const changeHeaderMonthYear = ({ year, monthNumber, monthChar }) => {
  const $currentYear = $(ID_SELECTOR.currentYear);
  const $currentMonthNumber = $(ID_SELECTOR.currentMonthNumber);
  const $currentMonthChar = $(ID_SELECTOR.currentMonthChar);

  $currentYear.textContent = year;
  $currentMonthNumber.textContent = monthNumber;
  $currentMonthChar.textContent = monthChar;
};
