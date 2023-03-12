import { $ } from '../utils/dom.js';

export const initDateInput = ({ year, monthNumber, date }) => {
  const $dateInput = $('#date-input');
  const month = monthNumber.padStart(2, '0');
  $dateInput.value = `${year}${month}${date}`;
};
