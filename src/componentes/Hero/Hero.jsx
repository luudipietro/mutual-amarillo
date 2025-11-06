import React, { useState, useEffect } from "react";
import "./Hero.css"; // Asegúrate de crear este archivo CSS
import Hero1 from "../../assets/hero_1.png";
import Hero2 from "../../assets/hero_2.png";


const contenido = [
  {
    id: 1,
    background_image: Hero1,
    tittle: 'MUTUAL SUEÑO AMARILLO',
    description: 'Un espacio de encuentro, apoyo y crecimiento compartido. Nacida desde una historia de trabajo, valores y comunidad, la Mutual Sueño Amarillo abre sus puertas a todos los que creen que los sueños pueden cumplirse juntos',
    text_button: 'FORMA PARTE'

  },
  {
    id: 2,
    background_image: Hero2,
    tittle: 'TURSIMO',
    description: 'Viaja con la mejor financiación y los precios más bajos. No te quedes con las ganas y conocé los destinos increíbles que tenemos para vos',
    text_button: 'QUIERO VIAJAR'
  }
]

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    // Resetear animaciones al cambiar de imagen
    setAnimateText(false);
    setAnimateButton(false);

    const textTimer = setTimeout(() => {
      setAnimateText(true);
    }, 500); // Aparece el texto "BILLETERA MUTUAL CAF" después de 0.5s

    const buttonTimer = setTimeout(() => {
      setAnimateButton(true);
    }, 1500); // Aparece el resto del texto y el botón después de 1.5s

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, [currentImageIndex]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === contenido.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? contenido.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${contenido[currentImageIndex].background_image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-contenido">
          <div className="hero-content">
            <h1
              className={`hero-title ${animateText ? "animate-fade-in" : ""}`}
            >
              {contenido[currentImageIndex].tittle}
            </h1>
            <p
              className={`hero-description ${
                animateButton ? "animate-slide-up" : ""
              }`}
            >
              {contenido[currentImageIndex].description}
            </p>
            <button
              className={`hero-button ${
                animateButton ? "animate-slide-up" : ""
              }`}
            >
              {contenido[currentImageIndex].text_button}
            </button>
          </div>
        </div>

        <div className="hero-navigation">
          <button className="nav-arrow prev-arrow" onClick={goToPrevImage}>
            <span className="arrow-icon">&lt;</span>
            <span className="arrow-text">PREV</span>
          </button>
          <button className="nav-arrow next-arrow" onClick={goToNextImage}>
            <span className="arrow-icon">&gt;</span>
            <span className="arrow-text">NEXT</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
