import React from 'react'

type SquareType = {
  value: string,
  onSquareClick: () => void
}

export const Square: React.FC<SquareType> = ({ value, onSquareClick }) => {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}