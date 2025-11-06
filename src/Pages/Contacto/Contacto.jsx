import React, { useState } from 'react';
import './Contacto.css';
// Importamos los íconos de Material Design y Bootstrap
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { BsWhatsapp, BsInstagram, BsFacebook, BsClock } from 'react-icons/bs';

const Contacto = () => {
  // Estado para manejar los inputs del formulario
//   const [formData, setFormData] = useState({
//     nombre: '',
//     email: '',
//     telefono: '',
//     mensaje: ''
//   });

//   // Función para manejar cambios en los inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Función para manejar el envío del formulario
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí iría la lógica para enviar el formulario
//     // (Ej: a un backend, un servicio como EmailJS, etc.)
//     console.log('Datos del formulario:', formData);
//     alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    
//     // Limpiar el formulario
//     setFormData({
//       nombre: '',
//       email: '',
//       telefono: '',
//       mensaje: ''
//     });
//   };

  return (
    <div className="contacto-container">
      <div className="contacto-header">
        <h1>Contactate con nosotros</h1>
        <p>Estamos aquí para ayudarte. Dejanos tu consulta y te responderemos a la brevedad.</p>
      </div>

      <div className="contacto-main">
        {/* Columna Izquierda: Información de Contacto y Mapa */}
        <div className="contacto-info">
          <h2>Información de Contacto</h2>
          
          <div className="info-item">
            <MdLocationOn className="info-icon" />
            <div>
              <strong>Nuestra ubicación</strong>
              {/* Hice el link para que abra Google Maps con la dirección */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Belgrano+4397+Planta+Alta+Unidad+5" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Belgrano 4397, Planta Alta, Unidad 5
              </a>
              <p>San Miguel de Tucumán, Tucumán</p>
            </div>
          </div>
          <div className="info-item">
          <BsClock className="info-icon" />
            <div>
              <strong>Nuestos horarios</strong>
              {/* Hice el link para que abra Google Maps con la dirección */}
              
              <p>Lunes a Viernes</p>
              <p>9 a 13h a y de 17 a 21h</p>
            </div>
          </div>

          <div className="info-item">
            <MdEmail className="info-icon" />
            <div>
              <strong>Nuestro correo</strong>
              <a href="mailto:mutualsuenoamarillo@gmail.com">
                mutualsuenoamarillo@gmail.com
              </a>
            </div>
          </div>

          <div className="info-item">
            <MdPhone className="info-icon" />
            <div>
              <strong>Llamanos</strong>
              {/* El prefijo +54 9 381 es para que funcione en celulares */}
              <a href="tel:+5493812116964">0381 211 6964</a>
            </div>
          </div>

          <div className="info-item">
            <BsWhatsapp className="info-icon" />
            <div>
              <strong>WhatsApp</strong>
              <a 
                href="https://wa.me/5493812116964" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                +54 9 381 211 6964
              </a>
            </div>
          </div>
          </div>
          <div className='contacto-info'>

          {/* Iconos de Redes Sociales */}
          <h2>Seguinos</h2>
          <div className="social-icons">
            <a href="URL_DE_TU_INSTAGRAM" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <BsInstagram />
            </a>
            <a href="URL_DE_TU_FACEBOOK" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <BsFacebook />
            </a>
          </div>

          {/* Mapa de Google (opcional pero recomendado) */}
          <div className="mapa-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.485981145324!2d-65.2396336849567!3d-26.82455988316131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225dcb5607311b%3A0x600f6063b455b578!2sBelgrano%204397%2C%20T4100%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1670000000000!5m2!1ses!2sar"
              width="450"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Mutual Sueño Amarillo"
            ></iframe>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        {/* <div className="contacto-form">
          <h2>Envianos un mensaje</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre y Apellido</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono (Opcional)</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="6"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contacto;