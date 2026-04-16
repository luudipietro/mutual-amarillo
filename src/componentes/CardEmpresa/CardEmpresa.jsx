import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
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
  const navigate = useNavigate(); // 2. Inicializar el hook

  const irAlDetalle = () => {
    // Aquí puedes poner lógica extra si quieres
    navigate(`/`); // 3. Navegar a la ruta
  };
  

  return (
    <div className='cardEmpresa'>
      <div className='imageContainer'>
        {/* Lógica: Si hay imagen úsala, sino usa una imagen por defecto genérica */}
        <img 
          src={imagen ? `/images/${imagen}` : "https://via.placeholder.com/300x150?text=Sin+Imagen"} 
          alt={nombre} 
         className='image'
        />
      </div>

      {/* <h3 className='title'>{nombre}</h3> */}
      <p className='service'>{servicio}</p>

      <div className='benefitBox'>
        <strong>Si formas parte de la Mutual Sueño Amarillo: </strong> <span dangerouslySetInnerHTML={{ __html: beneficio }} />
      </div>

      <div className='contactSection'>
        {direccion && <div><i className="bi bi-pin-map-fill"></i> {direccion}</div>}
        {telefono && (<div>
          <a href={`https://wa.me/${telefono}`} target="_blank" rel="noreferrer" className='link'>
          <i className="bi bi-whatsapp"></i> 
          {telefono}
          </a>
          </div>
          )}
        
        {instagram && (
          <div>
             <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer" className='link'>
              <i className="bi bi-instagram "></i> <span></span>{instagram}
            </a>
          </div>
        )}

        {web && (
          <div>
             <a href={`https://${web}`} target="_blank" rel="noreferrer" className='link'>
             <i className="bi bi-globe"></i> {web}
            </a>
          </div>
        )}
      </div>
      <button onClick={irAlDetalle} className="boton_volver">
      Volver
        </button>
      {/* <Link  className='boton_volver' to="/">Volver</Link> */}
    </div>
  );
};

export default TarjetaComercio;