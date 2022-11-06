import React from 'react'
import { Box, Heading, Link, Text, Flex, Image } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react'
export default function mailCard() {
  return (
    <Box py="10px" w="500px" borderWidth="1px" borderColor="#3e3e3e" bg="#2c2c2c" px="30px">
        <Flex  alignItems="center" justifyContent="center">
        <Checkbox ></Checkbox>
        <Image src="/images/notification.svg" w="30px" />
        <Flex w="600px" alignItems="center" justifyContent="space-between">
            <Text color="white" fontSize="10px">
                Duolingo
            </Text>
            <Text color="white" fontSize="10px" >
                2.48PM
            </Text>
        </Flex>
        </Flex>
        <Flex ml="18px" alignItems="center" justifyContent="center">
       
        <Image src="/images/Starred.svg" w="30px" />
        <Flex w="600px" alignItems="center" >
            <Text color="white" fontSize="10px" >
                We missed you! Our top tip to get you back on track
            </Text>
            
        </Flex>
        </Flex>
        <Flex ml="19px" alignItems="center" justifyContent="center">
       
       <Image src="/images/Important.svg" w="30px" />
       <Flex w="600px" alignItems="center" >
           <Text color="white" fontSize="10px" >
               Make your learning 3X more effective
           </Text>
           
       </Flex>
       </Flex>
    </Box>
  )
}
