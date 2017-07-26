import React from "react";
import { Link } from "react-router";

import Nav from "../components/Layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "40px"
    };
    return (
      <div style={containerStyle}>
        <Nav location={location} />
      </div>
    );
  }
}
