import React, { useState } from "react";
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
import MailCard from "../component/MailCard";
import ReadMailSection from "../component/ReadMailSection";
import Header from "../component/Header";
import LeftSideBar from "../component/LeftSideBar";
import { Checkbox } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import ComposeModal from "../component/ComposeModal";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showRead, setShowRead] = useState(false);
  return (
    <Flex>
      <Box>
        <Header />
        <Flex minH="100vh" w="100%" bg="black">
          <Box px="40px" w="300px" bg="black">
            <LeftSideBar onOpen={onOpen} />
          </Box>
          <Box borderRadius="15px" mb="20px" w="1000px" bg="#2c2c2c">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              px="25px"
              pt="10px"
            >
              <Flex>
                <Checkbox />
                <Image src="/images/Checkbox Tick.svg" w="35px" alt="checkbox" />
                <Image src="/images/Refresh.svg" w="35px" alt="refresh" />
                <Image src="/images/3 Dots Vertical.svg" w="35px" alt="3dot" />
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
                  <MailCard onToggle={() => setShowRead(!showRead)} read />
                  <MailCard onToggle={() => setShowRead(!showRead)} />
                  <MailCard onToggle={() => setShowRead(!showRead)} />
                  <MailCard onToggle={() => setShowRead(!showRead)} read />
                  <MailCard onToggle={() => setShowRead(!showRead)} read />
                  <MailCard onToggle={() => setShowRead(!showRead)} />
                </Box>
                <Box>{showRead && <ReadMailSection />}</Box>
              </Flex>
            </Box>
          </Box>
          <Box ml="10px">
            <Box>
              <Image src="/images/Calendar.svg" w="35px" alt="calender" />
            </Box>
            <Box>
              <Image src="/images/Task.svg" w="35px" alt="task" />
            </Box>
            <Box>
              <Image src="/images/Calendar.svg" w="35px" alt="calender" />
            </Box>
          </Box>
        </Flex>
        <ComposeModal isOpen={isOpen} onClose={onClose} />
      </Box>
      {/* SideBar */}
    </Flex>
  );
}
