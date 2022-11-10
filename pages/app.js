import React, {useState} from "react";
import { Box, Heading,Input, Link, Text, Flex, Image, useDisclosure } from "@chakra-ui/react";
import MailCard from "../component/MailCard";
import ReadMailSection from "../component/ReadMailSection";
import { Checkbox } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import ComposeModal from "../component/ComposeModal";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showRead, setShowRead] = useState(false)
  return (
    <>
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
        <Flex alignItems="center" justifyContent="center">
          <Box>
            <Image w="25px" alt="logo" src="/images/hamburger.png" />
          </Box>
          <Box>
            <Image w="200px" alt="logo" src="/images/headerlogo.png" />
          </Box>
        </Flex>

        <Flex alignItems="center" justifyContent="center">
          <Box bg="bg" w="900px">
            <Input placeholder="Search" />
          </Box>
          <Box px="10px">
            <Image w="10px" alt="3dot" src="/images/threedotv.png" />
          </Box>
          <Box px="10px">
            <Image w="25px" alt="setting" src="/images/setting.png" />
          </Box>
          <Box px="10px">
            <Image borderRadius="50%" h="33px" w="33px" alt="setting" src="/images/1.jpg" />
          </Box>
        </Flex>
      </Flex>

      <Flex minH="100vh" w="100%" bg="black">
        <Box  px="40px" w="300px" bg="black">
          <Box>
            <Flex
              alignItems="center"
              justifyContent="center"
              bg="#8b3ad9"
              h="50px"
              w="150px"
              borderRadius="10px"
              as="button"
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
        </Box>
        <Box borderRadius="15px"  mb="20px" w="1000px" bg="#2c2c2c">
          <Flex alignItems="center" justifyContent="space-between" px="25px" pt="10px">
            <Flex>
              <Checkbox />
              <Image src="/images/Checkbox Tick.svg" w="35px" />
              <Image src="/images/Refresh.svg" w="35px" />
              <Image src="/images/3 Dots Vertical.svg" w="35px" />
            </Flex>
            <Flex>
              <Text fontSize="12px" color="white">
                1-50 of 6,607
              </Text>
            </Flex>
          </Flex>
          <Box>
            <Flex mb="10px" alignItems="center" mt="10px" ml="25px">
              <AiOutlineMail color="#6e39d3" />
              <Text ml="10px" fontSize="12px" color="#6e39d3">
                Inbox
              </Text>
            </Flex>
            <Flex>
              <Box>
                <MailCard onToggle={() => setShowRead(!showRead)} />
                <MailCard onToggle={() => setShowRead(!showRead)}  read />
                <MailCard onToggle={() => setShowRead(!showRead)}  />
                <MailCard onToggle={() => setShowRead(!showRead)}  />
                <MailCard onToggle={() => setShowRead(!showRead)}  read />
                <MailCard onToggle={() => setShowRead(!showRead)}  read />
                <MailCard onToggle={() => setShowRead(!showRead)}  />
              </Box>
              <Box>
               { showRead &&  <ReadMailSection />}
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box  ml="10px" >
          <Box>
            <Image src="/images/Calendar.svg" w="35px" />
          </Box>
          <Box>
            <Image src="/images/Task.svg" w="35px" />
          </Box>
          <Box>
            <Image src="/images/Calendar.svg" w="35px" />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
