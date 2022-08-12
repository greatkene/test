import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import FooterItems from "../utils/FooterItems";

function Footer() {
  return (
    <Flex mt={"83px"} mb="34px">
      <Text
        fontSize="25px"
        fontWeight="400"
        width={"209px"}
        mr="73px"
        ml="40px"
      >
        Scheduled Appointment and Reminder
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        {FooterItems.map((item, index) => (
          <Box key={index} mr="68px">
            <Box
              backgroundColor={item.date === "Today" ? "#655EB0" : "#DEDDEE"}
              width="83px"
              height="26px"
              borderRadius="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                fontSize="14px"
                fontWeight="400"
                textAlign="center"
                color={item.date === "Today" ? "#F5FBFF" : "#655EB0"}
              >
                {item.date}
              </Text>
            </Box>
            <Text fontSize="14px" fontWeight="400" mt={"11px"}>
              {item.title}
            </Text>
            <Text
              fontSize="14px"
              fontWeight="400"
              color="#4A5877"
              width="202px"
            >
              {item.location}
            </Text>
            <Text fontSize="14px" fontWeight="400" mt={"11px"} color="#4A5877">
              {item.time}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default Footer;
