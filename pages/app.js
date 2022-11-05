import React from "react";
import { Box, Heading, Link, Text, Flex, Image } from "@chakra-ui/react";
import MailCard from "../component/MailCard";
import { Checkbox } from '@chakra-ui/react'
import { AiOutlineMail } from 'react-icons/ai';
import { VscChevronLeft } from 'react-icons/vsc';
import { IoChevronForwardSharp } from 'react-icons/io';

export default function app() {
  return (
    <Flex h="100vh" bg="black">
      <Box mt="30px" p="40px" w="300px" bg="black">
        <Box>
          <Flex
            alignItems="center"
            justifyContent="center"
            bg="bg"
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
            <Flex as="button" ml="20px" alignItems="center">
              <AiOutlineMail/>
              <Flex w="200px" justifyContent="space-between">
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
      <Box borderRadius="15px" mt="70px" mb="20px" w="1000px" bg="grey">
        <Flex alignItems="center" justifyContent="space-between" px="25px" pt="10px" >
            <Flex>
            <Checkbox/> 
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
      </Box>
      <Box ml="10px" mt="70px">
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
  );
}
