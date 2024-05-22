import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TURNS, WINNER_COMBOS, Square } from './Constants'
import { checkWinner } from './Functions'
import confetti from 'canvas-confetti'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) 
      return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turm')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null) // Null = No hay ganador, False = empate.

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null);
  }

  const updateBoard = (index) => {
    // Return si la celda ya tiene algo dentro.
    if (board[index] || winner) return 
    // Creamos copia del board para actualizarlo.
    const newBoard = [...board] 
    // Obtiene lo que hay dentro de la celda (X u O). 
    newBoard[index] = turn 
    setBoard(newBoard) 
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardar la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // Comprobar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button className="resetButton" onClick={resetGame}>Reset Game</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            );
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      { 
        winner != null && (
          <section className="winner">
            <div className="text">
              <h2>
                { /* Determinar si hubo un ganador o un empate */
                  winner === false ? 'Empate' : 'Ganó'
                }
              </h2>

              <header className="win">
                {/* Si tenemos un winner, lo renderizamos */}
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button className="resetButton" onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
