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
import ProfileModal from './ProfileModal';

export default function Header({ showSetting, showSideBar,showProfile }) {
  
  return (
    <Box  w="100%">
      <Flex
        px={{ base: '10px', lg: '20px' }}
        alignItems="center"
        justifyContent="space-between"
        py="20px"
        bg="black"
        w="100%"
        id="header"
        color="white"
        position="relative"
      >
        <Flex
          mr="50px"
          display={{ base: 'none', lg: 'flex' }}
          flexBasis="225px"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Image w="25px" alt="logo" src="/images/hamburger.png" />
          </Box>
          <Box>
            <Image w={{ base: '100px', lg: '200px' }} alt="logo" src="/images/headerlogo.png" />
          </Box>
        </Flex>

        <Flex
          flexBasis={{ base: '100%', lg: 'calc(100% - 275px)' }}
          alignItems="center"
          justifyContent="flex-end"
          position="relative"
        >
          <Box
            display={{ base: 'none', lg: 'block' }}
            mr="20px"
            position="absolute"
            left="25%"
            sx={{
              transform: 'translateX(-50%)',
            }}
            bg="bg"
            w={{ base: '100%', lg: '550px' }}
          >
            <Input placeholder="Search" />
          </Box>
          <Box display={{ base: 'block', lg: 'none' }} as="button" onClick={showSideBar} mr="10px">
            <Image w="25px" alt="logo" src="/images/hamburger.png" />
          </Box>
          <Box display={{ base: 'block', lg: 'none' }} mr="20px" bg="bg" w="100%" maxW="250px">
            <Input placeholder="Search" />
          </Box>
          <Box display={{ base: 'none', lg: 'block' }} px="10px">
            <Image w="10px" alt="3dot" src="/images/threedotv.png" />
          </Box>
          <Box as="button" onClick={showSetting} px={{ base: '0', lg: '10px' }}>
            <Image w={{ base: '35px', lg: '25px' }} alt="setting" src="/images/setting.png" />
          </Box>
          <Box as="button" onClick={showProfile} px="10px">
            <Image borderRadius="50%" h="33px" w="33px" alt="profile" src="/images/1.jpg" />
          </Box>
        </Flex>
      </Flex>

   

    </Box>
  );
}
