import React from 'react';
import { Box, Heading, Link, Text, Flex, Image } from '@chakra-ui/react';


export default function CalendarCard({ read = false, onToggle }) {
  return (
    <Box onClick={onToggle} position="relative" bg="bg" maxW="335px" w="100%" minH="100vh">
      <Flex py="10px" px="20px" alignItems="flex-start" justifyContent="space-between" w="330px">
        <Box>
          <Text fontSize="12px" color="text">
            CALENDAR
          </Text>
          <Text fontSize="12px" fontWeight="bold" color="text">
            Sat,Oct 29
          </Text>
        </Box>
        <Box as="button" mt="5px">
          <Image w="12px" alt="close" src="/images/close.png" />
        </Box>
      </Flex>

      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        borderColor="text"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        py="5px"
      >
        <Flex px="20px" alignItems="center" justifyContent="space-between" w="330px">
          <Box>
            <Text fontSize="12px" color="blue">
              Today
            </Text>
          </Box>
          <Box as="button">
            <Image w="6px" alt="close" src="/images/threedotv.png" />
          </Box>
        </Flex>
      </Flex>

      <Flex px="20px" flexDirection="column">
        <Text py="10px" color="white" fontSize="12px" fontWeight="bold">
          Tue , Nov 9 , 2022
        </Text>
        <Flex px="5px" borderRadius="5px" py="2px" bg="blue" w="100%">
          <Text color="white" fontSize="12px" fontWeight="bold">
            Independence Day
          </Text>
        </Flex>

        <Text mt="10px" py="10px" color="white" fontSize="12px" fontWeight="bold">
          Mon , Nov 7 ,
        </Text>
        <Flex px="5px" borderRadius="5px" py="2px" bg="blue" w="100%">
          <Text color="white" fontSize="12px" fontWeight="bold">
            Water Festival Ceremony (Day 1)
          </Text>
        </Flex>
      </Flex>

      <Flex as="button" py="10px" bottom="0" position="absolute" px="20px" alignItems="center">
        <Box>
          <Image w="12px" alt="add" src="/images/add.png" />
        </Box>
        <Box>
          <Text px="10px" fontSize="12px" color="blue">
            Create an event
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
