import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import happy from "../../assets/dashboard/emojis/happy.png";
import okay from "../../assets/dashboard/emojis/okay.png";
import confused from "../../assets/dashboard/emojis/confused.png";
import arrow from "../../assets/dashboard/arrow.svg";

function EmojiCard() {
  const emoji = [
    {
      title: "Sad",
      active: false,
    },
    {
      emoji: confused,
      title: "Confused",
      active: false,
    },
    {
      emoji: okay,
      title: "Just Okay",
      active: false,
    },
    {
      emoji: happy,
      title: "Happy",
      active: true,
    },
  ];

  return (
    <Box
      width="401px"
      height="154px"
      backgroundColor={"#FFF"}
      mr="40px"
      borderRadius="5px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.05)"
    >
      <Text fontSize="20px" mt="20px" mb="28px" ml="18px" fontWeight="400">
        How are you doing today?
      </Text>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {emoji.map((item, index) => (
          <Box
            key={index}
            width="67px"
            height="64.09px"
            borderRadius="5px"
            border="1px solid #E6E6F0"
            borderColor={item.active ? "#655EB0" : "#E6E6F0"}
            ml="15px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            cursor="pointer"
          >
            <Img src={item.emoji} alt={item.title} width="35px" />
            <Text fontSize="10px" fontWeight="400">
              {item.title}
            </Text>
          </Box>
        ))}
        <Box
          backgroundColor="#655EB0"
          width="37px"
          height="37px"
          borderRadius="100%"
          m="15px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Img src={arrow} alt="arrow" width="12.27px" />
        </Box>
      </Box>
    </Box>
  );
}

export default EmojiCard;
