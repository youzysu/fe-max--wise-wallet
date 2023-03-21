import { historyStorage } from '../HistoryStorage/HistoryStorage.js';
import { monthlyHistoryView } from '../MainPage/monthlyHistoryView.js';
import { EVENT, SELECTOR } from '../constant.js';
import { $, getDateFormat } from '../utils.js';

export function headerEventHandler() {
  const $nextYearMonthBtn = $(SELECTOR.nextYearMonthBtn);
  $nextYearMonthBtn.addEventListener(EVENT.click, () =>
    monthYearBtnClickHandler(SELECTOR.nextYearMonthBtn)
  );

  const $prevYearMonthBtn = $(SELECTOR.prevYearMonthBtn);
  $prevYearMonthBtn.addEventListener(EVENT.click, () =>
    monthYearBtnClickHandler(SELECTOR.prevYearMonthBtn)
  );
}

const monthYearBtnClickHandler = (buttonType) => {
  const updateDate = updateHeaderMonthYear(buttonType);
  renderMain(updateDate);
};

const updateHeaderMonthYear = (buttonType) => {
  const monthMoveIndex = buttonType === SELECTOR.prevYearMonthBtn ? 2 : 0;
  const { $currentYear, $currentMonthNumber, $currentMonthChar } =
    getCurrentDateNode();
  const updateDate = new Date(
    $currentYear.textContent,
    $currentMonthNumber.textContent - monthMoveIndex
  );
  const { year, monthNumber, monthChar } = getDateFormat(updateDate);
  changeHeaderMonthYear({ year, monthNumber, monthChar });

  return updateDate;
};

const renderMain = (updateDate) => {
  const curMonthlyHistory = historyStorage.getMonthlyHistory(updateDate);
  monthlyHistoryView(curMonthlyHistory);
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
