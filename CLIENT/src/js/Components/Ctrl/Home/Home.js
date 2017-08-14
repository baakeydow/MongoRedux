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
      links: this.props.links,
      wording: this.props.wording
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      me: nextProps.me,
      users: nextProps.users,
      links: nextProps.links,
      wording: nextProps.wording ? nextProps.wording : this.props.wording
    });
  }

  componentDidMount() {
    console.log('HOME CTRL MOUNTED !!!!');
  }

  render() {
    return (
        <Home links={this.state.links} users={this.state.users} boss={this.state.me} wording={this.state.wording}/>
    );
  }
}
