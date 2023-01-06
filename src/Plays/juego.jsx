import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Table,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react";
import React from "react";

import ButtonJ from "../Botones/Button";

import "../menu/Menu.css";
import "./Juego.css";
export default function Juego() {
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
              <Heading size="md"> Juego </Heading>
              <hr />
              <br />
            </CardHeader>

            <CardBody></CardBody>

            <Table className="tabla-contenido">
              <Tr>
                <Th className="tg-tabla">Nombre</Th>
                <Th className="tg-tabla">Puntaje</Th>
              </Tr>
              <Tr>
                <Td className="tg-tabla"></Td>
                <Td className="tg-tabla"></Td>
              </Tr>
            </Table>

            <Box className="tablero">
              <span className="box" data="1"></span>
              <span className="box" data="2"></span>
              <span className="box" data="3"></span>
              <span className="box" data="4"></span>
              <span className="box" data="5"></span>
              <span className="box" data="6"></span>
              <span className="box" data="7"></span>
              <span className="box" data="8"></span>
              <span className="box" data="9"></span>
            </Box>

            <ButtonJ nombreBoton="Renderizar" />
            <ButtonJ />
          </Card>
        </Box>
      </Box>
    </>
  );
}
