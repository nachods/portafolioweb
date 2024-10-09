import React from 'react';
import styles from "../pages/HomePage.module.css";

const oneCardMkt = (props) => {
  return (
    <div className={styles.OneCard}>
          <img className={styles.OneCardImg} src={props.img} alt={`${props.name}`} />
          <div className={styles.OneCardTxt}>
            <a href={props.link} target='blank'><h3>{props.name}</h3></a>
            <p>{props.desc}</p>
          </div>
        </div>
  )
}

export default oneCardMkt