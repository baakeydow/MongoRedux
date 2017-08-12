import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './js/Components/store';
import App from './js/Components/App';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>, app);

if (module.hot) {
  module.hot.accept()
}

registerServiceWorker();
