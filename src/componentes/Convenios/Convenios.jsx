import React from 'react'
import Convenio from '../Convenio/Convenio'
import "./Convenios.css"
import Marquee from 'react-fast-marquee';
import { Link, NavLink } from 'react-router-dom'
const convenios = [
    {
        id: 1,
        tittle: "CEF 18",
        imageUrl: 'cef_sin_fondo_fix.png'
    },
    {
        id: 2,
        tittle: "Nutricion: Tamara Petrella",
        imageUrl: 'tamara_nutri_fix.jpg '
    },
    {
        id: 3,
        tittle: "El Quincho de Nacho",
        imageUrl: 'quincho_nacho.jpg'
    },
    {
        id: 4,
        tittle: "Jockey Gym",
        imageUrl: 'jockey_gym_fix.png'
    },        {
        id: 19,
        tittle: "Electrus",
        imageUrl: 'electrus_fix.png',   
    },
    {
        id: 5,
        tittle: "Eco Extreme",
        imageUrl: 'eco_extreme_fix.jpg'
    },
    {
        id: 25,
        tittle: "Overall Center Gym",
        imageUrl: 'overall.png'
    },
    {
        id: 6,
        tittle: "Julieta Penovi Interiorismo",
        imageUrl: 'juli_penovi_fix.png'
    },

    {
        id: 7,
        tittle: "Laboratorios Presti",
        imageUrl: 'presti_lab_fix.jpg'
    },
    {
        id: 8,
        tittle: "Sancor Seguros",
        imageUrl: 'sancor_seguros_fix.png'
    },
    {
        id: 9,
        tittle: "SV Baterias",
        imageUrl: 'sv_baterias_fix.jpg'
    },
    {
        id: 10,
        tittle: "Berro Artesanal",
        imageUrl: 'logo_berro_fix.png'
    },
    {
        id: 11,
        tittle: "Bodega Don Angelo",
        imageUrl: 'bodega_angelo_fix.jpg',     
    },
    {
        id: 12,
        tittle: "Grilx",
        imageUrl: 'grilx_fix.png',   
    },
    {
        id: 13,
        tittle: "La casa del ventilador",
        imageUrl: 'casa_ventilador_fix.png',   
    },
    {
        id: 14,
        tittle: "JMA tecno partes",
        imageUrl: 'jma_tecno_fix.jpg',     
    },
    // {
    //     id: 15,
    //     tittle: "Nueva Italia",
    //     imageUrl: 'nueva_italia_fix.png',     
    // },
    {
        id: 16,
        tittle: "Domenico",
        imageUrl: 'domenico_fix.png',     
    },
    {
        id: 17,
        tittle: "Malala",
        imageUrl: 'malala_fix.png',     
    },
    {
        id: 18,
        tittle: "Academia Ingresar",
        imageUrl: 'academia_ingresar_fix.png'
    },

    {
        id: 20,
        tittle: "Mix tecno",
        imageUrl: 'mix_fix.png',   
    },
    {
        id: 21,
        tittle: "Motok estudio juridico",
        imageUrl: 'motok_estudio_juridico_fix.jpg',     
    },
    {
        id: 22,
        tittle: "ARN Lubricentro",
        imageUrl: 'lubricentro_fix.jpg',     
    },
    {
        id: 23,
        tittle: "Consultora MC",
        imageUrl: 'mc_consultora_fix.jpg',     
    },
    {
        id: 24,
        tittle: "Lomas Aberturas",
        imageUrl: 'lomas_aberturas_fix.png'
    },
     {
        id: 28,
        tittle: "Simplifica Tu Fiesta",
        imageUrl: 'simplifica.png'
    },
     {
        id: 26,
        tittle: "Flor de Hibiscus - Aromatica",
        imageUrl: 'flor_hibiscus.png'
    },
     {
        id: 27,
        tittle: "Spring Summer",
        imageUrl: 'spring_summer.png'
    },
      {
        id: 29,
        tittle: "La Esquina Rosada Pintureria",
        imageUrl: 'la_esquina_rosada.jpeg'
    },
      {
        id: 30,
        tittle: "El Cristo Pintureria",
        imageUrl: 'cristo_pintureria.jpeg'
    },
      {
        id: 31,
        tittle: "R18k Oro Tucuman",
        imageUrl: 'r18k.png'
    },
      {
        id: 32,
        tittle: "Odontóloga Belen Diaz Romero",
        imageUrl: 'dentista_diaz_romero.jpeg'
    },  
    {
        id: 33,
        tittle: "Odontóloga Alejandrina Gimenez Moral",
        imageUrl: 'dentista_alejandrina.jpeg'
    },
      {
        id: 34,
        tittle: "Las Parrillas Resto delivery",
        imageUrl: 'las_parrillas.jpeg'
    }
     

];


const Convenios = () => {

    const quarter = Math.ceil(convenios.length/4)
    const conveniosAleatorios = [...convenios].sort(() => Math.random() - 0.5);
    const firstRow = conveniosAleatorios.slice(0, quarter)
    const secondRow = conveniosAleatorios.slice(quarter, quarter*2)
    const thirdRow = conveniosAleatorios.slice(quarter*2, quarter*3)
    const quarterRow = conveniosAleatorios.slice(quarter*3)





  return (
    <section className='convenios'>

        <h3> <a href="https://drive.google.com/file/d/1eIUZuA28p-poFapGz7Q4iU7I8aupnMKm/view?usp=sharing"  target="_blank" rel="noopener noreferrer">Catálogo de Beneficios Completo</a> </h3>
        
        
        <div className='convenios__contenedor'>

            <div className='carousel-row'>
                <Marquee gradient={true} gradientWidth={50} speed={60} pauseOnHover={true}>
                    {firstRow.map((element) => (
                    <Convenio
                        key={element.id}
                        id={element.id}
                        title={element.id}
                        imageUrl={element.imageUrl}
                    
                    />
                    ))}

                </Marquee>

            </div>
            
            <div className='carousel-row'>
                <Marquee direction='right' gradient={true} gradientWidth={50} speed={60} pauseOnHover={true}>
                    {secondRow.map((element) => (
                    <Convenio
                        key={element.id}
                        id={element.id}
                        title={element.id}
                        imageUrl={element.imageUrl}
                    
                    />
                    ))}

                </Marquee>

            </div>
            <div className='carousel-row'>
                <Marquee gradient={true} gradientWidth={50} speed={60} pauseOnHover={true}>
                    {thirdRow.map((element) => (
                    <Convenio
                        key={element.id}
                        id={element.id}
                        title={element.id}
                        imageUrl={element.imageUrl}
                    
                    />
                    ))}

                </Marquee>

            </div>
            <div className='carousel-row'>
                <Marquee direction='right' gradient={true} gradientWidth={50} speed={60} pauseOnHover={true}>
                    {quarterRow.map((element) => (
                    <Convenio
                        key={element.id}
                        id={element.id}
                        title={element.id}
                        imageUrl={element.imageUrl}
                    
                    />
                    ))}

                </Marquee>

            </div>

            {/* {convenios.map((element) => (
            <Convenio
                key={element.id}
                id={element.id}
                title={element.tittle}
                imageUrl={element.imageUrl}
            />
            ))} */}

        </div>



    </section>
    
  )
}

export default Convenios