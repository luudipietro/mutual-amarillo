import React, {NavLink} from "react";
import hero from "../../assets/hero_4.jpg";
import "./Turismo.css";
import { BsWhatsapp, BsInstagram, BsFacebook, BsClock } from 'react-icons/bs';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Turismo = () => {
  const mensajepredefinido = "Hola! Quisiera saber precios y destinos que ofrece la Mutual Sueño Amarillo"
  return (
    <div>
      <section className="turismo" style={{ backgroundImage: `url(${hero})` }}>
        <div className="turismo__container">
          <h1>Viaja con la mutual Sueño Amarillo</h1>
          <p>30 Años de experiencia nos avalan.</p>
          <p>Los mejores destinos, al mejor precio.</p>
        </div>
      </section>
      <section className="turismo_info">
        <div>
          <p>
            Descubrí una nueva forma de viajar. En Mutual Sueño Amarillo creemos
            que cada viaje es una oportunidad para crear recuerdos, compartir
            momentos en familia y disfrutar sin preocupaciones. Por eso,
            acompañamos tus experiencias con descuentos exclusivos, precios
            accesibles, paquetes pensados para vos, financiación flexible y
            seguros que te brindan tranquilidad en todo momento.
          </p>
          {/* <p>
            Además, al afiliarte a nuestra mutual —un espacio abierto para
            cualquier persona que desee ser parte— podés acceder a beneficios
            únicos y formar parte de una comunidad que viaja, crece y sueña
            junta.
          </p>
          <p>
            Viví tus próximos destinos con el respaldo de quienes te acompañan desde el primer paso.
          </p> */}
          <strong>
            Tu nueva aventura empieza acá.
          </strong>
        </div>
        <div className="buttons">
          <a className="button email" href="mailto:mutualsuenoamarillo@gmail.com">
            Contactate por email
            <MdEmail className="turismo__email-icon" />
                        
          </a>
  
          <a className="button whatsapp" 
                href={"https://wa.me/5493812116964?text="+ mensajepredefinido}
                target="_blank" 
                rel="noopener noreferrer">
            Contactate por WhatsApp
            <BsWhatsapp className="turismo__wp-icon" />
                        
          </a>
        </div>
      </section>
    </div>
  );
};

export default Turismo;
