import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Box, Heading, Link, Text, Flex, Stack, Image } from "@chakra-ui/react";

export default function Setting({ onClose }) {
  const [value, setValue] = React.useState("1");
  const [secondValue, setSecondValue] = React.useState("1");
  const [thirdValue, setThirdValue] = React.useState("1");
  const [fourthValue, setFourthValue] = React.useState("1");

  return (
    <Box  ml="20px" borderRadius="15px" w="100%" maxW="250px" bg="bg">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth="1px"
        borderColor="text"
        py="15px"
        px="10px"
      >
        <Text fontSize="10px" color="white">
          Quick settings
        </Text>
        <Box onClick={onClose} as="button" mt="5px">
          <Image w="10px" alt="close" src="/images/close.png" />
        </Box>
      </Flex>

      <Box borderBottomWidth="1px" borderColor="text" p="10px">
        <Text mb="10px" fontSize="10px" color="text">
          Density
        </Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack fontSize="10px" color="white" direction="column">
            <Flex justifyContent="space-between">
              <Radio size="sm" value="1">
              <Text fontSize="12px">
                 
                Default
                </Text> 
              </Radio>
              <Box w="100%" maxW="100px" bg="text"></Box>
            </Flex>

            <Flex justifyContent="space-between">
              <Radio size="sm" value="2">
              <Text fontSize="12px">
                  
                Comfortable
                </Text> 
              </Radio>
              <Box w="100%" maxW="100px" bg="text"></Box>
            </Flex>
          </Stack>
        </RadioGroup>
      </Box>

      <Box borderBottomWidth="1px" borderColor="text" p="10px">
        <Text mb="10px" fontSize="10px" color="text">
          Theme
        </Text>
        <RadioGroup onChange={setSecondValue} value={secondValue}>
          <Stack fontSize="10px" color="white" direction="column">
            <Radio size="sm" value="1">
              <Text fontSize="12px">Dark</Text>
            </Radio>

            <Radio size="sm" value="2">
              <Text fontSize="12px">Purple</Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box borderBottomWidth="1px" borderColor="text" p="10px">
        <Text mb="10px" fontSize="10px" color="text">
          Inbox type
        </Text>
        <RadioGroup onChange={setThirdValue} value={thirdValue}>
          <Stack fontSize="10px" color="white" direction="column">
            <Flex justifyContent="space-between">
              <Radio size="sm" value="1">
                <Text fontSize="12px">Default</Text>
              </Radio>
              <Box w="100%" maxW="100px" bg="text"></Box>
            </Flex>

            <Flex justifyContent="space-between">
              <Radio size="sm" value="2">
                <Text fontSize="12px">Important first</Text>
              </Radio>
              <Box w="100%" maxW="100px" bg="text"></Box>
            </Flex>
            <Flex justifyContent="space-between">
              <Radio size="sm" value="3">
                <Text fontSize="12px">Unread first</Text>
              </Radio>
              <Box w="100%" maxW="100px" bg="text"></Box>
            </Flex>

            <Flex justifyContent="space-between">
              <Radio size="sm" value="4">
                <Text fontSize="12px">Priority inbox</Text>
              </Radio>

              <Box w="100%" maxW="100px" bg="text"></Box>
            </Flex>
          </Stack>
        </RadioGroup>
      </Box>
      <Box borderBottomWidth="1px" borderColor="text" p="10px">
        <Text mb="10px" fontSize="10px" color="text">
          Email threading
        </Text>
        <RadioGroup onChange={setFourthValue} value={fourthValue}>
          <Stack fontSize="10px" color="white" direction="column">
            <Flex>
              <Radio size="sm" value="1">
                <Text fontSize="12px">Conservation view</Text>
              </Radio>
            </Flex>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
}
