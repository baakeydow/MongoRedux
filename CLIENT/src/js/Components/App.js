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

import { getLg } from "./XINIT/wordingActions";
import { fetchUser } from "./Data/actions/userActions";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      links: [],
      lang: 'EN',
      wording: {}
    };
    this.changeLang = this.changeLang.bind(this);
    this.props.dispatch(fetchUser());
    this.props.dispatch(getLg(this.state.lang));
    console.log('Constructed !!!!');
  }

  componentWillMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch('/links')
      .then(res => res.json())
      .then(links => this.setState({ links }));
  }

  changeLang() {
    const lang = this.props.lang.lang === "EN" ? "FR" : "EN";
    this.props.dispatch(getLg(lang));
    this.setState({wording: this.props.lang.wording});
  }

  render() {
    return (
          <Router history={HashRouter}>
            <switch>
              <Route path='/' render={routeProps => <Layout {...routeProps} myProps={this.props} onChange={this.changeLang}/>} />
              <Route path='/home' render={routeProps => <HomeCtrl {...routeProps} me={this.props.user.name} users={this.state.users} links={this.state.links}/>} />
              <Route path='/about' render={routeProps => <AboutCtrl {...routeProps} wording={this.props.lang.wording.about}/>} />
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
  user: state.user.user,
  users: state.user,
  links: state.links,
  lang: state.lang,
}))(App));
