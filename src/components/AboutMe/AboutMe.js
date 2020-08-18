import React from "react";
import portfolio1 from "../../utils/portfolio1.png";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={portfolio1} alt="profile_photo" className="img" />
        <h1>Douglas Maringa</h1>
        <div className="subtitle">
          <h3>I am a Front end web developer. I give life to designs</h3>
          <p>
            Creating Beautiful things with quality and elegance! <br />
            Experienced in Javascript and c#. My favourite technology is
            ReactJS
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
