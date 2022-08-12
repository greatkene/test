import React from "react";
import DashboardLayout from "../layouts/dashboardLayout";
import { Text, Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BigCircle from "../components/BigCircle";
import GlassCard from "../components/cards/GlassCard";
import EmojiCard from "../components/cards/EmojiCard";
import PurpleCard from "../components/cards/PurpleCard";
import GeneralHealthCard from "../components/cards/stats/GeneralHealthCard";
import SleepCard from "../components/cards/stats/SleepCard";
import BloodPressureCard from "../components/cards/stats/BloodPressureCard";
import WaterBalanceCard from "../components/cards/stats/WaterBalanceCard";
import HeightAndWeightCard from "../components/cards/stats/HeightAndWeightCard";
import GlucoseCard from "../components/cards/stats/GlucoseCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <Box position={"relative"}>
        <BigCircle />
        <Box zIndex="999999" position={"absolute"} width="100%">
          <Header />
          <Text fontSize="36px" fontWeight="400" ml={"40px"} mt={"30px"}>
            Dashboard
          </Text>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            marginTop="33px"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <GlassCard />
              <EmojiCard />
            </Flex>
          </Flex>
          <Flex
            marginTop="76px"
            justifyContent="space-between"
            alignItems="center"
          >
            <PurpleCard />
            <Box ml="52px">
              <Flex>
                <GeneralHealthCard />
                <SleepCard />
                <BloodPressureCard />
              </Flex>
              <Flex>
                <WaterBalanceCard />
                <HeightAndWeightCard />
                <GlucoseCard />
              </Flex>
            </Box>
          </Flex>
          <Footer />
        </Box>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
