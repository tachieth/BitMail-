import React from "react";
import { Box, Heading, Link, Text, Flex, Image } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";

export default function MailCard() {
  return (
    <Box w="500px" borderTopWidth="1px" borderColor="#3e3e3e">
      <Flex mt="10px">
        <Flex ml="20px" alignItems="center" as="button">
          <Image src="/images/Archive.svg" w="30px" alt="archieve" />
          <Text mt="3px" fontSize="11px" color="white">
            Archive
          </Text>
        </Flex>
        <Flex ml="20px" alignItems="center" as="button">
          <Image src="/images/Trash.svg" w="30px" alt="trash" />
          <Text mt="3px" fontSize="11px" color="white">
            Delete
          </Text>
        </Flex>

        <Flex ml="20px" alignItems="center" as="button">
          <AiOutlineMail size="17px" color="white" />
          <Text mt="3px" ml="10px" fontSize="11px" color="white">
            Mark unread
          </Text>
        </Flex>
        <Flex ml="20px" alignItems="center" as="button">
          <Image src="/images/Spam.svg" w="30px" alt="spam" />
          <Text mt="3px" fontSize="11px" color="white">
            Mark spam
          </Text>
        </Flex>
      </Flex>
      <Heading ml="20px" fontSize="18px" mt="20px" color="#ffffff">
        We missed you! Our top tip to get you back on track
      </Heading>
      <Box
        mt="10px"
        ml="20px"
        mr="20px"
        borderWidth="1px"
        borderColor="#3e3e3e"
      >
        <Text mt="20px" ml="20px" fontSize="13px" f color="#bebebe">
          Duolingo
        </Text>
        <Text ml="20px" fontSize="10px" color="#787878">
          To:ethtachi.eth
        </Text>
        <Text mt="20px" ml="20px" fontSize="10px" color="#bebebe">
          Hey,
          <br />
          Since the last time we met, i have been working on the V2 roadmap.
          Nice to meet you! <br />
          Lets arrange a meeting at 11pm.
        </Text>
        <Text mt="20px" mb="15px" ml="20px" fontSize="10px" color="#bebebe">
          Thanks Tachi.
        </Text>
      </Box>
      <Flex alignItems="flex-start" ml="22px" mt="20px">
        <Image mr="10px" src="/images/profile.png" w="30px" alt="profile" />
        <Flex w="420px" h="150px" flexDirection="column" justifyContent="space-between" borderWidth="1px" borderColor="#3e3e3e">
          <Flex alignItems="flex-start" mt="10px" ml="10px">
            <Image src="/images/forward.png" w="20px" alt="forard" />
            <Text ml="20px" fontSize="10px" color="#787878">
              tachi.eth, Jack.eth
            </Text>
          </Flex>

          <Flex alignItems="center" ml="20px" mb="20px">
            <Flex
              borderRadius="5px"
              alignItems="center"
              bg="#7e3ad9"
              h="30px"
              justifyContent="space-around"
              w="80px"
            >
              <Text ml="10px" color="white" fontSize="10px">
                Send
              </Text>
              <Image src="/images/Checkbox Tick.svg" w="15px" alt="checkbox" />
            </Flex>
            <Image ml="20px" mr="10px" src="/images/A.png" w="15px" alt="A" />
            <Image mr="10px" src="/images/insert.png" w="20px" alt="insert" />
            <Image mr="10px" src="/images/insert_.png" w="20px" alt="insert_" />
            <Image mr="10px" src="/images/smile.png" w="15px" alt="smile" />
            <Image mr="10px" src="/images/picture.png" w="15px" alt="picture"/>
            <Image mr="10px" src="/images/lock.png" w="15px"  alt="lock"/>
            <Image  src="/images/3_dots.png" w="12px" alt="3dot" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
