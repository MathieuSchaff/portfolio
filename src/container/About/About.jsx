import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <h2>
          {" "}
          Who I am <span>?</span>{" "}
        </h2>
        <p>
          French guy, born in 1993. I worked in the french army, where I was the
          an IT guy.
        </p>
        <p>I was a system administrator there</p>
        <p>
          I learned a lot about system administration, network administration,
          security, and the IT world. But I prefered doing website development.
        </p>
      </div>
      <div className="about">
        <h2> About me</h2>
        <p>
          I’m a self-taught Front-End Developer located in France. I have a
          serious passion for UI effects, animations and creating intuitive,
          dynamic user experiences.
        </p>

        <p>
          Interested in the entire frontend spectrum, I’m always looking for new
          challenges and opportunities to learn new things.! <br></br>I am also
          passionate about blockchain technology.
        </p>
        <p>
          In my free time, apart from coding, I like traveling, meeting new
          people, and scuba diving.
        </p>
      </div>
    </>
  );
};

export default About;
