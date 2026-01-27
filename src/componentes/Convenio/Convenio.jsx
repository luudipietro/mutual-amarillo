import React from 'react'
import "./Convenio.css"
import { Link } from 'react-router-dom'


const Convenio = ({id, title, imageUrl }) => {
  const ruta_base = '/beneficios';
  return (
    <div className="convenio">
    <Link to={`${ruta_base}/${id}`}>
      {imageUrl && <img src={`images/${imageUrl}`} alt={title} className={`convenio-image ${id == 25 ? 'black' : ''}`} />}
    </Link>
    </div>

  )
}

export default Convenio;