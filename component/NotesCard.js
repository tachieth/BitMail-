import React from 'react';
import { Box, Heading, Link, Text, Flex, Image } from '@chakra-ui/react';

export default function NotesCard({ read = false, onToggle }) {
  return (
    <Box  w="100%" h="100%">
     
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        borderColor="text"
        borderTopWidth="1px"
        py="5px"
      >
        <Flex px="20px" alignItems="center" justifyContent="space-between" w="330px">
          <Box>
            <Flex as="button" alignItems="center">
              <Box>
                <Image w="12px" alt="add" src="/images/add.png" />
              </Box>
              <Box>
                <Text px="10px" fontSize="12px" color="blue">
                  Add a Note...
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box as="button">
            <Image w="6px" alt="close" src="/images/threedotv.png" />
          </Box>
        </Flex>
      </Flex>

      <Box mt="10px" px="20px" w="100%">
        <Box py="10px" px="20px" borderRadius="5px" borderWidth="1px" borderColor="text">
          <Text mb="5px" color="white" fontSize="12px" fontWeight="bold">
            Important
          </Text>
          <Text color="text" fontSize="10px">
            Meeting at 9PM.
          </Text>
        </Box>
      </Box>

      <Box mt="90px" px="20px" w="100%">
        <Box py="10px" px="10px" borderRadius="5px" borderWidth="1px" borderColor="text">
          <Flex w="100%" alignItems="flex-start" justifyContent="space-between">
            <Box>
              <Text color="text" fontSize="12px" fontWeight="bold">
                Tittle
              </Text>
              <Text color="text" fontSize="10px">
                Take a note...
              </Text>
            </Box>
            <Box mt="5px">
              <Image w="5px" alt="threedotv" src="/images/threedotv.png" />
            </Box>
          </Flex>

          <Flex mb="10px" alignItems="center" justifyContent="right" mt="30px" w="100%">
            <Text fontSize="12px" fontWeight="bold" color="white">
              Done
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
