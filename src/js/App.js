import { Header } from './components/Header.js';
import { MainPage } from './pages/MainPage.js';
import { getCurrentDate } from './utils/getCurrentDate.js';

export class App {
  constructor($App) {
    this.$App = $App;
    this.init();
  }

  init() {
    const header = new Header(this.$App);
    const { year, monthNumber, monthChar } = getCurrentDate();
    header.initMonthYear({ year, monthNumber, monthChar });

    const $main = document.createElement('main');
    this.$App.appendChild($main);

    const mainPage = new MainPage($main);
  }
}
