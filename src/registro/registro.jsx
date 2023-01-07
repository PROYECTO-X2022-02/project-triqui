import { useState } from "react";
import "../registro/Registro.css";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Select,
  Text,
  CardFooter,

} from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Registro() {
  const [user, setUser] = useState();
  const [jugador, setGugador] = useState({});
  console.log(jugador);
  const [validJugador, setValidGugador] = useState({
    nick1: 'valor requerido',
    nick2: 'valor requerido'
  });
  const [ingresoUsuario, setIngresoUsuario] = useState();

  const saveData = (e) => {
    const data = [];
    e.preventDefault();
    e.currentTarget.disabled = true;


    console.log(e.target.select.value);

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
  };
  function gurdarNombres() {
    localStorage.setItem("jugadores", JSON.stringify(jugador));
  }

  function gudador(e) {
    if (e.target.name == 'nick1') {
      setGugador({
        ...jugador,
        jugador: e.target.value
      });
    }
    if (e.target.name == 'nick2') {
      setGugador({
        ...jugador,
        jugador2: e.target.value
      });
    }

    if (e.target.name == 'nick1' || e.target.name == 'nick2') {
      setValidGugador({
        ...validJugador,
        [e.target.name]: e.target.value.length < 5 ? 'valor requerido' : ''
      })
    }
  }

  const validForm = Object.keys(validJugador).every(key => validJugador[key] === '');

  function numeroJugadores(e) {
    setUser(e.target.value);
    // console.log(e.target.value)
  }


  function ingresoUsuarios(e) {
    setIngresoUsuario(e.target.value);
    console.log(e.target.value);
  }

  return (
    <Box
      className="container"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card align="center" maxW="sm">
        <CardHeader>
          <Heading size="md">Elige un de las siguientes Opciones</Heading>
        </CardHeader>
        <CardBody>
          {/* <Text>View a summary of all your customers over the last month.</Text> */}

          <form value={ingresoUsuario} onSubmit={saveData}>

            <Text>
              <Select value={user} name="select" onChange={numeroJugadores}>
                <option>Elige el numero de jugadores</option>
                {/* <option>Un jugador</option> */}
                <option>Dos jugadores</option>
              </Select>
            </Text>


            <Box margin={"10px"}>
              <Input
                margin={"5px"}
                variant="filled"
                name="nick1"
                type="text"
                onChange={gudador}
                placeholder="Nombre  Primer Jugador : X"
              />

              <Input
                margin={"5px"}
                variant="filled"
                name="nick2"
                onChange={gudador}
                type="text"
                placeholder="Nombre  Segundo Jugador : O"
              />
            </Box>

          </form>
        </CardBody>
        <CardFooter>
          <Link to="/Juego">
            <Button onClick={gurdarNombres} disabled={!validForm}>Inicio</Button>
          </Link>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default Registro;
