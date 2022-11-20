import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  Checkbox,
  useDisclosure,
} from '@chakra-ui/react';
import MailCard from '../component/MailCard';
import ReadMailSection from '../component/ReadMailSection';
import Header from '../component/Header';
import LeftSideBar from '../component/LeftSideBar';
import { AiOutlineMail } from 'react-icons/ai';
import ComposeModal from '../component/ComposeModal';
import RightSideBar from '../component/RightSideBar';
import Setting from "../component/Setting";



export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showRead, setShowRead] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  const [activeTab, setActiveTab] = useState(null)
  const [value, onChange] = useState(new Date());

  return (
    <Flex >
      <Box>
        <Header showSetting={() => setShowSetting(!showSetting)} />
        <Flex minH="100vh" w="100%" bg="black">
          <Box px="40px" maxW="300px" bg="black">
            <LeftSideBar onOpen={onOpen} />
          </Box>
          <Box borderRadius="15px" mb="20px" w="100%" bg="#2c2c2c">
            <Flex alignItems="center" justifyContent="space-between" px="25px" pt="10px">
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
         { showSetting && <Setting/>}
          <Flex flexDirection="column" w="80px" ml="10px">
            <Box as="button" onClick={() => setActiveTab("calender")}>
              <Image src="/images/Calendar.svg" w="35px" alt="calender" />
            </Box>
            <Box as="button" onClick={() => setActiveTab("tasks")}>
              <Image src="/images/Task.svg" w="35px" alt="task" />
            </Box>
            <Box as="button" onClick={() => setActiveTab("notes")}>
              <Image src="/images/Calendar.svg" w="35px" alt="calender" />
            </Box>
          </Flex>
        </Flex>
        <ComposeModal isOpen={isOpen} onClose={onClose} />
      </Box>
     
     { activeTab && <RightSideBar onClose={() => setActiveTab(null)} type={activeTab}/>}

      {/* SideBar */}
    </Flex>
  );
}
