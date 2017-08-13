import React from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      wording: props.navProps.lang.wording
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState(
            {
              collapsed,
              wording: this.props.navProps.lang.wording
            }
        );
  }
  componentWillReceiveProps(nextProps) {
    this.setState({wording: this.props.navProps.lang.wording});
  }


  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    const navStyle = {
        backgroundColor: "#282c37"
    };
    const spanStyle = {
        display: "block",
        height: "8px"
    };
    const buttonStyle = {
      margin: "0 50px 0 20px"
    };
    const wording = this.state.wording;
    const lang = this.props.navProps.lang.lang === 'EN' ? "FR" : "EN";
    return (
      <nav style={navStyle} className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <ul className="nav navbar-nav">
              <span style={spanStyle}></span>
              <button style={buttonStyle} className="btn btn-danger" onClick={this.props.changeLang.bind(this)}>{lang}</button>
            </ul>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={featuredClass}>
                <NavLink to="home" onClick={this.toggleCollapse.bind(this)}>{wording.home}</NavLink>
              </li>
              <li className={settingsClass}>
                <NavLink to="about" onClick={this.toggleCollapse.bind(this)}>{wording.about.title}</NavLink>
              </li>
              <li className={settingsClass}>
                <NavLink to="contact" onClick={this.toggleCollapse.bind(this)}>{wording.contact}</NavLink>
              </li>
              <li className={settingsClass}>
                <NavLink to="articles" onClick={this.toggleCollapse.bind(this)}>{wording.articles}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
