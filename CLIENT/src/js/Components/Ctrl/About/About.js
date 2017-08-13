import React from "react";
import { connect } from "react-redux"
import { compose } from 'redux';

import About from "../../PAGES/About/About";

class AboutCtrl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.wording
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.wording});
  }

  render() {
    return (
      <About text={this.state.text}/>
    );
  }
}

export default compose(connect(state => ({
  text: state.text,
}))(AboutCtrl));
