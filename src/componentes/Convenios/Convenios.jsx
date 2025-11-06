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
        imageUrl: 'tamara_nutri_fix.png'
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
        imageUrl: 'juli_penovi_fix2.png'
    },

    {
        id: 9,
        tittle: "Laboratorios Presti",
        description: "bla",
        imageUrl: 'presti_lab_fix.png'
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
        imageUrl: 'sv_baterias_fix.png'
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
        imageUrl: 'bodega_angelo_fix.png',     
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