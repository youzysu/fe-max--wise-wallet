import { header } from './Components/header.js';
import { monthlyHistoryView } from './MainPage/History/monthlyHistoryView.js';
import { inputBarEventHandler } from './MainPage/InputBar/inputBarEventHandler.js';
import { inputBarView } from './MainPage/InputBar/inputBarView.js';
import { storage } from './Storage.js';

export function App() {
  const currentDate = new Date();
  header(currentDate);

  // TODO: Route에 따라 페이지 렌더링하기
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
