import { App } from './App.js';
import { $ } from './utils/dom.js';

const $App = $('#App');
const app = new App({ $App });
app.render();
