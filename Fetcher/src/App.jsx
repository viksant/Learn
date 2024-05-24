import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './facts'

const API_FACT_URL = 'https://cataas.com/cat/says/'

function useCatImage ( {fact} ) {
  const [image, setImage] = useState()
  useEffect(() => {

    if (!fact) return
    // Get the first word of the fact
    const firstWord = fact.split(' ')[0];
    // Get the image
    fetch(`${API_FACT_URL}${firstWord}`)
      .then(imageResponse => imageResponse.blob())
      .then(imageResponse => {
        const url = URL.createObjectURL(imageResponse)
        setImage(url);
      })
  }, [fact])
  return {image}
}

function App() {
  
  const [fact, setFact] = useState('')
  
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  },[])

  const { image } = useCatImage({fact})
  
  const handleClick = async () => {
    const newFact = await getRandomFact(setFact)
    setFact(newFact)
  }

  return (
    <div className="gatos">
      <h1>Facts De Gatos</h1>
      <button onClick={handleClick}>Get New Fact</button>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt="Cat fact image" />}
    </div>
  )
}

export default App
