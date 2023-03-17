import { dateEventHandler } from './dateEventHandler.js';
import { dropdownClickHandler } from './dropdownClickHandler.js';
import { moneyCheckboxClickHandler } from './moneyCheckboxClickHandler.js';
import { moneyInputHandler } from './moneyInputHandler.js';
import { selectboxClickHandler } from './selectboxClickHandler.js';
import { submitButtonActivationHandler } from './submitButtonActivationHandler.js';

export function InputBar() {
  dropdownClickHandler();
  moneyCheckboxClickHandler();
  selectboxClickHandler();
  moneyInputHandler();
  dateEventHandler();
  submitButtonActivationHandler();
}
