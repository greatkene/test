import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import weight from "../../../assets/dashboard/cards/weight.png";
import height from "../../../assets/dashboard/cards/height.png";
function HeightAndWeightCard() {
  const data = [
    {
      number: 182,
      title: "Height",
      metric: "cm",
      image: height,
    },
    {
      number: 75,
      title: "Height",
      metric: "kg",
      image: weight,
    },
  ];

  return (
    <Box
      width={"222px"}
      height="142px"
      borderRadius={"20px"}
      backgroundColor={"#FFF"}
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.05)"
      m="26px 22px"
    >
      {data.map((item, index) => (
        <Flex mt="13px" ml="21px" alignItems="center" key={index}>
          <Img
            src={item.image}
            alt={item.title}
            ml="14px"
            width="45px"
            mr="19px"
          />
          <Box>
            <Box display="flex" alignItems="baseline">
              <Text fontSize="20px" fontWeight="400">
                {item.number}
              </Text>
              <Text fontSize="12px">{item.metric}</Text>
            </Box>
            <Text fontSize="10px" fontWeight="400">
              {item.title}
            </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

export default HeightAndWeightCard;
