import React from "react";
import './css/Article.css';

export default class Articles extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="posts">
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <div className="buttonAlign">
            <a className="btn btn-info" href="#">More Info</a>
        </div>
      </div>
    );
  }
}
