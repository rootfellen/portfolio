import React from "react";
import cl from "./Work.module.css";
import { AiFillGithub, AiOutlineRead } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";

const Work = (props) => {
  return (
    <div className={cl.work}>
      <div className={cl.workImage}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={cl.workContainer}>
        <div className={cl.workInfo}>
          <h2 className={cl.workTitle}>{props.title}</h2>
          <p className={cl.workDescription}>{props.description}</p>
          <ul className={cl.workLinks}>
            <li>
              <a target="_blank" rel="noreferrer" href={props.github}>
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a rel="noreferrer" href={props.live}>
                <MdWeb />
              </a>
            </li>
            <li key={props.id}>
              <Link name={props.name} to={"/work-description/" + props.id}>
                <AiOutlineRead />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
