import React from "react";
import "./NuestraMutual.css";

import Organigram from "../../componentes/Organigram/Organigram";

const NuestraMutual = () => {
  return (
    <>
      <div className="container">
        <section className="nosotros">
          <div className="nosotros__container">
            <h1> Sobre nosotros</h1>
            <div>
              <div>
                <h2>Nuestra Historia</h2>
                {/* <p>
          La Mutual nace inspirada en más de tres décadas de trabajo, compromiso
          y desarrollo comunitario que dieron forma al Club Educador de Futbol
          Social y Cultural 18, fundado en 1989. Esa trayectoria, marcada por la
          formación de miles de chicos y familias tucumanas, hoy se proyecta en
          una nueva etapa que amplía su alcance a toda la comunidad. La mutual
          se crea como una entidad independiente, con identidad y objetivos
          propios, pero con la misma esencia que impulsó al club: promover el
          bienestar, la participación y el crecimiento conjunto.
        </p> */}
                <p>
                  La Mutual Sueño Amarillo no nace de la nada; es el resultado y
                  la proyección de un profundo legado. Nuestra identidad se
                  inspira en más de tres décadas de trabajo y desarrollo
                  comunitario que dieron forma al Club Educador de Futbol Social
                  y Cultural 18, fundado en 1989. Aunque operamos como una
                  entidad independiente con objetivos propios, heredamos la
                  misma esencia que impulsó al club: promover el bienestar,
                  fomentar la participación y facilitar el crecimiento conjunto.
                  Este legado, forjado en el acompañamiento a miles de chicos y
                  familias tucumanas, nos confiere una profunda credibilidad y
                  un arraigo local que son el pilar de nuestro presente.
                </p>
              </div>
              <div>
                <h2>Misión y Proyecto Compartido</h2>
                <p>
                  Nuestro propósito central es ser un proyecto que une
                  voluntades para acompañar, brindar beneficios y mejorar la
                  calidad de vida de nuestros afiliados y de la comunidad en
                  general. No somos simplemente una entidad de servicios; somos
                  un punto de encuentro donde cada socio, cada aporte y cada
                  acción suman para construir una realidad colectiva más sólida
                  y justa. Como define nuestro manifiesto: "Ser parte de la
                  mutual es formar parte de un proyecto compartido, donde el
                  bienestar colectivo es el verdadero objetivo."
                </p>
              </div>
              <div>
                <h2>Nuestros Valores</h2>
                {/* <p>
                  Nuestros Valores Creemos en los vínculos que se construyen con
                  honestidad, compromiso y cercanía. Confianza: la base de todo
                  proyecto que perdura. Solidaridad: ayudarnos entre todos para
                  seguir creciendo. Transparencia: cada acción, con
                  responsabilidad y claridad. Cercanía: estar presentes,
                  escuchar y acompañar. Compromiso social: trabajar por una
                  comunidad más unida y justa.
                </p> */}
                  <p>
                  Creemos en los vínculos que se construyen con honestidad y
                  cercanía. Estos son los cinco principios innegociables que
                  guían cada una de nuestras decisiones y acciones:
                  </p>
                  <p>● Confianza: La base de todo proyecto que perdura.</p>
                  <p>
                    ● Solidaridad: Ayudarnos entre todos para seguir creciendo.
                  </p>
                  <p>
                    ● Transparencia: Cada acción, con responsabilidad y
                    claridad.
                  </p>
                  <p>● Cercanía: Estar presentes, escuchar y acompañar.</p>
                    <p>● Compromiso social: Trabajar por una comunidad más unida y justa.
                  </p>
                  <p>
                  Es desde esta base de confianza y compromiso arraigado en la
                  comunidad que extendemos una propuesta de valor diseñada para
                  generar un crecimiento tangible y compartido.
                </p>
              </div>
            </div>
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
