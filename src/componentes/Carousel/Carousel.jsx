// src/components/Carousel.js
import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css'; // Crearemos este archivo más tarde
import Card from '../Card/Card';

const cards = [
    {
        id: 5,
        tittle: "CEF 18",
        description: "bla",
        imageUrl: 'cef.jpg'
    },
    {
        id: 1,
        tittle: "Bodega Don Angelo",
        description: "bla",
        imageUrl: 'bodega_angelo.jpg',     
   },
    {
        id: 2,
        tittle: "Nutricion: Tamara Petrella",
        description: "bla",
        imageUrl: 'tamara_petrella.jpg'
    },
    {
        id: 3,
        tittle: "El Quincho de Nacho",
        description: "bla",
        imageUrl: 'quincho_nacho.jpg'
    },
    {
        id: 4,
        tittle: "Academia Ingresar",
        description: "bla",
        imageUrl: 'academia_ingresar.jpg'
    },
    
    {
        id: 6,
        tittle: "Jockey Gym",
        description: "bla",
        imageUrl: 'jockey_gym.jpg'
    },
    {
        id: 7,
        tittle: "Lomas Aberturas",
        description: "bla",
        imageUrl: 'lomas_aberturas.jpg'
    },
    {
        id: 8,
        tittle: "Laboratorios Presti",
        description: "bla",
        imageUrl: 'presti_lab.jpg'
    },
    {
        id: 9,
        tittle: "Sancor Seguros",
        description: "bla",
        imageUrl: 'sancor_seguros.jpg'
    },
    {
        id: 10,
        tittle: "SV Baterias",
        description: "bla",
        imageUrl: 'sv_baterias.jpg'
    }
]
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); // Para referenciar el contenedor de las tarjetas
  const [visibleCards, setVisibleCards] = useState(3); // cantidad visible según ancho

  // 🧠 Detecta el ancho de la pantalla y ajusta cantidad de tarjetas visibles
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setVisibleCards(1);
      } else if (window.innerWidth < 900) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize(); // ejecuta al montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    
  // Función para mover el carrusel a la izquierda
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === 0? cards.length - visibleCards : prevIndex - 1
);
  };

  // Función para mover el carrusel a la derecha
  const handleNext = () => {
    // Aquí asumimos que children es un array de elementos
    setCurrentIndex((prevIndex) => 
    prevIndex >= cards.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  // Calcula el estilo de transformación para mover el carrusel
  const transformStyle = {
    transform: `translateX(-${currentIndex === 0 ? 0 :(currentIndex * 100 / visibleCards) +3 * currentIndex + 4 / visibleCards}%)`, // Ajustar el 100% según el ancho de tus tarjetas
    // Esto es un ejemplo, el cálculo exacto depende del CSS de tus tarjetas y su espaciado
  };

  return (
    <section className='carousel-father'>
    <div className="carousel-container">
      <div className="carousel-header">
        <h2>Nuestros Servicios</h2>
        <div className="carousel-nav">
          <button onClick={handlePrev} >
            &lt; {/* Flecha izquierda */}
          </button>
          <button onClick={handleNext} >
            &gt; {/* Flecha derecha */}
          </button>
        </div>
      </div>
      <div className="carousel-track-wrapper">
        <div className="carousel-track" ref={carouselRef} style={transformStyle}>
          {cards.map((element) => (
            <Card
                key={element.id}
                id= {element.id}
                title={element.tittle}
                description={element.description}
                imageUrl={element.imageUrl}
            />

          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Carousel;