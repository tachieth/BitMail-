import React from 'react';
import {
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  Link,
  Text,
  Flex,
  Image,
  useDisclosure,
} from '@chakra-ui/react';

export default function ProfileEditModal({ isOpen, onClose,showProfileEdit }) {
  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="20px" bg="bg">
        <ModalHeader color="white" textAlign="center">
          Customise Profile
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Flex w="100%" alignItems="center" justifyContent="center" flexDirection="column">
            <Image mb="30px" w="100%" maxW="150px" alt="ppl" src="/images/ppl.png" />

            <Flex w="300px">
              <Box w="100%">
                <Input
                  w="100%"
                  borderLeftRadius="100px"
                  bg="black"
                  borderWidth="0px"
                  color="white"
                  placeholder="Name"
                />
              </Box>

              <Box
                ml="1px"
                textAlign="right"
                borderRightRadius="100px"
                bg="black"
                as="button"
                w="20%"
              >
                <Text mr="10px" color="text">
                  Edit
                </Text>
              </Box>
            </Flex>

            <Flex mt="20px" w="300px">
              <Box py="10px" borderLeftRadius="100px" bg="black" w="125px">
               <Text color="text" textAlign="center">
                ethatachi
               </Text>
              </Box>
              <Box ml="1px" py="10px" bg="black" w="125px">
              <Text color="text" textAlign="center">
                ByMail.io
              </Text>
              </Box>

              <Box
                ml="1px"
                textAlign="right"
                borderRightRadius="100px"
                bg="black"
                as="button"
                w="50px"
              >
                <Text mr="10px" color="text">
                  Edit
                </Text>
              </Box>
            </Flex>

            <Text mt="20px" mb="20px" color="text">
              0x............
            </Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button> */}
          {/* <Button borderRadius="20px" px="40px" bg="blue" color="white" variant="ghost">
            Done
          </Button> */}
          <Box
            mb="10px"
            as="button"
            py="10px"
            borderRadius="25px"
            px="40px"
            bg="blue"
            color="white"
          >
            <Text fontWeight="bold">Done</Text>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
