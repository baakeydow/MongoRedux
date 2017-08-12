import React from "react";
import Nav from "./Nav";

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);
  }

  componentDidMount() {
    // this.setState({props: this.props});
    // console.log(this.props);
  }

  render() {
    const { location } = this.props;
    console.log(this.props.myProps);
    const containerStyle = {
      marginTop: "40px"
    };
    return (
      <div style={containerStyle}>
        <Nav location={location} changeLang={this.props.onChange} navProps={this.props.myProps}/>
      </div>
    );
  }
}
