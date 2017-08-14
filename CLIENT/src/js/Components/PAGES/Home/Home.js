import React, { Component } from 'react';
import Data from '../../Data/Data';
import logo from './images/logo.svg';
import './css/Home.css';
import './css/index.css';

const Home = ({links, users, boss, wording}) => {
console.log(wording);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{wording.title} {boss}</h2>
      </div>
      <div className="Content">
          <h1>Users</h1>
          {users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
          <h1>Links</h1>
          {links.map(links =>
            <div key={links.id}>{links.url}</div>
          )}
          <div>
            <Data />
          </div>
      </div>
    </div>
  );
}

export default Home;
