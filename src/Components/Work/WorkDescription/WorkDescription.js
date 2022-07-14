import React from "react";
import cl from "./WorkDescription.module.css";
import { useParams } from "react-router-dom";
import Logo from "../../Logo/Logo";
import Socials from "../../Socials/Socials";
import Navbar from "../../Navbar/Navbar";
import data from "../../../assets/data/data";

const WorkDescription = () => {
  const { id } = useParams();
  const workId = Number(id - 1);

  return (
    <div className={cl.workDescriptionContainer}>
      <header className="header">
        <Logo />
        <Socials />
        <Navbar />
      </header>
      <div
        style={{
          backgroundColor: id % 2 === 0 ? "aquamarine" : "lightsalmon",
        }}
        className={cl.workDescription}
      >
        <div className={cl.workDescriptionImage}>
          <img src={data[workId].imageBig} alt={"work"} />
        </div>
        <div className={cl.workDescriptionInfo}>
          <h1 className={cl.workTitle}>{data[workId].title}</h1>
          <p className={cl.workDescriptionText}>{data[workId].description}</p>
          <p className={cl.idea}>
            <span>Idea: </span>
            {data[workId].idea}
          </p>
          <p className={cl.features}>
            <span>Features: </span>
            {data[workId].features}
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default WorkDescription;
