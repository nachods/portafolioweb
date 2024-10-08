import React from 'react';
import styles from './HomePage.module.css';
import Inicio from '../components/inicio';
import Skills from '../components/skills';

const HomePage = () => {
  return (
    <div className={styles.containerTotal}>
      {/* Inicio */}
      <Inicio />
      {/* Skills */}
      <br/>
      <Skills/>
      {/* Proyectos */}
      <br/>
      <p>Lista de Proyectos</p>
      {/* Contacto y redes */}
      <br/>
      <p>Formulario de Contacto y redes para contactar</p>
    </div>
  )
};

export default HomePage;