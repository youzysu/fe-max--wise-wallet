import { Header } from './components/Header.js';

export class App {
  constructor({ $App }) {
    this.$App = $App;
  }

  render() {
    const header = new Header(this.$App);
    header.render();
  }
}
