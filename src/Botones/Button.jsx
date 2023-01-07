import { Button, CardFooter, Stack } from "@chakra-ui/react";
import { Link} from "react-router-dom";
import React from "react";
import { GiExitDoor } from "react-icons/gi";
import "./botones.css";
import "../menu/Menu.css";

export default function ButtonJ(props) {
  return (
    <>
      <Button type="submit">
        <Link
          to="/Menu"
          backgroundcolor={" #00913F"}
          color={"#ffff"}
          fontFamily={"Raleway, sans-serif"}
          fontWeight={"600"}
          fontSize={" 18px"}
          letterSpacing={"1.3px"}
          padding={"16px 40px"}
          textDecoration={"none"}
          texttransform={"uppercase"}
          decoration={"none"}
          w="60%"
          margin="20%"
          rightIcon={<GiExitDoor />}
        >
          {props.nombreBoton}
          <GiExitDoor />
        </Link>
      </Button>
    </>
  );
}
