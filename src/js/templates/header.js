export const MONTH_YEAR_TEMPLATE = `
<div class="month-year__carousel">
<button type="button">
  <img
    src="./src/assets/icon/chevron-left.svg"
    alt="previous month" />
</button>
<div class="month-year__content">
  <span id="year" class="year bold-small">9999</span>
  <span id="monthNumber" class="month-number display-large">2</span>
  <span id="monthChar" class="month-char bold-small">February</span>
</div>
<button type="button">
  <img src="./src/assets/icon/chevron-right.svg" alt="next month" />
</button>
</div>
`;

export const LOGO_TEMPLATE = `
<h1 id="logo" class="display-small">
  <a href="/">
    <span>Wise</span>
    <span>Wallet</span>
  </a>
</h1>
`;

export const NAV_TEMPLATE = `
<nav id="tab">
  <h2 class="sr-only">페이지 탭</h2>
  <ul>
    <li>
      <a href="/"
        ><img src="./src/assets/icon/doc.svg" alt="main page"
      /></a>
    </li>
    <li>
      <a href="/calendar"
        ><img src="./src/assets/icon/calendar.svg" alt="calendar page"
      /></a>
    </li>
    <li>
      <a href="/chart"
        ><img src="./src/assets/icon/chart.svg" alt="chart page"
      /></a>
    </li>
  </ul>
</nav>
`;
