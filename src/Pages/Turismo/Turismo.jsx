import React from 'react'
import hero from "../../assets/hero_4.jpg";
import './Turismo.css'

const Turismo = () => {
  return (
    <div>
        <section className='turismo' 
        style={{backgroundImage: `url(${hero})`}}>
            <div className='turismo__container'>
                <h1>Turismo</h1>
            </div>
            
        </section>
        


    </div>
  )
}

export default Turismo