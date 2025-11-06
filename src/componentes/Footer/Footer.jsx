import React from "react";
import Logo from "../../assets/logo_mutual_sin_fondo.jpg";
import Ul_redes from "../Ul_redes/Ul_redes";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo">
          <img
            src={Logo}
            alt="Logo de la mutual sueño amarillo"
            className="footer__logo__img"
          />
          <div className="footer__texto">
            <p>
              La Mutual Sueño Amarillo es un proyecto que une voluntades.
              Nuestro compromiso es seguir creciendo junto a quienes confían en
              nosotros, ofreciendo herramientas que mejoren la calidad de vida,
              impulsen el desarrollo social y promuevan la participación activa
              de todos. Ser parte de la mutual es formar parte de un proyecto
              compartido, donde el bienestar colectivo es el verdadero objetivo.
            </p>
          </div>
          
        </div>

        <div className="footer__contacto">
          <div className="footer__contacto__div">
            <i className="bi bi-envelope"></i>
            <div>
              <p>Nuestro correo</p>
              <p>mutualsuenoamarillo@gmail.com</p>
            </div>
          </div>
          <div className="footer__contacto__div">
            <i className="bi bi-geo-alt"></i>
            <div>
              <p>Nuestra ubicación</p>
              <a href="https://maps.app.goo.gl/BnNL3Uqj6ATi4sqv6" target="_blank" rel="noopener noreferrer"> Belgrano 4397 Planta Alta Unidad 5</a>
            </div>
          </div>
          <div className="footer__contacto__div">
            <i className="bi bi-telephone"></i>
            <div>
              <p>Llamanos</p>
              <p>0381 211 6964</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="footer__redes">
            <Ul_redes nombre_clase="footer_redes" />
          </div>
    </footer>
  );
};

export default Footer;
