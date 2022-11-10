import React from "react";
import { Box, Heading, Link, Text, Flex, Image } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
export default function MailCard({ read = false, onToggle }) {
  return (
    <Box 
    as="button"
      py="10px"
      w="100%"
      borderWidth="1px"
      borderColor="#3e3e3e"
      bg={read ? "#1f1f1f" : "#2c2c2c"}
      px="20px"
      onClick={onToggle}
    >
      <Flex position="relative" alignItems="flex-start">
        <Checkbox size='sm'></Checkbox>
        <Box ml="10px">
          <Flex alignItems="center">
            <Image src="/images/Notification.png" w="12px" mr="10px" alt="notification" />
            <Text color="white" fontSize="10px">
              Duolingo
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Image src="/images/star.png" w="12px" mr="10px" alt="star" />
            <Text color="white" fontSize="10px">
              We missed you! Our top tip to get you back on track
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Image src="/images/Important.png" w="12px" mr="10px" alt="imp" />
            <Text color="#7e7e7e" fontSize="10px">
              Make your learning 3X more effective
            </Text>
          </Flex>
        </Box>
        <Box position="absolute" top="0" right="20px">
            <Text color="white" fontSize="10px">
                2.48pm
            </Text>
        </Box>
      </Flex>
    </Box>
  );
}
