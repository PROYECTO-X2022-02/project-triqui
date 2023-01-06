import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";;


import ButtonJ from "../Botones/Button";
import Acordeon from "../Acordeon/acordeon";
export default function Reglasj() {
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
              <Heading size="md"> Reglas del Juego</Heading>
              <hr />
            </CardHeader>
            <CardBody>
              <Text>
                Ten en cuenta las Reglas del juego para que te diviertas
              </Text>
            </CardBody>
            <Acordeon />
            <ButtonJ />
          </Card>
        </Box>
      </Box>
    </>
  );
}
