import React from "react";
import styles from "../pages/HomePage.module.css";

const oneCardAcademic = (props) => {
  return (
    <>
      <div className={styles.subContainerFormacion}>
        <img
          className={styles.imgFormacion}
          src={props.src}
          alt={`${props.scr}.png`}
        />
        <div>
          <h4>{props.name}</h4>
          <p>{props.desc}</p>
          <a href={props.src} download className={styles.downloadButtonF}>
            Download Certificate
          </a>
        </div>
      </div>
    </>
  );
};

export default oneCardAcademic;
