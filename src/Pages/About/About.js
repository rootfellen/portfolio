import React from "react";
import cl from "./About.module.css";
import Logo from "../../Components/Logo/Logo";
import Socials from "../../Components/Socials/Socials";
import Navbar from "../../Components/Navbar/Navbar";
import guy from "../../assets/img/guy.svg";

const About = () => {
  return (
    <>
      <div className={cl.aboutContainer}>
        <div className="container">
          <header className="header">
            <Logo />
            <Socials />
            <Navbar />
          </header>
          <div className={cl.about}>
            <div className={cl.guy}>
              <img src={guy} alt={guy} />
            </div>
            <p>
              Hello World! I am a creative{" "}
              <span className={cl.markup}>front-end developer</span> and web
              designer from Ukraine who's passionate about building digital
              experiences that inspire community. From organizing events for
              kids and taking care of newborns to lines of code on a web page.
              Yes, this is my journey. I have a Master's Degree in International
              Economics from Poltava University of Economics and Trade as well.
              I'm truly excited combining the worlds of logic and{" "}
              <span className={cl.markup}>creative</span> design to make
              eye-catching, accessible, and{" "}
              <span className={cl.markup}>user-friendly</span> websites and
              applications.
            </p>
            <p>
              Other than coding, I spend most of my free time doing sports,
              exploring WEB 3.0 features, NFT Market and Metaverse. 🤓 I've also
              been trying to read more so feel free to reach out to me with any
              book recommendations!
            </p>
            <p>
              {" "}
              Dear recruiter, if you reading this, I'm open to work. Drop me a
              line below. ↓
            </p>
            <span>
              <a href="mailto:rootfellenua@gmail.com">rootfellenua@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
