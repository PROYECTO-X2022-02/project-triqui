import './ScoreBoard.css';

const ScoreBoard = ({scoreX, scoreO}) => {
    const users =  JSON.parse(localStorage.getItem('jugadores'));
    return( 
    <div className="score-board">
        <div> {users.jugador} :{scoreX}</div>
        <div>{users.jugador2} :{scoreO}</div>
    </div>)
}

export default ScoreBoard;