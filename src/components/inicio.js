import React from "react";
import styles from "../pages/HomePage.module.css";
import LogoGif from "../assets/images/logoGiF.gif";
import CV from '../assets/files/Cv_Ignacio_De_Simone.pdf';

const Inicio = () => {
  return (
    <>
      <div className={styles.containerInicio}>
        <div className={styles.subContainer}>
          <h1 className={styles.title}>Ignacio De Simone</h1>
          <p className={styles.subtitle}>
            Full Stack Developer & Digital Marketing
          </p>
          <a href={CV} download className={styles.downloadButton}>
            Download CV
          </a> 
        </div>
        <img className={styles.logo} src={LogoGif} alt="logo.gif" />
      </div>
      <p className={styles.text}>
      I’m thrilled to have you here. Explore my profile, discover the projects I’ve worked on, and if you’re looking for collaboration or have a challenge in mind, don’t hesitate to reach out—let’s create something great together!
      </p>
    </>
  );
};

export default Inicio;
