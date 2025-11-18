import React from 'react'
import Convenio from '../Convenio/Convenio'
import "./Convenios.css"
const convenios = [
{
        id: 1,
        tittle: "CEF 18",
        description: "bla",
        imageUrl: 'cef_sin_fondo_fix.png'
    },

  
    {
        id: 2,
        tittle: "Nutricion: Tamara Petrella",
        description: "bla",
        imageUrl: 'tamara_nutri_fix.jpg '
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
        imageUrl: 'academia_ingresar_fix.png'
    },
    
    {
        id: 6,
        tittle: "Jockey Gym",
        description: "bla",
        imageUrl: 'jockey_gym_fix.png'
    },
    {
        id: 7,
        tittle: "Lomas Aberturas",
        description: "bla",
        imageUrl: 'lomas_aberturas_fix.png'
    },
    {
        id: 8,
        tittle: "Julieta Penovi Interiorismo",
        description: "bla",
        imageUrl: 'juli_penovi_fix.png'
    },

    {
        id: 9,
        tittle: "Laboratorios Presti",
        description: "bla",
        imageUrl: 'presti_lab_fix.jpg'
    },
    {
        id: 10,
        tittle: "Sancor Seguros",
        description: "bla",
        imageUrl: 'sancor_seguros_fix.png'
    },
    {
        id: 11,
        tittle: "SV Baterias",
        description: "bla",
        imageUrl: 'sv_baterias_fix.jpg'
    },
    {
        id: 12,
        tittle: "Berro Artesanal",
        description: "bla",
        imageUrl: 'logo_berro_fix.png'
    },
    {
        id: 5,
        tittle: "Bodega Don Angelo",
        description: "bla",
        imageUrl: 'bodega_angelo_fix.jpg',     
   },
//      {
//         id: 13,
//         tittle: "Nueva Italia",
//         description: "bla",
//         imageUrl: 'nueva_italia_fix.png',     
//    },

   {
        id: 17,
        tittle: "Electrus",
        description: "bla",
        imageUrl: 'electrus_fix.png',   
   },
   {
        id: 18,
        tittle: "Grilx",
        description: "bla",
        imageUrl: 'grilx_fix.png',   
   },
   {
        id: 19,
        tittle: "La casa del ventilador",
        description: "bla",
        imageUrl: 'casa_ventilador_fix.png',   
   },
     
   {
        id: 20,
        tittle: "Mix tecno",
        description: "bla",
        imageUrl: 'mix_fix.png',   
   },
     {
        id: 14,
        tittle: "Consultora MC",
        description: "bla",
        imageUrl: 'mc_consultora_fix.jpg',     
   },
     {
        id: 15,
        tittle: "Motok estudio juridico",
        description: "bla",
        imageUrl: 'motok_estudio_juridico_fix.jpg',     
   },
   {
      id: 16,
      tittle: "Eco Extreme",
      description: "bla",
      imageUrl: 'eco_extreme_fix.jpg',     
   },
   {
      id: 21,
      tittle: "Domenico",
      description: "bla",
      imageUrl: 'domenico_fix.png',     
   },
   {
      id: 22,
      tittle: "Malala",
      description: "bla",
      imageUrl: 'malala_fix.png',     
   },
   {
      id: 23,
      tittle: "JMA tecno partes",
      description: "bla",
      imageUrl: 'jma_tecno_fix.jpg',     
   },
    {
      id: 24,
      tittle: "ARN Lubricentro",
      description: "bla",
      imageUrl: 'lubricentro_fix.jpg',     
   }
]


const Convenios = () => {
  return (
    <section className='convenios'>


        <div className='convenios__contenedor'>
            {convenios.map((element) => (
            <Convenio
                key={element.id}
                title={element.tittle}
                imageUrl={element.imageUrl}
            />
            ))}

        </div>



    </section>
    
  )
}

export default Convenios