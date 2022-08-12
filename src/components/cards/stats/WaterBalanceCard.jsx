import React from "react";
import { Box, Text, Flex, Img } from "@chakra-ui/react";
import waterBalance from "../../../assets/dashboard/cards/water_balance.png";
function WaterBalanceCard() {
  return (
    <Box
      width={"222px"}
      height="142px"
      borderRadius={"20px"}
      backgroundColor={"#FFF"}
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.05)"
      m="26px 22px"
      display="flex"
      alignItems="center"
    >
      <Img src={waterBalance} alt="general health" ml="15px" width="84px" />
      <Box ml="15px">
        <Text fontWeight="400" color="#1A1A1A" fontSize="12px">
          Water Balance
        </Text>
        <Text
          fontWeight="400"
          color="#008CEF"
          fontSize="20px"
          mt="6px"
          mb="22px"
        >
          62%
        </Text>
        <Flex alignItems="center">
          <Box
            width="5px"
            height="5px"
            borderRadius="100%"
            backgroundColor="red"
            mr="5px"
          ></Box>
          <Text fontSize="8px">10% less than last week</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default WaterBalanceCard;
