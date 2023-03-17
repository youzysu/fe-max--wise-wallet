import { dateEventHandler } from './dateEventHandler.js';
import { dropdownClickHandler } from './dropdownClickHandler.js';
import { moneyCheckboxClickHandler } from './moneyCheckboxClickHandler.js';
import { moneyInputHandler } from './moneyInputHandler.js';
import { selectboxClickHandler } from './selectboxClickHandler.js';
import { submitButtonHandler } from './submitButtonHandler.js';

export function InputBar() {
  dropdownClickHandler();
  moneyCheckboxClickHandler();
  selectboxClickHandler();
  moneyInputHandler();
  dateEventHandler();
  submitButtonHandler();
}
