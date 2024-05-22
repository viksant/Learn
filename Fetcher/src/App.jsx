import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const API_URL = 'https://catfact.ninja/fact'
  const API_FACT_URL = 'https://cataas.com/cat/says/'


  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const fact = data.fact

        // Get the first word of the fact
        const firstWord = fact.split(' ')[0];
        
        // Get the image
        fetch(`${API_FACT_URL}${firstWord}`)
          .then(imageResponse => imageResponse.blob())
          .then(imageBlob => {
            const imageUrl = URL.createObjectURL(imageBlob);
            // Almacenar los resultados en el estado
            setFact(data.fact);
            setImage(imageUrl);
          })
      })
  },[])
  return (
    <div>
      <h1>Facts De Gatos</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt="Cat fact image" />}
    </div>
  )
}

export default App
