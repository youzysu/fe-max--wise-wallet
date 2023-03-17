import { EVENT, ID_SELECTOR, REGEX } from '../constant.js';
import { $ } from '../utils.js';

export const dateEventHandler = () => {
  const $dateInput = $(ID_SELECTOR.dateInput);

  $dateInput.addEventListener(EVENT.blur, ({ target }) =>
    validateDateValue({ target })
  );
};

const validateDateValue = ({ target }) => {
  const dateValue = target.value;
  if (!REGEX.dateFormat.test(dateValue)) target.focus();
};
