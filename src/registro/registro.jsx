import { useState } from "react"
import "../registro/Registro.css"



function Registro() {
    const [user, setUser] = useState()
    const [ingresoUsuario, setIngresoUsuario] = useState()

    const saveData = (e) => {
        const data = []
        e.preventDefault()

        console.log(e.target.select.value)

        if (e.target.select.value === 'Un jugador') {
            console.log(e.target.nick.value)
        } else if (e.target.select.value === 'Dos jugadores') {
            console.log(e.target.nick1.value)
            console.log(e.target.nick2.value)
        }

    }

    function numeroJugadores(e) {
        setUser(e.target.value)
        // console.log(e.target.value)
    }

    function ingresoUsuarios(e) {
        setIngresoUsuario(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="container">

            <form value={ingresoUsuario} onSubmit={saveData}>
                <p><select value={user} name="select" onChange={numeroJugadores}>
                    <option>Elige el numero de jugadores</option>
                    <option>Un jugador</option>
                    <option>Dos jugadores</option>

                </select></p>

                {
                    user === 'Un jugador' && (
                        <div>
                            <p>Ingresa tu nick<input name="nick" type="text" /></p>
                        </div>
                    )
                }

                {
                    user === 'Dos jugadores' && (
                        <div>
                            <p>Ingresa tu nick<input name="nick1" type="text" /></p>
                            <p>Ingresa tu nick<input name="nick2" type="text" /></p>

                        </div>
                    )
                }

                <button>Login</button>
            </form>

        </div>
    )

}

export default Registro;