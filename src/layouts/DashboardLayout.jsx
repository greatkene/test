import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <>
      <Flex>
        <Flex>
          <Sidebar />
        </Flex>
        <Box
          flexGrow={1}
          height="100vh"
          backgroundColor="#F5FBFF"
          width={"83vw"}
          overflowY="scroll"
        >
          {children}
        </Box>
      </Flex>
    </>
  );
}

export default DashboardLayout;
