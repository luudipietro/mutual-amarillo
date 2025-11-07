import React from "react";
import "./NuestraMutual.css";
import Familia from "../../assets/familia_fut.jpg";
import Nosotros from "../../assets/nosotros.png";
import Organigram from "../../componentes/Organigram/Organigram";
import Carousel from '../../componentes/Carousel/Carousel'
const valores = [{
                    id: 1,
                    tittle: "Confianza",
                    description: "La base de todo proyecto que perdura",
                    imageUrl: "confianza.jpg"
                  },
                {
                    id: 2,
                    tittle: "Solidaridad",
                    description: "Ayudarnos entre todos para seguir creciendo",
                    imageUrl: "solidaridad.jpg"
                  },
              {
                    id: 3,
                    tittle: "Transparencia",
                    description: "La base de todo proyecto que perdura",
                    imageUrl: "transparencia.jpg"
                  },
            {
                    id: 4,
                    tittle: "Cercania",
                    description: "Estar presentes, escuchar y acompañar",
                    imageUrl: "cercania.jpg"
                  },
          {
                    id: 5,
                    tittle: "Compromiso social",
                    description: "Trabajar por una comunidad más unida y justa.",
                    imageUrl: "compromiso.jpg"
                  }]
const NuestraMutual = () => {
  return (
    <>
      <div
        className="nosotros__hero"
        style={{ backgroundImage: `url(${Nosotros})` }}
      >
        <div className="nosotros__hero__container">
          <div className="nosotros__hero__container__item animate-fade-in">
          <h1>
            Nuestra Historia
          </h1>
           <p>
                 Nuestra identidad se
                  inspira en más de tres décadas de trabajo y desarrollo
                  comunitario que dieron forma al Club Educador de Futbol Social
                  y Cultural 18, fundado en 1989. 
                </p>
                <p>
                  Heredamos la misma esencia que impulsó al club: promover el bienestar,
                  fomentar la participación y facilitar el crecimiento conjunto.
                </p>

                </div>

        
        <div className="nosotros__hero__container__item animate-fade-in">
          <h1>
            Nuestra Misión
          </h1>
           <p>
                  Somos un proyecto compartido, que une
                  voluntades para acompañar, brindar beneficios y mejorar la
                  calidad de vida de nuestros afiliados y de la comunidad en
                  general. 
                </p>
                <p>
                  Somos
                  un punto de encuentro donde cada socio, cada aporte y cada
                  acción suman para construir una realidad colectiva más sólida
                  y justa. 
                </p>

                </div>
                </div>
      </div>
      <div className="container">
        <section className="nosotros">
          <div className="nosotros__container">
                  <Carousel
                  cards={valores}  
                  />
              
          </div>

        </section>

        <section className="organigrama">
          <div className="nosotros__container">
            <h2>Nuestra Estructura</h2>
            <Organigram />
          </div>
        </section>
      </div>
    </>
  );
};

export default NuestraMutual;
