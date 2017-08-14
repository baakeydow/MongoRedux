import React from "react";
import './css/About.css';

const About = ({ wording }) => {

    return (
    <div className="container">
      <div className="title">
        <h3>{wording.title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <div className="buttonAlignRight">
            <a className="btn btn-info" href="#">More Info</a>
        </div>
      </div>
     </div>
    );
}

export default About;
