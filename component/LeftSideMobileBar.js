import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Box, Heading, Link, Text, Flex, Stack, Image } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react";
  
export default function LeftSideMobileBar({ isOpen, onClose }) {

  const [value, setValue] = React.useState("1");
  const [secondValue, setSecondValue] = React.useState("1");
  const [thirdValue, setThirdValue] = React.useState("1");
  const [fourthValue, setFourthValue] = React.useState("1");

    const [placement, setPlacement] = React.useState("left");
  return (
    <Drawer  placement={placement} onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent bg="bg">
      <DrawerBody>
      <Box w="100%">
      <Box >
          <Image
            w="200px"
            alt="logo"
            src="/images/headerlogo.png"
          />
        </Box>
      <Box mt="20px" w="180px" bg="black">
        <Flex w="100%" as="button"  alignItems="center">
        <Image src="/images/Inbox.png"  w="25px" alt="left" />
          <Flex ml="10px"  w="100%" justifyContent="space-between">
            <Text  fontSize="14px" color="white">
              Inbox
            </Text>
            <Text  fontSize="14px" color="white">
              1,807
            </Text>
          </Flex>
        </Flex>
        <Flex as="button" >
          <Image mr="10px" src="/images/Sent.svg" w="25px" alt="sent" />
          <Text fontSize="14px" color="white">
            Sent
          </Text>
        </Flex>
        <Flex as="button" >
          <Image mr="10px" src="/images/Starred.svg" w="25px" alt="starred" />
          <Text fontSize="14px" color="white">
            Starred
          </Text>
        </Flex>
        <Flex as="button" >
          <Image mr="10px" src="/images/Less.svg" w="25px" alt="less" />
          <Text fontSize="14px" color="white">
            Less
          </Text>
        </Flex>
        <Flex as="button" >
          <Image mr="10px" src="/images/Important.svg" w="25px" alt="imp" />
          <Text fontSize="14px" color="white">
            Important
          </Text>
        </Flex>
        <Flex as="button" >
          <Image mr="10px" src="/images/Archive.svg" w="25px" alt="archieve" />
          <Text fontSize="14px" color="white">
            Archive
          </Text>
        </Flex>
        <Flex as="button" >
          <Image mr="10px" src="/images/Trash.svg" w="25px" alt="trash" />
          <Text fontSize="14px" color="white">
            Trash
          </Text>
        </Flex>
        <Flex as="button" >
          <Image mr="10px" src="/images/Draft.svg" w="25px" alt="draft" />
          <Text fontSize="14px" color="white">
            Drafts
          </Text>
        </Flex>
        <Flex as="button" >
          <Image mr="10px" src="/images/Spam.svg" w="25px" alt="spam" />
          <Text fontSize="14px" color="white">
            Spam
          </Text>
        </Flex>
      </Box>
    </Box>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  
  
 
  );
}
