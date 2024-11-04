import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import Inicio from '../components/inicio';
import Skills from '../components/skills';
import Proyects from '../components/proyects';
import Formacion from '../components/formacion';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simular un pequeño retardo para activar la animación
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Retardo de 200ms antes de iniciar las animaciones

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.containerTotal}>
      {/* Inicio */}
      <div className={isLoaded ? styles['fade-in-blur'] : ''}>
        <Inicio />
      </div>

      {/* Skills */}
      <br />
      <div className={isLoaded ? styles['fade-in-blur'] : ''}>
        <Skills />
      </div>

      {/* Proyectos */}
      <br />
      <div className={isLoaded ? styles['fade-in-blur'] : ''}>
        <Proyects />
      </div>

      {/* Formacion */}
      <br />
      <div className={isLoaded ? styles['fade-in-blur'] : ''}>
        <Formacion />
      </div>

      {/* Contacto y redes */}
      <br />
      <div className={isLoaded ? styles['fade-in-blur'] : ''}>
        <p>Formulario de Contacto y redes para contactar</p>
      </div>
    </div>
  );
};

export default HomePage;
