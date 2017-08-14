import React from "react";

import Contact from "../../PAGES/Contact/Contact";

export default class ContactCtrl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wording: this.props.wording
    };
  }

  componentWillMount() {
    this.state = {
      wording: this.props.wording
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      wording: nextProps.wording ? nextProps.wording : this.props.wording
    });
  }

  render() {
    return (
      <Contact wording={this.state.wording}/>
    );
  }
}
