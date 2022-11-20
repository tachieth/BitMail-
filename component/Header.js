import React from "react";
import {
  Box,
  Heading,
  Input,
  Link,
  Text,
  Flex,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

export default function Header({showSetting}) {
  return (
    <Flex
      px="20px"
      alignItems="center"
      justifyContent="space-between"
      py="20px"
      bg="black"
      w="100%"
      id="header"
      color="white"
    >
      <Flex mr="50px" flexBasis="225px" alignItems="center" justifyContent="center">
        <Box >
          <Image w="25px" alt="logo" src="/images/hamburger.png" />
        </Box>
        <Box>
          <Image w="200px" alt="logo" src="/images/headerlogo.png" />
        </Box>
      </Flex>

      <Flex
        flexBasis="calc(100% - 275px)"
        alignItems="center"
        justifyContent="flex-end"
        position="relative"
      >
        <Box mr="20px" position="absolute" left="45%" sx={{ 
          transform: "translateX(-50%)"
        }} bg="bg" w="550px">
          <Input placeholder="Search" />
        </Box>
        <Box  px="10px">
          <Image w="10px" alt="3dot" src="/images/threedotv.png" />
        </Box>
        <Box as="button" onClick={showSetting} px="10px">
          <Image w="25px" alt="setting" src="/images/setting.png" />
        </Box>
        <Box  px="10px">
          <Image
            borderRadius="50%"
            h="33px"
            w="33px"
            alt="setting"
            src="/images/1.jpg"
          />
        </Box>
       
      </Flex>
    </Flex>
  );
}
