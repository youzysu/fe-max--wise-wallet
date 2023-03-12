import { initDateInput } from './components/inputBar.js';
import { initCurrentDate } from './components/monthYearCarousel.js';
import { getCurrentTime } from './utils/getCurrentTime.js';

const App = () => {
  const { year, monthNumber, monthChar, date } = getCurrentTime();
  initCurrentDate({ year, monthNumber, monthChar });
  initDateInput({ year, monthNumber, date });
};

App();
