import React from 'react';
import styles from '../pages/HomePage.module.css';

const proyects = () => {
  return (
    <div className={styles.containerProyects}>
      <h2>Do you like what you're seeing? Let's continue with the projects and jobs in which I was part</h2>
      <div className={styles.subContainerFullStack}>
        <p>Full Stack Developer</p>
      </div>
      <div className={styles.subContainerMkt}>
        <p>Digital Marketing</p>
      </div>
    </div>
  )
}

export default proyects