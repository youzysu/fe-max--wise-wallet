import { $ } from '../utils/dom.js';

export const initCurrentDate = ({ year, monthNumber, monthChar }) => {
  const $year = $('#year');
  const $monthNumber = $('#monthNumber');
  const $monthChar = $('#monthChar');

  $year.textContent = year;
  $monthNumber.textContent = monthNumber;
  $monthChar.textContent = monthChar;
};
