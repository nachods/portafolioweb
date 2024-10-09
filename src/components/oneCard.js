import React from 'react';
import styles from "../pages/HomePage.module.css";

const oneCard = (props) => {
  return (
    <div className={styles.OneCard}>
          <img className={styles.OneCardImg} src={props.img} alt={`${props.name}`} />
          <div className={styles.OneCardTxt}>
            <a href={props.link} target='blank'><h3>{props.name}</h3></a>
            <p>{props.desc}</p>
            <div className={styles.OneCardIcons}>
              <img src={props.icon1} alt='icon1.png'/>
              <img src={props.icon2} alt='icon2.png'/>
              <img src={props.icon3} alt='icon3.png'/>
              <img src={props.icon4} alt='icon4.png'/>
              <img src={props.icon5} alt='icon5.png'/>
              <img src={props.icon6} alt='icon6.png'/>
            </div>
          </div>
        </div>
  )
}

export default oneCard