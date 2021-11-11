import { useState } from "react";
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { GameBox } from "./GameBox";

export function Game() {






  const { width, height } = useWindowSize();







  const [board, setBoard] = useState(
    [null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  // useState(
  //   [ 0,
  //     1,
  //     2,
  //     3,
  //     4,
  //     5,
  //     6,
  //     7,
  //     8,
  //   ]);
  const decideWinner = board => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const [isXTurn, setIsXTurn] = useState(true);


  const handleClick = (index) => {
    console.log(index);

    if (!winner && !board[index]) {

      const boardCopy = [...board];

      boardCopy[index] = isXTurn ? "X" : "O";

      setBoard(boardCopy);

      setIsXTurn(!isXTurn);
    }
  };
  const restart = () => {
    setBoard([null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
    setIsXTurn(true);
  };

  return (
    <div class="full-game">
      {winner ? <Confetti width={width} height={height} gravity={0.03} /> : ''}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h1>winner is :{winner}</h1> : ""}
      <button onClick={restart}>Restart</button>
    </div>
  );
}
