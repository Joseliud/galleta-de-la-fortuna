import { useState } from 'react'
import './App.css'
import frases from './utils/pharses.json'
import Random from './utils/Random'
import PharseCard from './Components/PharseCard'
import BotonVisual from './Components/BotonVisual'
import arrImages from './utils/arriImagen.json'

function App() {

  const initialValue= Random(frases)
  const [phrases, setphrases] = useState(initialValue)

  const initialImagen= Random(arrImages)
  const [imagen, setimagen] = useState(initialImagen)

  const objStyle = {
    backgroundImage: `url("/fondo${imagen}.jpg")`
  }

  return (
     <div className='app' style={objStyle}>
        <h1 className='app_title'>Galleta de la fortuna</h1>
        <title className='app_card'>
          <PharseCard phrase={phrases} />
        <BotonVisual 
        setphrases={setphrases}
        setimagen={setimagen}/>
        </title>
        
      </div>
  )
}

export default App
