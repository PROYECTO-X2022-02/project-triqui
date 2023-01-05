import { useState } from "react"
import "./registro.css"




function Registro() {
    const [user, setUser] = useState()
    const [ingresoUsuario, setIngresoUsuario] = useState()
    const [message, setMessage] = useState('')
    const saveData = (e) => {
        const data = []
        e.preventDefault()
        e.currentTarget.disabled = true;

        console.log(e.target.select.value)



        if (e.target.select.value === 'Un jugador') {
            if (e.target.nick.value == "") {
                alert("no se puede");
            }
            console.log(e.target.nick.value)
        } else if (e.target.select.value === 'Dos jugadores') {

            if (e.target.nick1.value == "" || e.target.nick2.value == "") {
                console.log(e.target.nick1.value == null)
                console.log(e.target.nick2.value == null)
                alert("no se puede hacer");
            }
        }


        // console.log(data)
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
                            <label>
                                Ingresa tu nick
                            </label>
                            <input name="nick" type="text" onChange={e => setMessage(e.target.value)} />
                        </div>
                    )
                }

                {
                    user === 'Dos jugadores' && (
                        <div>
                            <div>
                                <label>
                                    Ingresa tu nick
                                </label>
                                <input name="nick1" type="text" onChange={e => setMessage(e.target.value)} />
                            </div>
                            <div>

                                <label>
                                    Ingresa tu nick
                                </label>
                                <input name="nick2" type="text" onChange={e => setMessage(e.target.value)} />
                            </div>
                        </div>
                    )
                }

                <button disabled={!message}>Login</button>
            </form>

        </div>
    )

}

export default Registro;