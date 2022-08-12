import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import purpleRing from "../../assets/dashboard/purple_ring.png";
import PurpleCardCalendar from "../../utils/PurpleCardCalendar";
function PurpleCard() {
  return (
    <Box
      width={"222px"}
      height="328px"
      ml="40px"
      borderRadius={"20px"}
      backgroundColor={"#655EB0"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box
        width="118px"
        height="118px"
        backgroundImage={`url(${purpleRing})`}
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius={"20px"}
        mt="25px"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text
          fontSize="36px"
          fontWeight="400"
          color={"#FFFFFF"}
          textAlign={"center"}
        >
          69
        </Text>
        <Text
          fontSize="12px"
          fontWeight="400"
          color={"#FFFFFF"}
          textAlign={"center"}
        >
          of 8500 steps
        </Text>
      </Box>
      <Box width="172px">
        <Text
          fontSize="12px"
          fontWeight="400"
          color={"#FFFFFF"}
          textAlign={"right"}
        >
          Goal
        </Text>
        <Box
          width="172px"
          height="1px"
          backgroundColor={"transparent"}
          borderRadius={"0.5px"}
          borderTop={"1px dashed #8D86C6"}
        ></Box>
        <Text
          fontSize="12px"
          fontWeight="400"
          color={"#FFFFFF"}
          textAlign={"right"}
        >
          <Text fontWeight="500">8500</Text>
          <Text color="#F5FBFF">steps</Text>
        </Text>
      </Box>
      <Flex alignItems={"baseline"} transform={"translateY(-20px)"}>
        {PurpleCardCalendar.map((item, index) => (
          <Box mx="5px" color={"#FFFFFF"}>
            <Box
              key={index}
              width="6px"
              height={item.barHeight}
              borderRadius="20px"
              backgroundColor={"#FFF"}
            ></Box>
            <Text>{item.day}</Text>
          </Box>
        ))}
      </Flex>
      <Text color={"#FFFFFF"} textAlign={"left"} width="172px">
        <Text fontWeight="400" fontSize={"12px"}>
          Steps
        </Text>
        <Text display={"flex"} alignItems={"center"}>
          <Text fontWeight="500" fontSize={"20px"}>
            2925
          </Text>
          <Text color="#F5FBFF" fontSize={"12px"} ml="5px">
            Avg steps/week
          </Text>
        </Text>
      </Text>
    </Box>
  );
}

export default PurpleCard;
