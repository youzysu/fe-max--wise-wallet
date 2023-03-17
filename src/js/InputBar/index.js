import { CLASS_SELECTOR } from '../constant.js';
import { $, $all } from '../utils.js';
import { dateEventHandler } from './dateEventHandler.js';
import { dropdownClickHandler } from './dropdownClickHandler.js';
import { moneyCheckboxClickHandler } from './moneyCheckboxClickHandler.js';
import { moneyInputHandler } from './moneyInputHandler.js';
import { selectboxClickHandler } from './selectboxClickHandler.js';
import { submitButtonHandler } from './submitButtonHandler.js';

export function InputBar() {
  const $inputBarDropdowns = $all(CLASS_SELECTOR.inputBarDropdown);
  dropdownClickHandler($inputBarDropdowns);
  moneyCheckboxClickHandler();
  selectboxClickHandler();
  moneyInputHandler();
  dateEventHandler();
  submitButtonHandler();

  const $inputBarForm = $(CLASS_SELECTOR.inputBarForm);
}
