const Square = ({value, onClick, isSquareWin}) => {
  return (
    <button 
        className={isSquareWin ? "square square-win" : "square"}
        onClick={onClick}
    >
    {value}
    </button>
  )
}

export default Square