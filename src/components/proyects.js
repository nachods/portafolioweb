import React from "react";
import styles from "../pages/HomePage.module.css";
import OneCard from "./oneCard";
import OneCardMkt from './oneCardMkt.js';
import SweetBakery from "../assets/images/pictures/SweetBakery.PNG";
import SweetBakeryIG from "../assets/images/pictures/SweetBakeryIG.PNG";
import SaboresDeItalia from "../assets/images/pictures/SaboresDeItalia.PNG";
import DiagrammaSA from '../assets/images/pictures/Diagramma.PNG';
import Bootstrap from "../assets/images/icons/bootstrap.png";
import CSS from "../assets/images/icons/css.png";
import Git from "../assets/images/icons/git.png";
import GitHub from "../assets/images/icons/github.png";
import MongoDb from "../assets/images/icons/mongodb.png";
import ReactJS from "../assets/images/icons/react.png";

const proyects = () => {
  return (
    <div className={styles.containerProyects}>
      <h2>
        Do you like what you're seeing? Let's continue with the projects and
        jobs in which I was part
      </h2>
      <p className={styles.titleFS}>Full Stack Developer</p>
      <div className={styles.subContainerFullStack}>
          <OneCard
            img={SweetBakery}
            name="Sweet Bakery"
            link="https://sweetbbakery.netlify.app/"
            desc="Website that has a backend where products are uploaded, which can only be done by the administrator of the same venture"
            icon1={ReactJS}
            icon2={CSS}
            icon3={Bootstrap}
            icon4={Git}
            icon5={GitHub}
            icon6={MongoDb}
          />
          <OneCard
            img={SaboresDeItalia}
            name="Sabores de Italia"
            link="https://saboresdeitalia.netlify.app/"
            desc="Final project of the Full Stack Developer degree in which an Italian restaurant is imitated"
            icon1={ReactJS}
            icon2={CSS}
            icon3={Bootstrap}
            icon4={Git}
            icon5={GitHub}
            icon6={MongoDb}
          />
      </div>
      <p className={styles.titleFS}>Digital Marketing</p>
      <div className={styles.subContainerFullStack}>
        <OneCardMkt
          img = {DiagrammaSA}
          name = 'Internship at DiagrammaSA'
          link = 'https://diagramma.com.ar/'
          desc = 'The internship at Diagramma lasted 6 months (07/24 - 12/24) where I developed tasks related to the field of market research for the incorporation of a new product into commerce.'
        />
        <OneCardMkt
          img = {SweetBakeryIG}
          name = 'Sweet Bakery'
          link = 'https://www.instagram.com/_sweetbbakery/'
          desc = 'Instagram and the only social network where family business focuses on selling their products'
        />
      </div>
    </div>
  );
};

export default proyects;
