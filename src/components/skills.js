import React from "react";
import styles from "../pages/HomePage.module.css";
import Bootstrap from "../assets/images/icons/bootstrap.png";
import CSS from "../assets/images/icons/css.png";
import Express from "../assets/images/icons/express-js.png";
import Git from "../assets/images/icons/git.png";
import GitHub from "../assets/images/icons/github.png";
import GoogleAnalytics from "../assets/images/icons/google-analytics.png";
import HTML from "../assets/images/icons/html.png";
import JavaScript from "../assets/images/icons/js.png";
import MetaAds from "../assets/images/icons/metaads.png";
import MongoDb from "../assets/images/icons/mongodb.png";
import NodeJS from "../assets/images/icons/nodejs.png";
import ReactJS from "../assets/images/icons/react.png";

const Skills = () => {
  return (
    <div className={styles.containerSkills}>
      <h2 className={styles.title2}>Skills</h2>
      <div className={styles.SubcontainerSkills}>
        <a href="https://developer.mozilla.org/en/docs/Web/HTML" target="blank">
          <img className={styles.imgIcons} src={HTML} alt="HTML.png" />
        </a>

        <a href="https://developer.mozilla.org/en/docs/Web/CSS" target="blank">
          <img className={styles.imgIcons} src={CSS} alt="CSS.png" />
        </a>

        <a href="https://getbootstrap.com/" target="blank">
          <img
            className={styles.imgIcons}
            src={Bootstrap}
            alt="Bootstrap.png"
          />
        </a>

        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="blank"
        >
          <img
            className={styles.imgIcons}
            src={JavaScript}
            alt="JavaScript.png"
          />
        </a>

        <a href="https://git-scm.com/" target="blank">
          <img className={styles.imgIcons} src={Git} alt="Git.png" />
        </a>

        <a href="https://github.com/" target="blank">
          <img className={styles.imgIcons} src={GitHub} alt="GitHub.png" />
        </a>

        <a href="https://es.react.dev/" target="blank">
          <img className={styles.imgIcons} src={ReactJS} alt="ReactJS.png" />
        </a>

        <a href="https://expressjs.com/" target="blank">
          <img className={styles.imgIcons} src={Express} alt="Express.png" />
        </a>

        <a href="https://www.mongodb.com/" target="blank">
          <img className={styles.imgIcons} src={MongoDb} alt="MongoDb.png" />
        </a>

        <a href="https://nodejs.org/" target="blank">
          <img className={styles.imgIcons} src={NodeJS} alt="NodeJS.png" />
        </a>

        <a href="https://developers.google.com/analytics?hl=en" target="blank">
          <img
            className={styles.imgIcons}
            src={GoogleAnalytics}
            alt="GoogleAnalytics.png"
          />
        </a>

        <a href="https://business.meta.com/" target="blank">
          <img className={styles.imgIcons} src={MetaAds} alt="MetaAds.png" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
