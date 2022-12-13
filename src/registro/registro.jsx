import { useState } from "react"
import "../registro/Registro.css"



function Registro() {
    const [user, setUser] = useState()

    function numeroJugadores(e) {
        setUser(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="container">
            <p><select value={user} onChange={numeroJugadores}>
                <option>Elige el numero de jugadores</option>
                <option>Un jugador</option>
                <option>Dos jugadores</option>

            </select></p>

            {
                user === 'Un jugador' && (
                    <div>
                        <input type="text" />
                    </div>
                )
            }

            {
                user === 'Dos jugadores' && (
                    <div>
                        <input type="text" />
                        <input type="text" />
                    </div>
                )
            }
        </div>
    )
}

export default Registro;