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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/router";

export default function LeftSideBar({ onOpen }) {
  const { push } = useRouter();

  return (
    <Box display={{ base: "none", lg: "block" }}>
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
        <Flex
          onClick={() => push("/app")}
          w="100%"
          as="button"
          alignItems="center"
        >
          <Image src="/images/Inbox.png" w="25px" alt="left" />
          <Flex ml="10px" w="100%" justifyContent="space-between">
            <Text fontSize="14px" color="white">
              Inbox
            </Text>
            <Text fontSize="14px" color="white">
              1,807
            </Text>
          </Flex>
        </Flex>
        <Flex onClick={() => push("/sent")} as="button">
          <Image mr="10px" src="/images/Sent.svg" w="25px" alt="sent" />
          <Text fontSize="14px" color="white">
            Sent
          </Text>
        </Flex>
        <Flex onClick={() => push("/starred")} as="button">
          <Image mr="10px" src="/images/Starred.svg" w="25px" alt="starred" />
          <Text fontSize="14px" color="white">
            Starred
          </Text>
        </Flex>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Flex ml="-16px" as="button">
                  <Image mr="10px" src="/images/Less.svg" w="25px" alt="less" />
                  <Text fontSize="14px" color="white">
                    Less
                  </Text>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Flex onClick={() => push("/important")} as="button">
                <Image
                  mr="10px"
                  src="/images/Important.svg"
                  w="25px"
                  alt="imp"
                />
                <Text fontSize="14px" color="white">
                  Important
                </Text>
              </Flex>
            </AccordionPanel>
            <AccordionPanel>
              <Flex onClick={() => push("/archive")} as="button">
                <Image
                  mr="10px"
                  src="/images/Archive.svg"
                  w="25px"
                  alt="archieve"
                />
                <Text fontSize="14px" color="white">
                  Archive
                </Text>
              </Flex>
            </AccordionPanel>
            <AccordionPanel>
              <Flex onClick={() => push("/trash")} as="button">
                <Image mr="10px" src="/images/Trash.svg" w="25px" alt="trash" />
                <Text fontSize="14px" color="white">
                  Trash
                </Text>
              </Flex>
            </AccordionPanel>
            <AccordionPanel>
              <Flex onClick={() => push("/drafts")} as="button">
                <Image mr="10px" src="/images/Draft.svg" w="25px" alt="draft" />
                <Text fontSize="14px" color="white">
                  Drafts
                </Text>
              </Flex>
            </AccordionPanel>
            <AccordionPanel>
              <Flex onClick={() => push("/spam")} as="button">
                <Image mr="10px" src="/images/Spam.svg" w="25px" alt="spam" />
                <Text fontSize="14px" color="white">
                  Spam
                </Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}
