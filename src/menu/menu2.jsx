import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";

const Menu2 = () => {
    return (
        <Box margin="" width={"auto"} height={"100%"} /* bg="gray" */>
        <Box
          textAlign={"center"}
          display={"flex"}
          flexDirection="column"
          width={"100%"}
          height={"100% "}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to="/Menu" className="btn-horizontal">
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
    );
}

export default Menu2;
