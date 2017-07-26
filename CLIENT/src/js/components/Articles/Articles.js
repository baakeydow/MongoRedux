import React from "react";
import './css/Article.css';

export default class Articles extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="col-md-4 Articles">
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a className="btn btn-info" href="#">More Info</a>
      </div>
    );
  }
}
