export default function calculateWinner(squares) {
	const edgeLength = parseInt(Math.sqrt(squares.length));
	for (let i = 0; i < squares.length; i++) {
		if (!squares[i]) continue;
		if (i % edgeLength + 5 <= edgeLength && Math.floor(i / edgeLength) + 5 <= edgeLength) {
			if (squares[i] === squares[i + edgeLength + 1] &&
				squares[i] === squares[i + edgeLength * 2 + 2] &&
				squares[i] === squares[i + edgeLength * 3 + 3] &&
				squares[i] === squares[i + edgeLength * 4 + 4]) {
				return [squares[i], [i, i + edgeLength + 1, i + edgeLength * 2 + 2, i + edgeLength * 3 + 3, i + edgeLength * 4 + 4]];
			}
		}
		if (i % edgeLength >= 4 && Math.floor(i / edgeLength) + 5 <= edgeLength) {
			if (squares[i] === squares[i + edgeLength - 1] &&
				squares[i] === squares[i + edgeLength * 2 - 2] &&
				squares[i] === squares[i + edgeLength * 3 - 3] &&
				squares[i] === squares[i + edgeLength * 4 - 4]) {
				return [squares[i], [i, i + edgeLength - 1, i + edgeLength * 2 - 2, i + edgeLength * 3 - 3, i + edgeLength * 4 - 4]];
			}
		}
		if (i % edgeLength + 5 <= edgeLength) {
			if (squares[i] === squares[i + 1] &&
				squares[i] === squares[i + 2] &&
				squares[i] === squares[i + 3] &&
				squares[i] === squares[i + 4]) {
				return [squares[i], [i, i + 1, i + 2, i + 3, i + 4]];
			}
		}
		if (Math.floor(i / edgeLength) + 5 <= edgeLength) {
			if (squares[i] === squares[i + edgeLength] &&
				squares[i] === squares[i + edgeLength * 2] &&
				squares[i] === squares[i + edgeLength * 3] &&
				squares[i] === squares[i + edgeLength * 4]) {
				return [squares[i], [i, i + edgeLength, i + edgeLength * 2, i + edgeLength * 3, i + edgeLength * 4]];
			}
		}
	}
	return null;
}
