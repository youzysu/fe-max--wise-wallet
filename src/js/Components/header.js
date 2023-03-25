import { renderMain } from '../App.js';
import { EVENT, SELECTOR } from '../constant.js';
import { $, getDateFormat } from '../utils.js';

export function header(currentDate) {
  initHeaderMonthYear(currentDate);

  const $nextYearMonthBtn = $(SELECTOR.nextYearMonthBtn);
  const $prevYearMonthBtn = $(SELECTOR.prevYearMonthBtn);

  $nextYearMonthBtn.addEventListener(EVENT.click, () =>
    monthYearBtnClickHandler(SELECTOR.nextYearMonthBtn)
  );
  $prevYearMonthBtn.addEventListener(EVENT.click, () =>
    monthYearBtnClickHandler(SELECTOR.prevYearMonthBtn)
  );
}

const initHeaderMonthYear = (currentDate) => {
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

const getCurrentDateNode = () => {
  const $currentYear = $(SELECTOR.currentYear);
  const $currentMonthNumber = $(SELECTOR.currentMonthNumber);
  const $currentMonthChar = $(SELECTOR.currentMonthChar);

  return { $currentYear, $currentMonthNumber, $currentMonthChar };
};

export const getCurrentDate = () => {
  const currentYear = $(SELECTOR.currentYear).textContent;
  const currentMonthNumber = $(SELECTOR.currentMonthNumber).textContent;
  const currentMonthChar = $(SELECTOR.currentMonthChar).textContent;

  return { currentYear, currentMonthNumber, currentMonthChar };
};

const monthYearBtnClickHandler = (buttonType) => {
  const updateDate = updateHeaderMonthYear(buttonType);
  renderMain(updateDate);
};

const updateHeaderMonthYear = (buttonType) => {
  const monthMoveIndex = buttonType === SELECTOR.prevYearMonthBtn ? 2 : 0;
  const { currentYear, currentMonthNumber, currentMonthChar } =
    getCurrentDate();
  const updateDate = new Date(currentYear, currentMonthNumber - monthMoveIndex);
  const { year, monthNumber, monthChar } = getDateFormat(updateDate);
  changeHeaderMonthYear({ year, monthNumber, monthChar });

  return updateDate;
};
