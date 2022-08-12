import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import blood from "../../../assets/dashboard/cards/blood.png";

function BloodPressureCard() {
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
          src={blood}
          alt="general health"
          ml="15px"
          width="45px"
          mr="23px"
        />
        <Text fontSize="20px" fontWeight="400" color="#F05983">
          120/80
        </Text>
      </Flex>
      <Box ml="23px">
        <Text fontSize="14px" fontWeight="400" mt="9px" mb="5px">
          Blood Pressure
        </Text>
        <Text fontSize="10px" color="#4A5877" width="180px">
          Blood pressure can fall and rise several times in a day
        </Text>
      </Box>
    </Box>
  );
}

export default BloodPressureCard;
