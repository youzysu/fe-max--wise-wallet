import { HISTORY_TEMPLATE, INPUT_BAR_TEMPLATE } from '../templates/inputBar.js';

export class MainPage {
  constructor($main) {
    this.$main = $main;
    this.init();
  }

  init() {
    const $inputBar = INPUT_BAR_TEMPLATE;
    const $history = HISTORY_TEMPLATE;
    this.$main.innerHTML = `${$inputBar}${$history}`;
  }

  render() {}
}
