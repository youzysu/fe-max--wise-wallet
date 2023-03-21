import { headerEventHandler } from './Header/headerEventHandler.js';
import { headerView } from './Header/headerView.js';
import { inputBarEventHandler } from './InputBar/inputBarEventHandler.js';
import { inputBarView } from './InputBar/inputBarView.js';

export function App() {
  headerView();
  headerEventHandler();

  inputBarView();
  inputBarEventHandler();
}
