import React from "react";
import Nav from "./Nav";

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    this.setState({onchange: this.props.onChange, myProps: this.props.myProps});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({myProps: this.props.myProps});
  }

  componentDidMount() {
    console.log('LAYOUT DID MOUNT !');
  }

  render() {
    const { location } = this.props;
    const wording = this.props.myProps;
    const containerStyle = {
      marginTop: "40px"
    };
    return (
      <div style={containerStyle}>
        <Nav location={location} changeLang={this.state.onchange} navProps={wording}/>
      </div>
    );
  }
}
