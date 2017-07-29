import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  HashRouter
} from 'react-router-dom';
import App from './js/components/App/App';

import Archives from "./js/pages/Archives";
import Featured from "./js/pages/Featured";
import Layout from "./js/pages/Layout";
import Settings from "./js/pages/Settings";

import store from './store';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
    <Router history={HashRouter}>
      <switch>
        <Route path="/" component={Layout}/>
        <Route exact path="/"  component={App}/>
        <Route path="/archives" name="archives" component={Featured}/>
        <Route path="/settings" name="settings" component={Settings}/>
        <Route component={Layout}/>
      </switch>
    </Router>
</Provider>, app);
registerServiceWorker();
