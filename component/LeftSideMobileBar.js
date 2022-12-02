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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useRouter } from 'next/router'

export default function LeftSideMobileBar({ isOpen, onClose }) {
  const [value, setValue] = React.useState("1");
  const [secondValue, setSecondValue] = React.useState("1");
  const [thirdValue, setThirdValue] = React.useState("1");
  const [fourthValue, setFourthValue] = React.useState("1");
  const { push} = useRouter()

  const [placement, setPlacement] = React.useState("left");
  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg="bg">
        <DrawerBody>
          <Box w="100%">
            <Box py="30px">
              <Image w="200px" alt="logo" src="/images/headerlogo.png" />
            </Box>
            <Box mt="20px" w="250px">
              <Flex onClick={() => push("/app") } w="100%" as="button" alignItems="center">
                <Image mb="15px" src="/images/Inbox.png" w="35px" alt="left" />
                <Flex
                  mb="15px"
                  ml="20px"
                  w="100%"
                  justifyContent="space-between"
                >
                  <Text fontSize="20px" color="white">
                    Inbox
                  </Text>
                  <Text fontSize="20px" color="white">
                    99+
                  </Text>
                </Flex>
              </Flex>
              <Flex onClick={() => push("/sent") } mb="15px" as="button">
                <Image mr="20px" src="/images/Sent.svg" w="35px" alt="sent" />
                <Text fontSize="20px" color="white">
                  Sent
                </Text>
              </Flex>
              <Flex onClick={() => push("/starred") } mb="15px" as="button">
                <Image
                  mr="20px"
                  src="/images/Starred.svg"
                  w="35px"
                  alt="starred"
                />
                <Text fontSize="20px" color="white">
                  Starred
                </Text>
              </Flex>

              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex ml="-15px"  as="button">
                        <Image
                          mr="20px"
                          src="/images/Less.svg"
                          w="35px"
                          alt="less"
                        />
                        <Text fontSize="20px" color="white">
                          Less
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel >
                    <Flex onClick={() => push("/important") } mb="15px" as="button">
                      <Image
                        mr="20px"
                        src="/images/Important.svg"
                        w="35px"
                        alt="imp"
                      />
                      <Text fontSize="20px" color="white">
                        Important
                      </Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel >
                    <Flex onClick={() => push("/archive") } mb="15px" as="button">
                      <Image
                        mr="20px"
                        src="/images/Archive.svg"
                        w="35px"
                        alt="archieve"
                      />
                      <Text fontSize="20px" color="white">
                        Archive
                      </Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel >
                  <Flex onClick={() => push("/trash") } mb="15px" as="button">
                <Image mr="20px" src="/images/Trash.svg" w="35px" alt="trash" />
                <Text fontSize="20px" color="white">
                  Trash
                </Text>
              </Flex>
                  </AccordionPanel>
                  <AccordionPanel >
                  <Flex onClick={() => push("/drafts") } mb="15px" as="button">
                <Image mr="20px" src="/images/Draft.svg" w="35px" alt="draft" />
                <Text fontSize="20px" color="white">
                  Drafts
                </Text>
              </Flex>
                  </AccordionPanel>
                  <AccordionPanel >
                  <Flex onClick={() => push("/spam") } mb="15px" as="button">
                <Image mr="20px" src="/images/Spam.svg" w="35px" alt="spam" />
                <Text fontSize="20px" color="white">
                  Spam
                </Text>
              </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

             
             
             
              <Flex mb="18px" as="button">
                <Image
                  ml="5px"
                  mr="20px"
                  src="/images/add.png"
                  w="28px"
                  alt="spam"
                />
                <Text mt="2px" fontSize="20px" color="blue">
                  Add wallet
                </Text>
              </Flex>
              <Flex mb="25px" as="button">
                <Image
                  ml="5px"
                  mr="20px"
                  src="/images/Setting.png"
                  w="28px"
                  alt="spam"
                />
                <Text fontSize="20px" color="white">
                  Settings
                </Text>
              </Flex>
              <Flex justifyContent="space-between" w="100%" as="button">
                <Box borderRightWidth="1px">
                  <Text mr="50px" fontSize="20px" color="white">
                    Reports
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="20px" color="white">
                    Feedback
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
