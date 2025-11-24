import React from 'react'
import Convenio from '../Convenio/Convenio'
import "./Convenios.css"
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
        tittle: "Academia Ingresar",
        imageUrl: 'academia_ingresar_fix.png'
    },
    
    {
        id: 6,
        tittle: "Jockey Gym",
        imageUrl: 'jockey_gym_fix.png'
    },
    {
        id: 7,
        tittle: "Lomas Aberturas",
        
        imageUrl: 'lomas_aberturas_fix.png'
    },
    {
        id: 8,
        tittle: "Julieta Penovi Interiorismo",
        
        imageUrl: 'juli_penovi_fix.png'
    },

    {
        id: 9,
        tittle: "Laboratorios Presti",
        
        imageUrl: 'presti_lab_fix.jpg'
    },
    {
        id: 10,
        tittle: "Sancor Seguros",
        
        imageUrl: 'sancor_seguros_fix.png'
    },
    {
        id: 11,
        tittle: "SV Baterias",
        
        imageUrl: 'sv_baterias_fix.jpg'
    },
    {
        id: 12,
        tittle: "Berro Artesanal",
        
        imageUrl: 'logo_berro_fix.png'
    },
    {
        id: 5,
        tittle: "Bodega Don Angelo",
        
        imageUrl: 'bodega_angelo_fix.jpg',     
   },
//      {
//         id: 13,
//         tittle: "Nueva Italia",
//         description: "bla",
//         imageUrl: 'nueva_italia_fix.png',     
//    },

   {
        "id": 17,
        "tittle": "Electrus",
        imageUrl: 'electrus_fix.png',   
   },
   {
        id: 18,
        tittle: "Grilx",
        imageUrl: 'grilx_fix.png',   
   },
   {
        id: 19,
        tittle: "La casa del ventilador",
        imageUrl: 'casa_ventilador_fix.png',   
   },
     
   {
        id: 20,
        tittle: "Mix tecno",
        imageUrl: 'mix_fix.png',   
   },
     {
        id: 14,
        tittle: "Consultora MC",
        imageUrl: 'mc_consultora_fix.jpg',     
   },
     {
        id: 15,
        tittle: "Motok estudio juridico",
        imageUrl: 'motok_estudio_juridico_fix.jpg',     
   },
   {
      id: 16,
      tittle: "Eco Extreme",
      imageUrl: 'eco_extreme_fix.jpg',     
   },
   {
      id: 21,
      tittle: "Domenico",
      imageUrl: 'domenico_fix.png',     
   },
   {
      id: 22,
      tittle: "Malala",
      imageUrl: 'malala_fix.png',     
   },
   {
      id: 23,
      tittle: "JMA tecno partes",
      imageUrl: 'jma_tecno_fix.jpg',     
   },
    {
      id: 24,
      tittle: "ARN Lubricentro",
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