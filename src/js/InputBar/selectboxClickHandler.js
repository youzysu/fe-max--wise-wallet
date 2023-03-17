import { EVENT, ID_SELECTOR } from '../constant.js';
import { $, toggleActiveClass } from '../utils.js';

export const selectboxClickHandler = () => {
  const $paymentInput = $(ID_SELECTOR.paymentInput);
  const $categoryInput = $(ID_SELECTOR.categoryInput);

  $paymentInput.addEventListener(EVENT.click, ({ target }) =>
    toggleDropdown({ target })
  );
  $categoryInput.addEventListener(EVENT.click, ({ target }) =>
    toggleDropdown({ target })
  );
};

const toggleDropdown = ({ target }) => {
  const dropdown = target.nextElementSibling;
  toggleActiveClass(dropdown);
};
