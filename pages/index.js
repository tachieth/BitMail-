import { Box, Heading, Link, Text, Flex, Image } from '@chakra-ui/react';


export default function Home() {
  return (
    <>
      <Box maxW="1440px" mx="auto" w="100%" bg="bg" minH="100vh">
        <Flex mb="70px" py="10px" w="100%" alignItems="center" justifyContent="center">
          <Box  color="white" w="450px">
            <Heading mb="20px" lineHeight="45px">
              Private, fast, secure and easy to use web3 mailing system
            </Heading>
            <Text mb="20px">Welcome to the web3 mailing system, the Bitmail</Text>

            <Box as="button" w="170px" h="50px" bg="white" borderRadius="5px">
              <Text color="black">Connect</Text>
            </Box>
          </Box>

          <Box px="10px">
            <Image borderRadius="5px" w="600px" alt="1" src="/images/1.jpg" />
          </Box>
        </Flex>

        <Flex flexDirection="column" py="10px" w="100%" alignItems="center" justifyContent="center">
          <Box mb="20px">
            <Image borderRadius="5px" w="700px" alt="1" src="/images/1.jpg" />
          </Box>
          <Box color="white">
            <Heading>
              The Days of receving mails via email are over.
            </Heading>
          </Box>
        </Flex>
      </Box>
    </>
  );
}