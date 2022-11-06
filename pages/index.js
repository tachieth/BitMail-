import { Box, Heading, Link, Text, Flex, Image } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Box maxW={{ base: 'auto', md: '1440px' }} mx="auto" w="100%" bg="bg" minH="100vh">
        <Box mb="30px" id="header" px="30px" w="100%" bg="#513966" py="10px" color="white">
          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <Box>
              <Image w="200px" alt="logo" src="/images/logo.png" />
            </Box>

            <Box color="white">
              <Box as="button" w="170px" h="50px" bg="white" borderRadius="5px">
                <Text color="black">Connect</Text>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          mb="70px"
          py="10px"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            flexDirection="column"
            mb={{ base: '20px', md: '0' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            color="white"
            w={{ base: 'auto', md: '450px' }}
          >
            <Heading mb="20px" lineHeight="45px">
              Private, fast, secure and easy to use web3 mailing system
            </Heading>
            <Text mb="20px">Welcome to the web3 mailing system, the Bitmail</Text>

            <Box as="button" w="170px" h="50px" bg="white" borderRadius="5px">
              <Text color="black">Connect</Text>
            </Box>
          </Flex>

          <Box px="10px">
            <Image borderRadius="5px" w="600px" alt="1" src="/images/1.jpg" />
          </Box>
        </Flex>

        <Flex
          mb="30px"
          flexDirection="column"
          py="10px"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box mb="20px">
            <Image borderRadius="5px" w="700px" alt="1" src="/images/1.jpg" />
          </Box>
          <Box textAlign="center" color="white">
            <Heading mb="20px">The Days of receving mails via email are over.</Heading>
            <Text>Bitmail gives you the access to send mails via Blockmail address</Text>
          </Box>
        </Flex>

        <Box w="100%" bg="pink">
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            py="90px"
            w="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Box px="10px">
              <Image borderRadius="5px" w="600px" alt="1" src="/images/1.jpg" />
            </Box>

            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', md: 'flex-end' }}
              color="white"
              w={{ base: 'auto', md: '450px' }}
            >
              <Heading textAlign={{ base: 'center', md: 'right' }} mb="20px" lineHeight="45px">
                Private, fast, secure and easy to use web3 mailing system Private, fast, secure and
                easy to use web3 mailing system
              </Heading>

              <Text mb="20px">Welcome to the web3 mailing system, the Bitmail</Text>
            </Flex>
          </Flex>
        </Box>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          py="90px"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            alignItems={{ base: 'center', md: 'flex-start' }}
            flexDirection="column"
            color="white"
            w={{ base: 'auto', md: '450px' }}
          >
            <Heading mb="20px" lineHeight="45px">
              Private, fast, secure and easy to use web3 mailing system
            </Heading>
            <Text mb="20px">Welcome to the web3 mailing system, the Bitmail</Text>

            <Box as="button" w="170px" h="50px" bg="white" borderRadius="5px">
              <Text color="black">Connect</Text>
            </Box>
          </Flex>

          <Box px="10px">
            <Image borderRadius="5px" w="600px" alt="1" src="/images/1.jpg" />
          </Box>
        </Flex>

        <Box py="90px" w="100%" bg="pink">
          <Box maxW="1300px" mx="auto" w="100%">
            <Accordion color="white" defaultIndex={[0]} allowMultiple>
              <AccordionItem py="10px" borderWidth="0px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      Temporary words for FAQ ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      Temporary words for FAQ ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      Temporary words for FAQ ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      Temporary words for FAQ ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      Temporary words for FAQ ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      Temporary words for FAQ ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      Temporary words for FAQ ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>

        <Box id="footer" px="30px" w="100%" bg="#513966" py="50px" color="white">
          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <Box>
              <Image w="200px" alt="logo" src="/images/logo.png" />
              <Text mt="5px" mb="5px">
                © 2022 Bitmail
              </Text>
              <Image w="100px" alt="logo" src="/images/threedot.png" />
            </Box>

            <Box color="white">
              <Text>About Us</Text>
              <Text mt="5px" mb="5px">
                Features
              </Text>
              <Text>Help Centre</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
