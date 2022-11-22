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
import { AiOutlineMail } from "react-icons/ai";

export default function LeftSideBar({ onOpen }) {
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        bg="#8b3ad9"
        h="50px"
        w="150px"
        borderRadius="10px"
        as="button"
        onClick={onOpen}
        ml="-20px"
      >
        <Image src="/images/pencil.png" w="25px" alt="pencil" />
        <Text ml="15px" color="white">
          Compose
        </Text>
      </Flex>
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
  );
}
