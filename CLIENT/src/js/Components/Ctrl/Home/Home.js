import React from "react";

import Home from "../../PAGES/Home/Home";

export default class Homectrl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    this.state = {
      me: this.props.me,
      users: this.props.users,
      links: this.props.links
    };
  }

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    // console.log(this.state);
    return (
        <Home links={this.state.links} users={this.state.users} boss={this.state.me}/>
    );
  }
}
