import {
  LOGO_TEMPLATE,
  MONTH_YEAR_TEMPLATE,
  NAV_TEMPLATE,
} from '../templates/header.js';
import { $ } from '../utils/dom.js';

export class Header {
  constructor($app) {
    this.$app = $app;
    this.init();
  }

  init() {
    const $header = document.createElement('header');
    $header.setAttribute('class', 'header');

    const $headerInner = document.createElement('div');
    $headerInner.setAttribute('class', 'header__inner');

    const $logo = LOGO_TEMPLATE;
    const $monthYearCarousel = MONTH_YEAR_TEMPLATE;
    const $navTab = NAV_TEMPLATE;

    $headerInner.innerHTML = `${$logo}${$monthYearCarousel}${$navTab}`;

    $header.appendChild($headerInner);
    this.$app.appendChild($header);
  }

  initMonthYear({ year, monthNumber, monthChar }) {
    const $year = $('#year');
    const $monthNumber = $('#monthNumber');
    const $monthChar = $('#monthChar');

    $year.textContent = year;
    $monthNumber.textContent = monthNumber;
    $monthChar.textContent = monthChar;
  }

  render() {}
}
