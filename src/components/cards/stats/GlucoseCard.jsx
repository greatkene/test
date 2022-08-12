import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import glucose from "../../../assets/dashboard/cards/glucose.png";

function GlucoseCard() {
  return (
    <Box
      width={"222px"}
      height="142px"
      borderRadius={"20px"}
      backgroundColor={"#FFF"}
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.05)"
      m="26px 22px"
    >
      <Flex mt="13px" ml="21px" alignItems="center">
        <Img
          src={glucose}
          alt="general health"
          ml="15px"
          width="45px"
          mr="23px"
        />
        <Flex alignItems="baseline" color="#68CA87">
          <Text fontSize="20px" fontWeight="400">
            85
          </Text>
          <Text fontSize="13px">mg/dl</Text>
        </Flex>
      </Flex>
      <Box ml="23px">
        <Text fontSize="14px" fontWeight="400" mt="9px" mb="5px">
          Glucose
        </Text>
        <Text fontSize="10px" color="#4A5877" width="180px">
          The normal concenteration of glucose is 120mg/dl
        </Text>
      </Box>
    </Box>
  );
}

export default GlucoseCard;
