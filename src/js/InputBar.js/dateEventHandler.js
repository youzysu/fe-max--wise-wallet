import { EVENT, ID_SELECTOR } from '../constant.js';
import { $ } from '../utils.js';

export const dateEventHandler = () => {
  const $dateInput = $(ID_SELECTOR.dateInput);

  $dateInput.addEventListener(EVENT.blur, ({ target }) =>
    validateDateValue({ target })
  );
};

const validateDateValue = ({ target }) => {
  const dateValue = target.value;
  const dateFormatReg = /^2\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])/;

  if (!dateFormatReg.test(dateValue)) target.focus();
};
