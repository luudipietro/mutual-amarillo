import React from 'react'
import "./Convenio.css"
import { Link } from 'react-router-dom'


const Convenio = ({id, title, imageUrl }) => {
  const convenios_black = [25,31,32,33]
  const ruta_base = '/beneficios';
  return (
    <div className="convenio">
    <Link to={`${ruta_base}/${id}`}>
      {imageUrl && <img src={`images/${imageUrl}`} alt={title} className={`convenio-image ${convenios_black.includes(id) ? 'black' : ''}`} />}
    </Link>
    </div>

  )
}

export default Convenio;