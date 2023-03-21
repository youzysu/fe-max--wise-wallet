import { EVENT, REGEX, SELECTOR } from '../constant.js';
import { $, $all, toggleActiveClass } from '../utils.js';
import { changeCategoryList } from './event/changeCategoryList.js';
import { checkSubmitButtonActivation } from './event/checkSubmitButtonActivation.js';
import { formSubmitHandler } from './event/formSubmitHandler.js';

export function inputBarEventHandler() {
  const $inputBarDropdowns = $all(SELECTOR.inputBarDropdown);
  const $moneyTypeCheckbox = $(SELECTOR.moneyCheckbox);
  const $paymentInput = $(SELECTOR.paymentInput);
  const $categoryInput = $(SELECTOR.categoryInput);
  const $moneyInput = $(SELECTOR.moneyInput);
  const $dateInput = $(SELECTOR.dateInput);
  const $inputBarForm = $(SELECTOR.inputBarForm);

  $inputBarDropdowns.forEach((dropdown) => {
    dropdown.addEventListener(EVENT.click, ({ target }) => {
      changeSelectedOption({ target });
      toggleActiveClass(dropdown);
      checkSubmitButtonActivation();
    });
  });

  $moneyTypeCheckbox.addEventListener(EVENT.click, ({ target }) => {
    changeCategoryList(target);
  });

  $paymentInput.addEventListener(EVENT.click, ({ target }) =>
    toggleDropdown({ target })
  );
  $categoryInput.addEventListener(EVENT.click, ({ target }) =>
    toggleDropdown({ target })
  );

  $moneyInput.addEventListener(EVENT.input, ({ target }) =>
    formatMoneyValue({ target })
  );

  $dateInput.addEventListener(EVENT.blur, ({ target }) =>
    validateDateValue({ target })
  );

  $inputBarForm.addEventListener(EVENT.change, checkSubmitButtonActivation);
  $inputBarForm.addEventListener(EVENT.submit, formSubmitHandler);
}

const validateDateValue = ({ target }) => {
  const dateValue = target.value;
  if (!REGEX.dateFormat.test(dateValue)) target.focus();
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
