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
import Index from "../Juego/Index";

import React from "react";

import ButtonJ from "../Botones/Button";

import "../menu/Menu.css";
import "./Juego.css";
import Menu2 from "../menu/menu2";
export default function Juego() {
  return (
    <Box display={"flex"} width="100%" height="100%">
      <Menu2/>
      <Box height={"100%"} width="100%" >
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
            width={"50%"}
            height={"auto"}
            border= "2px solid white"
            p={10}
          background={"black"}
            boxShadow= "inset 0 0 10px red,0 0 10px red"  
            
          >
            <CardHeader>
              <Heading
                size="md"
                /*       fontFamily="sans-serif"
                fontSize={30}
                color="#FB4264"
                textShadow="0 0 3vw #F40A35" */
                position="relative"
                overflow="hidden"
                filter="brightness(200%)"
              >
                <span className="text">TRIQUI</span>
                <span className="gradient"></span>
                <span className="spotlight"></span>
              </Heading>

              <br />
            </CardHeader>
            <Index />
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
