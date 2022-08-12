import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function SleepCard() {
  const bars = [
    {
      height: 31,
      color: "#008CEF",
    },
    {
      height: 49,
      color: "#008CEF",
    },
    {
      height: 13,
      color: "#008CEF",
    },
    {
      height: 43,
      color: "#008CEF",
    },
    {
      height: 31,
      color: "#008CEF",
    },
    {
      height: 49,
      color: "#003CBF",
    },
  ];
  return (
    <Box
      width={"222px"}
      height="142px"
      borderRadius={"20px"}
      backgroundColor={"#FFF"}
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.05)"
      m="26px 22px"
    >
      <Flex alignItems="baseline" ml="21px" mt="24px">
        {bars.map((bar, index) => (
          <Box
            key={index}
            height={`${bar.height}px`}
            width="6px"
            backgroundColor={bar.color}
            borderRadius="20px"
            mr="15px"
          ></Box>
        ))}
      </Flex>
      <Box ml="21px">
        <Text fontSize="14px" fontWeight="400" mt="9px" mb="5px">
          Sleep
        </Text>
        <Box display="flex" alignItems="baseline">
          <Text fontSize="20px" mr="5px">
            6.9
          </Text>
          <Text fontSize="10px" color="#4A5877" fontWeight="400">
            Avg hrs/week
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default SleepCard;
