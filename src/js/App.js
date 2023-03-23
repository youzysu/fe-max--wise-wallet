import { headerEventHandler } from './Header/headerEventHandler.js';
import { headerView } from './Header/headerView.js';
import { historyStorage } from './HistoryStorage/HistoryStorage.js';
import { inputBarEventHandler } from './InputBar/inputBarEventHandler.js';
import { inputBarView } from './InputBar/inputBarView.js';
import { monthlyHistoryView } from './MainPage/monthlyHistoryView.js';

export function App() {
  const currentDate = new Date();

  headerView();
  headerEventHandler();

  mainPage(currentDate);
}

const mainPage = (currentDate) => {
  inputBarView();
  inputBarEventHandler();
  renderMain(currentDate);
};

export const renderMain = (updateDate) => {
  const curMonthlyHistory = historyStorage.getMonthlyHistory(updateDate);
  monthlyHistoryView(curMonthlyHistory);
};
