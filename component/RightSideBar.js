import React from "react";
import { Box, Heading, Link, Text, Flex, Image } from "@chakra-ui/react";
import CalendarCard from "./CalendarCard";
import TasksCard from "./TasksCard";
import NotesCard from "./NotesCard";

export default function RightSideBar({ type , onClose}) {
  const renderCom = () => {
    switch (type) {
      case "calender":
        return <CalendarCard />;
      case "notes":
        return <NotesCard />;
      case "tasks":
        return <TasksCard />;
    }
  };
  const getTitle1 = () => {
    switch (type) {
      case "calender":
        return "CALENDAR";
      case "notes":
        return "KEEP";
      case "tasks":
        return "KEEP";
    }
  };
  const getTitle2 = () => {
    switch (type) {
      case "calender":
        return new Date().toDateString();
      case "notes":
        return "Notes";
      case "tasks":
        return "My Tasks";
    }
  };
  return (
    <Box display={{ base:"none", lg:"block"}} position="relative" bg="bg" maxW="280px" w="100%"  >
      <Flex
        py="10px"
        px="20px"
        alignItems="flex-start"
        justifyContent="space-between"
        w="100%"
      >
        <Box>
          <Text fontSize="12px" color="text">
            {getTitle1()}
          </Text>
          <Text fontSize="12px" fontWeight="bold" color="text">
            {getTitle2()}
          </Text>
        </Box>
        <Box onClick={onClose} as="button" mt="5px">
          <Image w="12px" alt="close" src="/images/close.png" />
        </Box>
      </Flex>
      <Box >
      {renderCom()}
      </Box>
     
    </Box>
  );
}
