import { SELECTOR } from '../constant.js';
import { $, getDateFormat } from '../utils.js';

export function headerView() {
  initHeaderMonthYear();
}

const initHeaderMonthYear = () => {
  const currentDate = new Date();
  const { year, monthNumber, monthChar, date } = getDateFormat(currentDate);

  changeHeaderMonthYear({ year, monthNumber, monthChar });
};

export const changeHeaderMonthYear = ({ year, monthNumber, monthChar }) => {
  const { $currentYear, $currentMonthNumber, $currentMonthChar } =
    getCurrentDateNode();

  $currentYear.textContent = year;
  $currentMonthNumber.textContent = monthNumber;
  $currentMonthChar.textContent = monthChar;
};

export const getCurrentDateNode = () => {
  const $currentYear = $(SELECTOR.currentYear);
  const $currentMonthNumber = $(SELECTOR.currentMonthNumber);
  const $currentMonthChar = $(SELECTOR.currentMonthChar);

  return { $currentYear, $currentMonthNumber, $currentMonthChar };
};
