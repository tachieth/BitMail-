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
import ReadMailMobileSection from '../component/ReadMailMobileSection';
import {  isMobile } from 'react-device-detect';
import Header from '../component/Header';
import LeftSideBar from '../component/LeftSideBar';
import { AiOutlineMail } from 'react-icons/ai';
import ComposeModal from '../component/ComposeModal';
import RightSideBar from '../component/RightSideBar';
import Setting from "../component/Setting";
import SettingMobile from "../component/SettingMobile";
import LeftSideMobileBar from "../component/LeftSideMobileBar";



export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen : isDrawerOpen , onOpen: onDrawerOpen, onClose:onDrawerClose } = useDisclosure();
  const { isOpen : isSettingOpen , onOpen: onSettingOpen, onClose:onSettingClose } = useDisclosure();
  const { isOpen : isLeftSideBarOpen , onOpen: onLeftSideBarOpen, onClose:onLeftSideBarClose } = useDisclosure();

  const [showRead, setShowRead] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  const [activeTab, setActiveTab] = useState(null)
  const [value, onChange] = useState(new Date());

  return (
    <Flex >
      <Box>
        <Header showSetting={isMobile ? () => onSettingOpen() : () => setShowSetting(!showSetting)} showSideBar={onLeftSideBarOpen}  />
        <Flex minH="100vh" w="100%" bg="black">
          <Box display={{ base:"none", lg:"block"}} px="40px" maxW="300px" bg="black">
            <LeftSideBar onOpen={onOpen} />
          </Box>
          <Box borderRadius={{ base:"0", lg:"15px"}} mb="20px" w="100%" bg="#2c2c2c">
            <Flex alignItems="center" justifyContent="space-between" px="25px" pt="10px">
              <Flex>
                <Checkbox />
                <Image src="/images/Checkbox Tick.svg" w="35px" alt="checkbox" />
                <Image src="/images/Refresh.svg" w="35px" alt="refresh" />
                <Image src="/images/3 Dots Vertical.svg" w="35px" alt="3dot" />
              </Flex>
              <Flex alignItems="center">
              <Image src="/images/Left_arrow.png" w="25px" alt="left" />
              <Image src="/images/Right_arrow.png" w="25px" alt="right" mr="20px" />
                <Text fontSize="12px" color="white">
                  1-50 of 6,607
                </Text>
              </Flex>
            </Flex>
            <Box>
              <Flex mb="10px" alignItems="center" mt="10px" ml="15px">
              <Image src="/images/Inbox.png"  w="25px" alt="left" />
                <Text ml="10px" fontSize="12px" color="white">
                  Spam
                </Text>
              </Flex>
              <Flex>
                <Box>
                  <MailCard onToggle={isMobile ? () => onDrawerOpen() : () => setShowRead(!showRead)} />
                  <MailCard onToggle={ isMobile ? () => onDrawerOpen() : () => setShowRead(!showRead)} read />
                  <MailCard onToggle={ isMobile ? () => onDrawerOpen() : () => setShowRead(!showRead)} />
                  <MailCard onToggle={ isMobile ? () => onDrawerOpen() : () => setShowRead(!showRead)} />
                  <MailCard onToggle={ isMobile ? () => onDrawerOpen() : () => setShowRead(!showRead)} read />
                  <MailCard onToggle={ isMobile ? () => onDrawerOpen() : () => setShowRead(!showRead)} read />
                  <MailCard onToggle={isMobile ? () => onDrawerOpen() : () => setShowRead(!showRead)} />
                </Box>
                <Box>{showRead && <ReadMailSection />}</Box>
               <ReadMailMobileSection  isOpen={isDrawerOpen}  onClose={onDrawerClose}  />
              </Flex>
            </Box>
          </Box>
         { showSetting && <Setting/>}
         <SettingMobile  isOpen={isSettingOpen}  onClose={onSettingClose}  />
          <Flex display={{ base:"none", lg:"flex"}} flexDirection="column" w="80px" ml="10px">
            <Box as="button" display={{ base:"none", lg:"block"}} onClick={() => setActiveTab("calender")}>
              <Image src="/images/Calendar.svg" w="35px" alt="calender" />
            </Box>
            <Box as="button" display={{ base:"none", lg:"block"}} onClick={() => setActiveTab("tasks")}>
              <Image src="/images/Task.svg" w="35px" alt="task" />
            </Box>
            <Box as="button"  display={{ base:"none", lg:"block"}} onClick={() => setActiveTab("notes")}>
              <Image src="/images/Calendar.svg" w="35px" alt="calender" />
            </Box>
          </Flex>
        </Flex>
        <ComposeModal isOpen={isOpen} onClose={onClose} />
      </Box>
     
     { activeTab && <RightSideBar onClose={() => setActiveTab(null)} type={activeTab}/>}

      {/* SideBar */}
      <LeftSideMobileBar  isOpen={isLeftSideBarOpen}  onClose={onLeftSideBarClose}  />
    </Flex>
  );
}
