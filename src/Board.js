import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, squaresWin }) => {
	const renderSquare = (i) => {
		return <Square
			value={squares[i]}
			key={i}
			onClick={() => onClick(i)}
			isSquareWin={squaresWin && squaresWin.includes(i)}
		/>;
	};

	const renderRow = (i) => {
		const rowsLength = parseInt(Math.sqrt(squares.length));
		const rows = squares.slice(i * rowsLength, (i + 1) * rowsLength);
		return <div className="board-row" key={i}>{rows.map((value, index) => renderSquare(index + i * rowsLength))}</div>
	}

	const renderBoard = () => {
		const edgeLength = parseInt(Math.sqrt(squares.length));
		return [...Array(edgeLength).keys()].map((value) => renderRow(value))
	}

	return (
		<div>
			{renderBoard()}
		</div>
	);
};

export default Board;
