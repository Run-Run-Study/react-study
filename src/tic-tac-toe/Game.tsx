import { Board } from './Board'
import { useState } from 'react'

export const Game = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState<Array<Array<string>>>(Array(9).fill(Array(9)))
  const currentSquares = history[history.length - 1]

  const handlePlay = (nextSquares: Array<string>) => {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }

  const jumpTo = (nextMove: number) => {
    /*TODO*/
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : `Go to game start`
    return (
      <li>
        <button onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  )
}