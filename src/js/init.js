import { $, getCurrentDate } from './utils.js';

const initDateInput = ({ year, monthNumber, date }) => {
  const $dateInput = $('#date-input');
  const month = monthNumber.padStart(2, '0');
  $dateInput.value = `${year}${month}${date}`;
};

const initCurrentDate = ({ year, monthNumber, monthChar }) => {
  const $year = $('#year');
  const $monthNumber = $('#monthNumber');
  const $monthChar = $('#monthChar');

  $year.textContent = year;
  $monthNumber.textContent = monthNumber;
  $monthChar.textContent = monthChar;
};

export const init = () => {
  const { year, monthNumber, monthChar, date } = getCurrentDate();
  initCurrentDate({ year, monthNumber, monthChar });
  initDateInput({ year, monthNumber, date });
};
