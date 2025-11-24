import React from 'react';
import {Link} from 'react-router-dom';
import './CardEmpresa.css';

const TarjetaComercio = ({ 
  imagen, 
  nombre, 
  servicio, 
  beneficio, 
  telefono, 
  instagram, 
  web,
  direccion // Nueva prop recibida
}) => {
  
  

  return (
    <div className='cardEmpresa'>
      <div className='imageContainer'>
        {/* Lógica: Si hay imagen úsala, sino usa una imagen por defecto genérica */}
        <img 
          src={imagen ? `../../public/images/${imagen}` : "https://via.placeholder.com/300x150?text=Sin+Imagen"} 
          alt={nombre} 
         className='image'
        />
      </div>

      <h3 className='title'>{nombre}</h3>
      <p className='service'>{servicio}</p>

      <div className='benefitBox'>
        <strong>Si formas parte de la Mutual Sueño Amarillo:</strong> {beneficio}
      </div>

      <div className='contactSection'>
        {direccion && <div>📍 {direccion}</div>}
        {telefono && <div>📞 {telefono}</div>}
        
        {instagram && (
          <div>
            📸 <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer" className='link'>
              @{instagram}
            </a>
          </div>
        )}

        {web && (
          <div>
            🌐 <a href={web} target="_blank" rel="noreferrer" className='link'>
              Sitio Web
            </a>
          </div>
        )}
      </div>
      <Link  className='boton_volver' to="/">Volver</Link>
    </div>
  );
};

export default TarjetaComercio;