import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ButtonJ from "../Botones/Button";



export default function Descripcion() {


  return (
    <>
      <Box className="contenedor">
        {/* CARD CON LAS REGLAS  */}

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height={"100%"}
        >
          <Card
            display={"flex"}
            align={"center"}
            justifyContent={"center"}
            bordercolor={"#00913F"}
            border={"3px solid black"}
            width={"50%"}
            height={"auto"}
          >
            <CardHeader>
              <Heading size="md"> Descripcion</Heading>
              <hr />
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Proyecto
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    El <b > Triqui</b>  también
                    conocido como tres en línea, juego del gato o equis cero
                    entre muchos nombres más, comúnmente se juega con un lápiz y
                    papel. En este participan 2 jugadores: X y O, que deben
                    tomar turnos alternadamente para marcar los espacios en un
                    tablero de 3×3 buscando formar una línea de 3 figuras
                    seguidas en cualquier dirección.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Herramientas
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    <Badge margin="5px" variant="outline" colorScheme="red">
                      Javascript
                    </Badge>
                    <Badge margin="5px" variant="outline" colorScheme="red">
                      React
                    </Badge>
                    <Badge margin="5px" variant="outline" colorScheme="red">
                      Chakra Iu
                    </Badge>
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Desarrolladores
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    <Badge margin="5px" variant="outline" colorScheme="green">
                      Luis Antonio
                    </Badge>
                    <Badge margin="5px" variant="outline" colorScheme="green">
                      Franco Muñoz
                    </Badge>
                    <Badge margin="5px" variant="outline" colorScheme="green">
                      Luis Garcia
                    </Badge>
                    <Badge margin="5px" variant="outline" colorScheme="green">
                      Robet Guerra
                    </Badge>
                    <Badge margin="5px" variant="outline" colorScheme="green">
                      Luis Hernandez
                    </Badge>
                    <Badge margin="5px" variant="outline" colorScheme="green">
                      Liseth Moreno
                    </Badge>
                  </Text>
                </Box>
              </Stack>
            </CardBody>

          </Card>
        </Box>
      </Box>
    </>
  );
}
