import React, { Component } from 'react';
import { connect } from "react-redux"
import { compose } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  HashRouter
} from 'react-router-dom';

import Layout from "./Layout/Layout";
import Data from "./Data/Data";

import HomeCtrl from "./Ctrl/Home/Home";
import AboutCtrl from "./Ctrl/About/About";
import ContactCtrl from "./Ctrl/Contact/Contact";
import Articles from "./Ctrl/Articles/Articles";

import { getLg } from "./XINIT/wordingActions"

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      users: [],
      links: [],
      lang: 'EN',
      wording: {}
    };
    this.changeLang = this.changeLang.bind(this);
  }

  componentWillMount() {
    console.log('WILL-MOUNT');
    console.log(this.state.lang);
    this.props.dispatch(getLg(this.state.lang));
    console.log('=======MOUNTING !===========');
  }

  componentDidMount() {
      this.state = {
        lang: this.props.lang.lang,
        wording: this.props.lang.wording
      };
      console.log('DID-MOUNT');
      console.log(this.state);
      console.log(this.props);
      console.log('=======MOUNTED !===========');
  }

  changeLang() {
    console.log(this.state);
    const lang = this.props.lang.lang === "EN" ? "FR" : "EN";
    this.props.dispatch(getLg(lang));
    this.setState({wording: this.props.lang.wording,
                  lang: this.props.lang.lang});
    console.log(this.state);
  }

  render() {
    return (
          <Router history={HashRouter}>
            <switch>
              <Route path='/' render={routeProps => <Layout {...routeProps} myProps={this.props} onChange={this.changeLang}/>} />
              <Route exact path="/"  component={HomeCtrl}/>
              <Route path="/about" component={AboutCtrl}/>
              <Route path="/contact" component={ContactCtrl}/>
              <Route path="/articles" component={Articles}/>
              <Route path="/data" component={Data}/>
            </switch>
          </Router>
      );
  }
}
              // <Route component={Articles}/>

export default compose(connect(state => ({
  users: state.user,
  links: state.links,
  lang: state.lang,
  wording: state.wording,
}))(App));
