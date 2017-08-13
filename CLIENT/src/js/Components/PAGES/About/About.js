import React from "react";

const About = ({text}) => {
    const containerStyle = {
       margin: "100px"
    };
    return (
      <div style={containerStyle}>
        <h1>{text.title}</h1>
      </div>
    );
}

export default About;
