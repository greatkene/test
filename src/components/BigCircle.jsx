import React from "react";
import { Box } from "@chakra-ui/react";
function BigCircle() {
  return (
    <Box
      width="650px"
      height="650px"
      borderRadius="100%"
      backgroundColor={"#FFE0B7"}
      position={"absolute"}
      top={"200px"}
      left={"76px"}
      zIndex="1"
    ></Box>
  );
}

export default BigCircle;
