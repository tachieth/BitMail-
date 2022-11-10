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

export default function LeftSideBar({onOpen}) {
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
      >
        <Image src="/images/pencil.png" w="25px" />
        <Text ml="15px" color="white">
          Compose
        </Text>
      </Flex>
      <Box mt="20px" w="250px" bg="black">
        <Flex as="button" ml="25px" alignItems="center">
          <AiOutlineMail color="white" />
          <Flex ml="15px" w="200px" justifyContent="space-between">
            <Text fontSize="14px" color="white">
              Inbox
            </Text>
            <Text mr="10px" fontSize="14px" color="white">
              1,807
            </Text>
          </Flex>
        </Flex>
        <Flex as="button" ml="20px">
          <Image mr="10px" src="/images/Sent.svg" w="25px" />
          <Text fontSize="14px" color="white">
            Sent
          </Text>
        </Flex>
        <Flex as="button" ml="20px">
          <Image mr="10px" src="/images/Starred.svg" w="25px" />
          <Text fontSize="14px" color="white">
            Starred
          </Text>
        </Flex>
        <Flex as="button" ml="20px">
          <Image mr="10px" src="/images/Less.svg" w="25px" />
          <Text fontSize="14px" color="white">
            Less
          </Text>
        </Flex>
        <Flex as="button" ml="20px">
          <Image mr="10px" src="/images/Important.svg" w="25px" />
          <Text fontSize="14px" color="white">
            Important
          </Text>
        </Flex>
        <Flex as="button" ml="20px">
          <Image mr="10px" src="/images/Archive.svg" w="25px" />
          <Text fontSize="14px" color="white">
            Archive
          </Text>
        </Flex>
        <Flex as="button" ml="20px">
          <Image mr="10px" src="/images/Trash.svg" w="25px" />
          <Text fontSize="14px" color="white">
            Trash
          </Text>
        </Flex>
        <Flex as="button" ml="20px">
          <Image mr="10px" src="/images/Draft.svg" w="25px" />
          <Text fontSize="14px" color="white">
            Drafts
          </Text>
        </Flex>
        <Flex as="button" ml="20px">
          <Image mr="10px" src="/images/Spam.svg" w="25px" />
          <Text fontSize="14px" color="white">
            Spam
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
