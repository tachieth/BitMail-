import React from 'react'
import { Box, Heading, Link, Text, Flex, Image } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react'
export default function mailCard() {
  return (
    <Box bg="grey" p="20px">
        <Flex alignItems="center" justifyContent="center">
        <Checkbox ></Checkbox>
        <Image src="/images/notification.svg" w="30px" />
        <Flex w="600px" alignItems="center" justifyContent="space-between">
            <Text fontWeight="bold">
                Duolingo
            </Text>
            <Text fontWeight="bold">
                2.48PM
            </Text>
        </Flex>
        </Flex>
        <Flex ml="18px" alignItems="center" justifyContent="center">
       
        <Image src="/images/Starred.svg" w="30px" />
        <Flex w="600px" alignItems="center" >
            <Text fontWeight="bold">
                We missed you! Our top tip to get you back on track
            </Text>
            
        </Flex>
        </Flex>
        <Flex ml="19px" alignItems="center" justifyContent="center">
       
       <Image src="/images/Important.svg" w="30px" />
       <Flex w="600px" alignItems="center" >
           <Text  fontWeight="bold">
               Make your learning 3X more effective
           </Text>
           
       </Flex>
       </Flex>
    </Box>
  )
}
