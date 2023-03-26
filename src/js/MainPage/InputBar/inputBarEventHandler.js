import { changeHeaderMonthYear } from '../../Components/header.js';
import { storage } from '../../Storage.js';
import { REGEX, SELECTOR } from '../../constant.js';
import { $, $all, getDateFormat, toggleActiveClass } from '../../utils.js';
import { monthlyHistoryView } from '../History/monthlyHistoryView.js';
import { changeCategoryList } from './event/changeCategoryList.js';
import { initDateInput } from './inputBarView.js';

export function inputBarEventHandler() {
  const $inputBarForm = $(SELECTOR.inputBarForm);
  $inputBarForm.addEventListener('change', checkSubmitButtonActivation);
  $inputBarForm.addEventListener('submit', formSubmitHandler);
  $inputBarForm.addEventListener('click', ({ target }) => {
    if (target.matches('.dropdown-input')) {
      toggleDropdown({ target });
    }
    if (target.matches('#money-type-checkbox')) {
      changeCategoryList({ target });
    }
  });

  const $moneyInput = $(SELECTOR.moneyInput);
  $moneyInput.addEventListener('input', formatMoneyValue);

  const $dateInput = $(SELECTOR.dateInput);
  $dateInput.addEventListener('blur', validateDateValue);

  const $inputBarDropdowns = $all(SELECTOR.inputBarDropdown);
  $inputBarDropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', ({ target }) => {
      changeSelectedOption({ target });
      toggleActiveClass(dropdown);
      checkSubmitButtonActivation();
    });
  });
}

const formSubmitHandler = (event) => {
  event.preventDefault();
  const {
    fullDate,
    moneyType,
    money,
    memo,
    payment,
    category,
    currentItemKey,
  } = event.target.elements;
  const [year, month, date] = [
    fullDate.value.slice(0, 4),
    fullDate.value.slice(4, 6),
    fullDate.value.slice(6),
  ];

  const updatedItem = {
    uuid: currentItemKey.value,
    date: new Date(`${year}-${month}-${date}`),
    money: Number(money.value.replaceAll(',', '')),
    memo: memo.value,
    payment: payment.value,
    category: category.value,
    isIncomeMoney: moneyType.checked ? true : false,
  };

  if (!currentItemKey.value) {
    saveDailyItem(updatedItem);
    resetInputBar();
    return;
  }

  const stoargedItem = getSelectedItem();
  if (isModified(updatedItem, stoargedItem)) {
    updateDailyitem(updatedItem, stoargedItem);
    resetInputBar();
  }
};

const saveDailyItem = (dailyItemData) => {
  try {
    const monthlyHistory = storage.saveDailyItem(dailyItemData);
    monthlyHistoryView(monthlyHistory);

    const { year, monthNumber, monthChar } = getDateFormat(dailyItemData.date);
    changeHeaderMonthYear({ year, monthNumber, monthChar });
  } catch (err) {
    // 에러 메시지 유저에게 보여주는 UI 추가하기
  }
};

const updateDailyitem = (updatedItem, stoargedItem) => {
  try {
    const monthlyHistory = storage.modifyDailyItem(updatedItem, stoargedItem);
    monthlyHistoryView(monthlyHistory);

    const { year, monthNumber, monthChar } = getDateFormat(updatedItem.date);
    changeHeaderMonthYear({ year, monthNumber, monthChar });
  } catch (err) {
    // 에러 메시지 유저에게 보여주는 UI 추가하기
  }
};

const getSelectedItem = () => {
  const selectedItem = $('.selected-item');
  const selectedItemDate = selectedItem.closest('.daily-history__list').dataset
    .date;
  const selectedItemKey = selectedItem.dataset.itemId;

  const storagedItem = storage.getDailyItem(
    new Date(selectedItemDate),
    selectedItemKey
  );
  return storagedItem;
};

const checkSubmitButtonActivation = () => {
  const $inputBarForm = $(SELECTOR.inputBarForm);
  const $submitButton = $(SELECTOR.submitButton);
  const {
    fullDate,
    moneyType,
    money,
    memo,
    payment,
    category,
    currentItemKey,
  } = $inputBarForm.elements;
  const [year, month, date] = [
    fullDate.value.slice(0, 4),
    fullDate.value.slice(4, 6),
    fullDate.value.slice(6),
  ];
  const updatedItem = {
    uuid: currentItemKey.value,
    date: new Date(`${year}-${month}-${date}`).toISOString(),
    isIncomeMoney: moneyType.checked ? true : false,
    money: Number(money.value.replaceAll(',', '')),
    memo: memo.value,
    payment: payment.value,
    category: category.value,
  };

  if (!currentItemKey.value) {
    isAllInputFilled({ fullDate, money, memo, payment, category })
      ? ($submitButton.disabled = false)
      : ($submitButton.disabled = true);
    return;
  }

  if (currentItemKey.value) {
    const storagedItem = getSelectedItem();
    isModified(updatedItem, storagedItem)
      ? ($submitButton.disabled = false)
      : ($submitButton.disabled = true);
  }
};

const isModified = (before, after) => {
  const before_sort = Object.keys(before)
    .sort()
    .reduce((obj, key) => ((obj[key] = before[key]), obj), {});
  const after_sort = Object.keys(after)
    .sort()
    .reduce((obj, key) => ((obj[key] = after[key]), obj), {});
  return JSON.stringify(before_sort) !== JSON.stringify(after_sort);
};

const isAllInputFilled = ({ fullDate, money, memo, payment, category }) => {
  const updatedItemValues = [
    fullDate.value,
    money.value,
    memo.value,
    payment.value,
    category.value,
  ];
  return updatedItemValues.every((val) => !!val === true);
};

export const resetInputBar = () => {
  $(SELECTOR.inputBarForm).reset();
  $(SELECTOR.submitButton).disabled = true;
  initDateInput(new Date());
};

const validateDateValue = ({ target }) => {
  const dateValue = target.value;
  if (!REGEX.dateFormat.test(dateValue)) {
    // TODO: 잘못된 형식 입력 시 유저에게 안내하는 UI 추가하기
    // const errorMessage = createNode('span');
    // errorMessage.textContent = '잘못된 형식을 입력하셨습니다.';
    // target.after(errorMessage);
    target.focus();
  }
};

const formatMoneyValue = ({ target }) => {
  let moneyValue = target.value;
  moneyValue = Number(moneyValue.replaceAll(',', ''));
  if (!moneyValue || isNaN(moneyValue)) return (target.value = '');
  target.value = moneyValue.toLocaleString('ko-KR');
};

const toggleDropdown = ({ target }) => {
  const dropdown = target.nextElementSibling;
  toggleActiveClass(dropdown);
};

const changeSelectedOption = ({ target }) => {
  const targetElement = `${SELECTOR.inputOption} > span`;
  if (!target.matches(targetElement)) return;

  const spanText = target.textContent;
  const inputOption = target.closest(
    SELECTOR.inputBarDropdown
  ).previousElementSibling;

  inputOption.value = spanText;
};
