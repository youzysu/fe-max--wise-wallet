import { ID_SELECTOR } from './constant.js';
import { $, getNowDate } from './utils.js';

export const init = () => {
  const { year, monthNumber, monthChar, date } = getNowDate();
  initCurrentDate({ year, monthNumber, monthChar });
  initDateInput({ year, monthNumber, date });
};

const initDateInput = ({ year, monthNumber, date }) => {
  const $dateInput = $(ID_SELECTOR.dateInput);
  const formatMonth = monthNumber.padStart(2, '0');
  const formatDate = date.padStart(2, '0');
  $dateInput.value = `${year}${formatMonth}${formatDate}`;
};

const initCurrentDate = ({ year, monthNumber, monthChar }) => {
  const $currentYear = $(ID_SELECTOR.currentYear);
  const $currentMonthNumber = $(ID_SELECTOR.currentMonthNumber);
  const $currentMonthChar = $(ID_SELECTOR.currentMonthChar);

  $currentYear.textContent = year;
  $currentMonthNumber.textContent = monthNumber;
  $currentMonthChar.textContent = monthChar;
};
