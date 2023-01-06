import { Box, Input, TagLabel, Text } from "@chakra-ui/react";
import React from 'react'
import "./AcordeonStyle.css"

export default function Acordeon() {
  return (
    <>
      <Box className="wrapper">
        <Box className="half">
          <Box className="tab">
            <Input
              variant="filled"
              className="acor-input"
              id="tab-one"
              type="checkbox"
              name="tabs"
            />
            <label htmlFor="tab-one">Reglas 1</label>
            <Box
              className="tab-content"
              maxW="maxW"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Text>
                Cada jugador solo debe colocar su símbolo una vez por turno y no
                debe ser sobre una casilla ya jugada.
              </Text>
            </Box>
          </Box>
          <Box className="tab">
            <Input
              variant="filled"
              className="acor-input"
              id="tab-two"
              type="checkbox"
              name="tabs"
            />
            <label htmlFor="tab-two">Regla 2</label>
            <Box
              className="tab-content"
              maxW="maxW"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Text>
                En caso de que el jugador haga trampa el ganador será el otro.
              </Text>
            </Box>
          </Box>
          <Box className="tab">
            <Input
              variant="filled"
              className="acor-input"
              id="tab-three"
              type="checkbox"
              name="tabs"
            />
            <label htmlFor="tab-three">Reglas 3</label>
            <Box
              className="tab-content"
              maxW="maxW"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Text>
                Se debe conseguir realizar una línea recta o diagonal por
                símbolo.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
