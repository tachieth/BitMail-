import React from 'react';
import { Box, Heading, Link, Text, Flex, Image } from '@chakra-ui/react';

export default function TasksCard({ read = false, onToggle }) {
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
        <Flex
          alignItems="flex-start"
          py="10px"
          px="10px"
          borderRadius="5px"
          borderWidth="1px"
          borderColor="text"
        >
          <Box mt="2px">
            <Image w="15px" alt="notselect" src="/images/notselect.png" />
          </Box>
          <Box px="15px">
            <Text color="white" fontSize="12px" fontWeight="bold">
              Tittle
            </Text>
            <Text mb="5px" mt="5px" color="text" fontSize="10px">
              Details
            </Text>
            <Text color="text" fontSize="10px">
              Date/time
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box mt="90px" px="20px" w="100%">
        <Flex
          alignItems="flex-start"
          py="10px"
          px="10px"
          borderRadius="5px"
          borderWidth="1px"
          borderColor="text"
        >
          <Box mt="2px">
            <Image w="15px" alt="notselect" src="/images/notselect.png" />
          </Box>
          <Box px="15px">
            <Text color="white" fontSize="12px" fontWeight="bold">
              School work
            </Text>
            <Text color="text" fontSize="10px">
              Final Examination Deadline
            </Text>
            <Box w="105px" mt="2px" borderRadius="10px" textAlign="center" bg="blue">
              <Text color="white" fontSize="10px">
                Sat, Oct 29, 9:00 AM
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
