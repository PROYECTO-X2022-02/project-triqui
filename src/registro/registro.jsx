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
  const [ingresoUsuario, setIngresoUsuario] = useState();

  const saveData = (e) => {
    const data = [];
    e.preventDefault();

    console.log(e.target.select.value);

    if (e.target.select.value === "Un jugador") {
      console.log(e.target.nick.value);
    } else if (e.target.select.value === "Dos jugadores") {
      console.log(e.target.nick1.value);
      console.log(e.target.nick2.value);
    }
  };

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
                <option>Un jugador</option>
                <option>Dos jugadores</option>
              </Select>
            </Text>

            {user === "Un jugador" && (
              <Box margin={"10px"}>
                <Input
                  margin={"10px"}
                  variant="filled"
                  name="nick"
                  type="text"
                  placeholder="Nombre  Jugador"
                />
              </Box>
            )}

            {user === "Dos jugadores" && (
              <Box margin={"10px"}>
                <Input
                  margin={"5px"}
                  variant="filled"
                  name="nick1"
                  type="text"
                  placeholder="Nombre  Primer Jugador"
                />

                <Input
                  margin={"5px"}
                  variant="filled"
                  name="nick2"
                  type="text"
                  placeholder="Nombre  Segundo Jugador"
                />
              </Box>
            )}
          </form>
        </CardBody>
        <CardFooter>
          <Link to="/Juego">
            <Button>Inicio</Button>
          </Link>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default Registro;
