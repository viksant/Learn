import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  useEffect(() => {
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y:clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // Limpiar cuando se desmonta el efecto o se cambia la dependencia
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} 
      />
      <button className="botonActivarCursor" onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir cursor
      </button>
    </>
  )
}

function App() {
  

  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
