import React from "react";
import { Flex, Img, Text, Box } from "@chakra-ui/react";
import notifications from "../assets/notifications.svg";
function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text ml={"40px"} mt={"16px"}>
        <Text fontSize="14px" fontWeight="400">
          Welcome back
        </Text>
        <Text fontWeight="400" fontSize="18px">
          Boluwatife Sokunbi 😀{" "}
        </Text>
      </Text>
      <Flex alignItems="center" mr={"46px"}>
        <Img src={notifications} alt="notifications" />
        <Text ml={"10px"} fontSize="16px">
          Notifications
        </Text>
      </Flex>
    </Flex>
  );
}

export default Header;
