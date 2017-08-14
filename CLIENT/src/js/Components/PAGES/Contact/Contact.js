import React from "react";
import './css/Contact.css';

const Contact = ({ wording }) => {

  return (
    <div className="container">
      <div className="Content title">
        <h3>{wording.title}</h3>
      </div>
     </div>
  );
}
export default Contact
