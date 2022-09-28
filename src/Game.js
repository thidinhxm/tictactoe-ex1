import { useState } from 'react'
import Board from './Board'
import calculateWinner from './calculateWinner';
import checkDraw from './checkDraw';
const Game = () => {
	const [history, setHistory] = useState([{ squares: Array(20 * 20).fill(null) }]);
	const [xIsNext, setXIsNext] = useState(true);
	const [stepNumber, setStepNumber] = useState(0);
	const [historyPoint, setHistoryPoint] = useState([[null, null]]);
	const [ascending, setAscending] = useState(true);
	const handleClick = (i) => {
		const newHistory = history.slice(0, stepNumber + 1);
		const current = newHistory[newHistory.length - 1];
		const newSquares = [...current.squares];
		if (calculateWinner(newSquares) || newSquares[i]) {
			return;
    }
		newSquares[i] = xIsNext ? 'X' : 'O';
		setHistory([...newHistory, {squares: newSquares}]);
		setStepNumber(newHistory.length);
		setXIsNext(!xIsNext);
		setHistoryPoint([...historyPoint, [i % 10, Math.floor(i / 10)]]);
	}

	const sortHandleClick = () => {
		setAscending(!ascending);
	}

	const jumpTo = (step) => {
		setStepNumber(step);
		setXIsNext(step % 2 === 0);
	}

	const current = history[stepNumber];
	const winner = calculateWinner(current.squares);

	const moves = history.map((step, move) => {
		const point = `(${historyPoint[move][0]}, ${historyPoint[move][1]})`;
		const desc = move ?
			'Go to move #' + move + ' - ' + point:
			'Go to game start';
		
		return (
			<li key={move}>
				<button 
					onClick={() => jumpTo(move)}
					className={move === stepNumber ? 'current-step' : ''}
				>
					{desc}
				</button>
			</li>
		);
	});

	let status;
	if (winner) {
		status = "Winner: " + winner[0];
	} else if (checkDraw(current.squares)) {
		status = "Draw"
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}
  return (
    <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
						onClick={i => handleClick(i)}
						squaresWin={winner ? winner[1] : undefined}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{ascending ? moves : moves.reverse()}</ol>
					<button onClick={() => sortHandleClick()}>{ascending ? 'Descending' : 'Ascending'}</button>
        </div>
    </div>
  )
}

export default Game