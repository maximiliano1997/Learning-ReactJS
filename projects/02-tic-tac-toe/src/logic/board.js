import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O gano
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // si no hay ganador ("Empate")
    return null
}

export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    // si no hay mas espacion vacios
    // en el tablero
    return newBoard.every((square) => square != null)
}

const lol = 3;
