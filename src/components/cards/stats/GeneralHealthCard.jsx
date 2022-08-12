import React from "react";
import { Box, Img, Text, Flex } from "@chakra-ui/react";
import generalHealth from "../../../assets/dashboard/cards/general_health.png";

function GeneralHealthCard() {
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
      <Img src={generalHealth} alt="general health" ml="15px" width="84px" />
      <Box ml="15px">
        <Text fontWeight="400" color="#1A1A1A" fontSize="12px">
          General Health
        </Text>
        <Text
          fontWeight="400"
          color="#008CEF"
          fontSize="20px"
          mt="9px"
          mb="16px"
        >
          82%
        </Text>
        <Flex alignItems="center">
          <Box
            width="5px"
            height="5px"
            borderRadius="100%"
            backgroundColor="#008CEF"
            mr="5px"
          ></Box>
          <Text fontSize="8px">40% more than last week</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default GeneralHealthCard;
