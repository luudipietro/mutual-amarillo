
import React from 'react';
import './Card.css'; // Crearemos este archivo más tarde

const Card = ({ id, title, description, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && <img src={`/images/${imageUrl}`} alt={title} className="card-image" />}
      <div className="card-content">
        <h3>{title}</h3>
        
      </div>
    </div>
  );
};

export default Card;