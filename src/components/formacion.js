import React from "react";
import styles from "../pages/HomePage.module.css";
import CiberSeguridad from "../assets/images/certifcados/Ciber_Seguridad_page-0001.jpg";
import CommunnityMg from "../assets/images/certifcados/Community_Manager_page-0001.jpg";
import Ecommerce from "../assets/images/certifcados/Ecommerce_page-0001.jpg";
import AgenteDeVentas from '../assets/images/certifcados/Agentes_De_Ventas_Digitales_page-0001.jpg';
import Digitalizate from '../assets/images/certifcados/Diploma_Digitalizate_page-0001.jpg';
import DigitalizatePro from '../assets/images/certifcados/Diploma BAM_page-0001.jpg';
import OneCardAcademic from "./oneCardAcademic.js";

const Formacion = () => {
  return (
    <div className={styles.containerFormacion}>
      <h2>Academic Training</h2>
      <OneCardAcademic
        src={CiberSeguridad}
        name={"Cybersecurity"}
        desc={"October 2022 - UNL (Santa Fe)"}
      />
      <OneCardAcademic
        src={CommunnityMg}
        name={"Community Manager"}
        desc={"February 2023 - Aeprosome"}
      />
      <OneCardAcademic
        src={Ecommerce}
        name={"Increase your business with digital sales"}
        desc={"March 2023 - Ie University"}
      />
      <OneCardAcademic
        src={AgenteDeVentas}
        name={"Digital sales agent"}
        desc={"March 2023 - Carlos Slim"}
      />
      <OneCardAcademic
        src={Digitalizate}
        name={"E-commerce and Mkt"}
        desc={"August 2023 - Carlos Slim"}
      />
      <OneCardAcademic
        src={DigitalizatePro}
        name={"BA Multiplies"}
        desc={"December 2023 - Carlos Slim"}
      />
    </div>
  );
};

export default Formacion;
