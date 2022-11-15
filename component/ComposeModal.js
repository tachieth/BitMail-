import React from "react";
import { Textarea } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Heading,
  Input,
  Link,
  Text,
  Flex,
  Image,
  Lorem,
  Button,
} from "@chakra-ui/react";

export default function ComposeModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#2c2c2c">
        <ModalHeader
          borderTopLeftRadius="10px"
          borderTopRightRadius="10px"
          bg="#1f1f1f"
          color="white"
          fontSize="10px"
          fontWeight="light"
        >
          New Message
        </ModalHeader>
        <Box position="absolute" top="20px" right="40px">

        <Image src="/images/minimize.png" w="12px" alt="minimize" />
        </Box>
        <ModalCloseButton fontSize="5px" color="white" />
        <ModalBody>
          <Input
            borderBottomColor="#393939"
            borderWidth="0"
            borderBottomWidth="1px"
            pb="5px"
            fontSize="10px"
            placeholder=" To"
            color="#8f8f8f"
          />
          <Input
            borderBottomColor="#393939"
            borderWidth="0"
            borderBottomWidth="1px"
            pb="5px"
            placeholder=" Subject"
            fontSize="10px"
            color="#8f8f8f"
          />
          <Box h="200px">
            <Textarea color="white" border="none" fontSize="10px" h="100%" />
          </Box>
        </ModalBody>

        <ModalFooter>
          <Flex w="100%" justifyContent="space-between">
            <Flex alignItems="center">
              <Flex
                borderRadius="5px"
                alignItems="center"
                bg="#7e3ad9"
                h="30px"
                justifyContent="space-around"
                w="80px"
              >
                <Text ml="10px" color="white" fontSize="10px">
                  Send
                </Text>
                <Image src="/images/Checkbox Tick.svg" w="15px" />
              </Flex>
              <Image ml="20px" mr="10px" src="/images/A.png" w="15px" alt="A" />
              <Image mr="10px" src="/images/insert.png" w="20px" alt="insert" />
              <Image mr="10px" src="/images/insert_.png" w="20px" alt="insert_" />
              <Image mr="10px" src="/images/smile.png" w="15px" alt="smile" />
              <Image mr="10px" src="/images/picture.png" w="15px" alt="picture" />
              <Image mr="10px" src="/images/lock.png" w="15px" alt="lock" />
              <Image src="/images/3_dots.png" w="12px" alt="3dot" />
            </Flex>
            <Image ml="20px" mr="10px" src="/images/trash.svg" w="25px" alt="trash" />
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
