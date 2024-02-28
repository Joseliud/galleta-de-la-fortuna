import React from 'react'
import Random from '../utils/Random'
import phrases from '../utils/pharses.json'


const BotonVisual = ({setphrases}) => {

    const click = () => {
       const phrase = Random(phrases)
       setphrases(phrase)
    
     
    }
 
 
    return (
    <button className='card_btn' onClick={click}> Boton de la suerte </button>
  )
}

export default BotonVisual