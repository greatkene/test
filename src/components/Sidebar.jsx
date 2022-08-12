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
import CustomLink from "../utils/CustomLink";
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
          
          <CustomLink key={item.id} icon={item.icon} to={item.to}  >
            {item.name}
          </CustomLink>
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
