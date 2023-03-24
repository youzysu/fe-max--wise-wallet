import { headerEventHandler } from './Header/headerEventHandler.js';
import { headerView } from './Header/headerView.js';
import { inputBarEventHandler } from './InputBar/inputBarEventHandler.js';
import { inputBarView } from './InputBar/inputBarView.js';
import { monthlyHistoryView } from './MainPage/View/monthlyHistoryView.js';
import { storage } from './Storage.js';

export function App() {
  const currentDate = new Date();

  headerView(currentDate);
  headerEventHandler();

  mainPage(currentDate);
}

const mainPage = (currentDate) => {
  inputBarView(currentDate);
  inputBarEventHandler();
  renderMain(currentDate);
};

export const renderMain = (updateDate) => {
  const curMonthlyHistory = storage.getMonthlyHistory(updateDate);
  monthlyHistoryView(curMonthlyHistory);
};
