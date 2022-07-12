import React from "react";
import "./Works.css";
import Logo from "../../Components/Logo/Logo";
import Socials from "../../Components/Socials/Socials";
import Navbar from "../../Components/Navbar/Navbar";
import Work from "../../Components/Work/Work";
import data from "../../assets/data/data";

const Works = () => {
  const works = data.map((work) => (
    <Work
      key={work.id}
      image={work.image}
      title={work.title}
      description={work.description}
      github={work.github}
      live={work.live}
      about={work.about}
    />
  ));
  return (
    <>
      <div className="worksContainer">
        <div className="container">
          <header className="header">
            <Logo />
            <Socials />
            <Navbar />
          </header>
          <div className="worksWrapper">{works}</div>
        </div>
      </div>
    </>
  );
};

export default Works;
