import React from 'react';
import { Box, Heading, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Input, Button, Link, Text, Flex, Image, useDisclosure
} from '@chakra-ui/react';
  import ProfileEditModal from './ProfileEditModal';

export default function ProfileModal({ isOpen, onClose,showProfileEdit }) {
  return (
    <Modal overflow="hidden" size="sm" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent overflow="hidden" borderRadius="20px" bg="bg">
       
        <ModalCloseButton color="white" />
        <ModalBody px="0px">
          <Flex w="100%" alignItems="center" justifyContent="center" flexDirection="column">
            <Image mt="10px" mb="10px" w="100%" maxW="100px" alt="ppl" src="/images/ppl.png" />

            <Text fontWeight="bold" color="white">
              Tachii
            </Text>

            <Text mb="10px" color="text">
              0x............
            </Text>
          </Flex>

          <Box
            as="button"
            py="5px"
            borderTopWidth="1px"
            borderBottomWidth="1px"
            borderColor="text"
            w="100%"
          >
            <Flex as="button" onClick={showProfileEdit} ml="10px" alignItems="center">
              <Image w="100%" maxW="50px" alt="pri" src="/images/Privacy.svg" />
              <Box ml="20px">
                <Text color="white" fontWeight="bold">
                  Customise Profile
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box as="button" py="10px" borderBottomWidth="1px" borderColor="text" w="100%">
            <Flex ml="25px" alignItems="center">
              <Image w="100%" maxW="20px" alt="pri" src="/images/Add.png" />
              <Box ml="40px">
                <Text color="blue" fontWeight="bold">
                  Add Wallet
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box as="button" borderRightRadius="30px" mt="20px" mb="20px" bg="blue" w="60%" py="10px">
            <Text textAlign="center" fontWeight="bold" color="white">
              Disconnect
            </Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

