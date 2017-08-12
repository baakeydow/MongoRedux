import React, { Component } from 'react';
import Data from '../../Data/Data';
import logo from './images/logo.svg';
import './css/Home.css';
import './css/index.css';

class Home extends Component {
  state = {users: [], links: [], posts: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch('/links')
      .then(res => res.json())
      .then(links => this.setState({ links }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Home to MongoRedux</h2>
        </div>
        <div className="Content">
            <h1>Users</h1>
            {this.state.users.map(user =>
              <div key={user.id}>{user.username}</div>
            )}
            <h1>Links</h1>
            {this.state.links.map(links =>
              <div key={links.id}>{links.url}</div>
            )}
            <div>
              <Data />
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
