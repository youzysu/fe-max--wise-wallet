import { HeaderEventHandler } from './Header/HeaderEventHandler.js';
import { HeaderView } from './Header/HeaderView.js';
import { InputBarEventHandler } from './InputBar/InputBarEventHandler.js';
import { InputBarView } from './InputBar/InputBarView.js';

export function App() {
  HeaderView();
  HeaderEventHandler();

  InputBarView();
  InputBarEventHandler();
}
