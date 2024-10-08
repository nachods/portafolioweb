import React from "react";
import styles from "../pages/HomePage.module.css";
import LogoGif from "../assets/images/logoGiF.gif";

const Inicio = () => {
  return (
    <>
      <div className={styles.containerInicio}>
        <div className={styles.subContainer}>
          <h1 className={styles.title}>Ignacio De Simone</h1>
          <p className={styles.subtitle}>
            Full Stack Developer & Digital Marketing
          </p>
        </div>
        <img className={styles.logo} src={LogoGif} alt="logo.gif" />
      </div>
      <p className={styles.text}>
        I am delighted to have you here, check out my profile, see my work and
        if you need something you know what to do!
      </p>
    </>
  );
};

export default Inicio;
