import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <>
      <Box margin="" width={"100%"} height={"100%"}>
        <Box
          textAlign={"center"}
          display={"flex"}
          width={"100%"}
          height={"100% "}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to="/Descripcion" className="btn-horizontal">
            Description
          </Link>
          <Link to="/Reglas" className="btn-horizontal">
            Lista de Reglas
          </Link>
          <Link to="/Registro" className="btn-horizontal">
            Jugar
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Menu;
