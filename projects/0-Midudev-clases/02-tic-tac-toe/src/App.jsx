// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {useState} from "react"
import confetti from 'canvas-confetti'
import {Square} from './components/Square'
import {TURNS} from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from "./components/WinnerModal"
import { resetGameStorage, saveGameToStorage } from "./logic/storage"



function App() {
  console.log('render...')
const [board, setBoard] = useState(() => {
  console.log('inicializar el estado del board')
  const boardFromStorage = window.localStorage.getItem('board')
  if (boardFromStorage) return JSON.parse(boardFromStorage)
  return Array(9).fill(null)
})

const [turn, setTurn] = useState(() => {
  const turnFromStorage = window.localStorage.getItem('turn')
  return turnFromStorage ?? TURNS.x
})

// null es que no hay ganador, false es que hay un empate
const [winner, setWinner] = useState(null)



const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay mas espacion vacios
  // en el tablero
  return newBoard.every((square) => square != null)
}


const updateBoard = (index) => {
  // no actualizamos esta posicion
  // si ya tiene algo
  if (board[index]) return
  // actualizar el tablero
  const newBoard = [ ...board]
  newBoard[index] = turn
  setBoard(newBoard)
  // cambiar el turno
  const newTurn = turn == TURNS.x ? TURNS.o : TURNS.x
  setTurn(newTurn)
  // guardado de partida
  saveGameToStorage({
    board: newBoard,
    turn: newTurn
  })
  // revisar en cada update si hay un ganador
  const newWinner = checkWinner(newBoard)
  if (newWinner) {
    // alert(`El ganador es ${newWinner}`)
    confetti()
    setWinner(newWinner)
  } else if (checkEndGame(newBoard)) {
    setWinner(false) // empate
  }
}

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    resetGameStorage()
  }
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square key={index} 
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn == TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App
