import './ScoreBoard.css';

const ScoreBoard = ({ scoreX, scoreO }) => {
    const users = JSON.parse(localStorage.getItem('jugadores'));
    return (
        <div className="score-board">
            <div> <div className='nombre'>
                {scoreX}
            </div>
                {users.jugador}
            </div>
            <div>
                <div className='nombre2'>{scoreO}</div>
                <div>
                    {users.jugador2}
                </div>
            </div>
        </div>)
}

export default ScoreBoard;