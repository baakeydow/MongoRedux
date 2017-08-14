import React, { Component } from 'react';
import { connect } from "react-redux"
import { compose } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  HashRouter
} from 'react-router-dom';

import Layout from "./Layout/Layout";

import HomeCtrl from "./Ctrl/Home/Home";
import AboutCtrl from "./Ctrl/About/About";
import ContactCtrl from "./Ctrl/Contact/Contact";
import ArticlesCtrl from "./Ctrl/Articles/Articles";
import Data from "./Data/Data";

import { getLg } from "./XINIT/wordingActions";
import { fetchUser } from "./Data/actions/userActions";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wording: {},
      lang: 'EN',
      users: [],
      links: []
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
    this.setState({
        wording: this.props.lang.wording,
        lang: this.props.lang.lang
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    console.log(nextProps);
  }

  componentDidMount() {
      console.log('Mounted !!!! Start');
      console.log(this.props);
      console.log(this.state);
      console.log('Mounted !!!! End');
  }

  changeLang() {
    const lang = this.props.lang.lang === "EN" ? "FR" : "EN";
    console.log(this.props.lang.lang);
    this.props.dispatch(getLg(lang));
    this.setState({
        wording: this.props.lang.wording,
        lang: this.props.lang.lang
    });
  }

  render() {
    console.log('Render Start');
    console.log(this.state);
    console.log(this.props);
    console.log('Render End');
    return (
          <Router history={HashRouter}>
            <switch>
              <Route path='/' render={routeProps => <Layout {...routeProps} lang={this.state.lang} wording={this.state.wording} onChange={this.changeLang}/>} />
              <Route path='/home' render={routeProps => <HomeCtrl {...routeProps}  me={this.props.user.name} users={this.state.users} links={this.state.links} wording={this.state.wording.home}/>} />
              <Route path='/about' render={routeProps => <AboutCtrl {...routeProps} wording={this.state.wording.about}/>} />
              <Route path='/contact' render={routeProps => <ContactCtrl {...routeProps} wording={this.state.wording.contact}/>} />
              <Route path="/articles" component={ArticlesCtrl}/>
              <Route path="/data" component={Data}/>
            </switch>
          </Router>
      );
  }
}

export default compose(connect(state => ({
  wording: state.wording,
  lang: state.lang,
  users: state.user,
  links: state.links,
  user: state.user.user
}))(App));
