import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import App from './js/components/App/App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
  <div>
    <App />
  </div>
</Provider>, app);
registerServiceWorker();
