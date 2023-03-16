import { CLASS_SELECTOR, EVENT } from '../constant.js';
import { $all, toggleActiveClass } from '../utils.js';

export const dropdownClickHandler = () => {
  const $inputBarDropdowns = $all(CLASS_SELECTOR.inputBarDropdown);

  $inputBarDropdowns.forEach((element) => {
    element.addEventListener(EVENT.click, ({ target }) => {
      changeSelectedOption({ target });
      toggleActiveClass(element);
    });
  });
};

const changeSelectedOption = ({ target }) => {
  const targetElement = `${CLASS_SELECTOR.inputOption} > span`;
  if (!target.matches(targetElement)) return;

  const spanText = target.textContent;
  const inputOption = target.closest(
    CLASS_SELECTOR.inputBarDropdown
  ).previousElementSibling;

  inputOption.value = spanText;
};
