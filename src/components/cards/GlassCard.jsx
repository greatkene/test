import React from "react";
import { Box, Text, Avatar, Img } from "@chakra-ui/react";
import pinkRing from "../../assets/dashboard/pink_ring.svg";
import animoji from "../../assets/dashboard/animoji.svg";
import heart from "../../assets/dashboard/heart.svg";
function GlassCard() {
  return (
    <Box
      ml={"163px"}
      height="163px"
      width="366px"
      borderRadius="5px"
      backgroundColor={"rgba(255, 255, 255, 0.38)"}
      backdropFilter="blur(16px)"
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        width="136px"
        height="136px"
        backgroundImage={`url(${pinkRing})`}
        backgroundSize="cover"
        backgroundPosition="center"
        ml="29px"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        position={"relative"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width="38px"
          height="38px"
          borderRadius="100%"
          backgroundColor={"#FFE7C4"}
          position={"absolute"}
          top="84px"
          left="102px"
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width="30px"
            height="30px"
            borderRadius="100%"
            backgroundColor={"#F05983"}
          >
            <Img src={heart} />
          </Box>
        </Box>
        <Box
          backgroundColor="#008CEF"
          width="114px"
          height="114px"
          borderRadius="100%"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Avatar
            src={animoji}
            size="88px"
            name="Animoji"
            backgroundColor={"transparent"}
          />
        </Box>
      </Box>
      <Box>
        <Text
          fontSize="12px"
          fontWeight="400"
          display={"flex"}
          alignItems={"baseline"}
          ml="21px"
        >
          <Text fontSize="50px">120</Text>
          <Text fontSize="18px" fontWeight="500">
            bpm
          </Text>
        </Text>
        <Text fontSize="12px" fontWeight="400" width="158px" ml="21px">
          Pulse is the most important physiological indicator
        </Text>
      </Box>
    </Box>
  );
}

export default GlassCard;
