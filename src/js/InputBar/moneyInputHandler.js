import { EVENT, ID_SELECTOR } from '../constant.js';
import { $ } from '../utils.js';

export const moneyInputHandler = () => {
  const $moneyInput = $(ID_SELECTOR.moneyInput);
  $moneyInput.addEventListener(EVENT.input, ({ target }) =>
    formatMoneyValue({ target })
  );
};

const formatMoneyValue = ({ target }) => {
  let moneyValue = target.value;
  moneyValue = Number(moneyValue.replaceAll(',', ''));
  if (!moneyValue || isNaN(moneyValue)) return (target.value = '');
  target.value = moneyValue.toLocaleString('ko-KR');
};
