import {
  LOGO_TEMPLATE,
  MONTH_YEAR_TEMPLATE,
  NAV_TEMPLATE,
} from '../templates/header.js';

export class Header {
  constructor($app) {
    this.$app = $app;
  }

  render() {
    const $header = document.createElement('header');
    $header.setAttribute('class', 'header');
    this.makeHeaderInner($header);
    this.$app.appendChild($header);
  }

  makeHeaderInner(header) {
    const div = document.createElement('div');
    div.setAttribute('class', 'header__inner');

    const $logo = LOGO_TEMPLATE;
    const $navTab = NAV_TEMPLATE;
    const $monthYearCarousel = MONTH_YEAR_TEMPLATE;

    div.innerHTML = `${$logo}${$monthYearCarousel}${$navTab}`;
    header.appendChild(div);
  }
}
