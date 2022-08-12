import React from "react";
import {
  Flex,
  Img,
  UnorderedList,
  Link,
  ListItem,
  Text,
  Box,
} from "@chakra-ui/react";
import logo from "../assets/dashboard/logo.svg";
import sidebarItems from "../utils/sidebarItems";
function Sidebar() {
  return (
    <Flex flexDir={"column"} width="238px">
      <Img
        src={logo}
        alt="logo"
        marginTop={"35px"}
        marginLeft="35px"
        width="80px"
        marginBottom="107px"
      />
      <UnorderedList listStyleType="none" position={"relative"}>
        {sidebarItems.slice(0, -1).map((item, index) => (
          <ListItem
            as={Link}
            key={index}
            width="100%"
            height={"52px"}
            backgroundColor={item.isActive ? "#F8F8FC" : "transparent"}
            display={"flex"}
            position={"relative"}
          >
            {item.isActive && (
              <Box
                position={"absolute"}
                backgroundColor="#655EB0"
                height="27px"
                width="6px"
                right="0"
                transform="translateY(13px)"
                borderRadius="5px 0px 0px 5px"
              ></Box>
            )}
            <Link href={item.to} display="flex" alignItems="center">
              <Img
                src={item.icon}
                alt={item.name}
                ml={"36.67px"}
                mr={"27.67px"}
              />
              <Text fontSize="16px" fontWeight="400">
                {item.name}
              </Text>
            </Link>
          </ListItem>
        ))}
        <ListItem
          width="100%"
          height={"52px"}
          backgroundColor={
            sidebarItems[sidebarItems.length - 1].isActive
              ? "#F8F8FC"
              : "transparent"
          }
          display={"flex"}
          bottom={"-150px"}
          position={"absolute"}
        >
          <Link
            href={sidebarItems[sidebarItems.length - 1].to}
            display="flex"
            alignItems="center"
          >
            <Img
              src={sidebarItems[sidebarItems.length - 1].icon}
              alt={sidebarItems[sidebarItems.length - 1].name}
              ml={"36.67px"}
              mr={"27.67px"}
            />
            <Text fontSize="16px" fontWeight="400">
              {sidebarItems[sidebarItems.length - 1].name}
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
}

export default Sidebar;
