import { Box, Heading, Link, Text, Flex, Image } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useRouter } from 'next/router'

export default function Home() {
  const { push } = useRouter();
  return (
    <Box className="main-bg">
      <Box minH="100vh">
        <Box
          mb="30px"
          id="header"
          px={{ base: '10px', md: '30px' }}
          w="100%"
          py="10px"
          color="white"
        >
          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <Box>
              <Image w={{ base: '150px', md: '200px' }} alt="logo" src="/images/logo.png" />
            </Box>

            <Box color="white">
              <Box
                as="button"
                w={{ base: '150px', md: '170px' }}
                h={{ base: '50px', md: '50px' }}
                bg="white"
                borderRadius="5px"
                onClick={() => push('/app')}
              >
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
            textAlign={{ base: 'center', md: 'left' }}
            w={{ base: 'auto', md: '500px' }}
            px={{ base: '20px', md: '0' }}
          >
            <Heading mb="20px" lineHeight="45px">
              The Web3 customer-centric email service that connects all
            </Heading>
            <Text mb="20px">Welcome to the Web3 Mailing Platform. </Text>

            <Box
              as="button"
              w="170px"
              h="50px"
              bg="white"
              borderRadius="5px"
              onClick={() => push('/app')}
            >
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
          <Box px={{ base: '10px', md: '0' }} mb="20px">
            <Image borderRadius="5px" w="700px" alt="1" src="/images/1.jpg" />
          </Box>
          <Box textAlign="center" color="white">
            <Heading mb="20px">Introducing Mails through crypto addresses.</Heading>
            <Text>
              We welcome the next mailing system of the Internet through Crypto Addresses.{' '}
            </Text>
          </Box>
        </Flex>

        <Box className="bg-dark" w="100%">
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            py="90px"
            w="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={{ base: '20px', md: '0' }} px="10px">
              <Image borderRadius="5px" w="600px" alt="1" src="/images/1.jpg" />
            </Box>

            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', md: 'flex-start' }}
              color="white"
              px={{ base: '10px', md: '0' }}
              w={{ base: 'auto', md: '450px' }}
              ml="20px"
            >
              <Heading textAlign={{ base: 'center', md: 'left' }} mb="20px" lineHeight="45px">
                Mailing Templates
              </Heading>

              <Text mb="20px">
                Introducing drafts, machine learning grammar supporter and templates to ensure that
                you always send a message that makes your mail professional and resonate with your
                customer.{' '}
              </Text>
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
            alignItems={{ base: 'center', md: 'flex-end' }}
            flexDirection="column"
            color="white"
            px={{ base: '10px', md: '0' }}
            mr={{ base: '0', md: '20px' }}
            w={{ base: 'auto', md: '450px' }}
            textAlign={{ base: 'center', md: 'right' }}
          >
            <Heading mb="20px" lineHeight="45px">
              Assigned Messages
            </Heading>
            <Text mb="20px">
              {` Whether you're busy or out, ByMail will prepare Mails according
              to the timestamp you've set the mail to and schedule to send your
              mail accordingly to the timestamp you've assigned.`}
            </Text>

            <Box
              mb={{ base: '20px', md: '0' }}
              as="button"
              w="170px"
              h="50px"
              bg="white"
              borderRadius="5px"
              onClick={() => push('/app')}
            >
              <Text color="black">Connect</Text>
            </Box>
          </Flex>

          <Box px="10px">
            <Image borderRadius="5px" w="600px" alt="1" src="/images/1.jpg" />
          </Box>
        </Flex>

        <Box className="bg-dark" px={{ base: '20px', md: '0' }} py="90px" w="100%">
          <Box maxW="1300px" mx="auto" w="100%">
            <Heading mb="20px" fontSize="50px" color="white" textAlign="center" lineHeight="45px">
              FAQ
            </Heading>
            <Accordion color="white" defaultIndex={[0]} allowMultiple>
              <AccordionItem py="10px" borderWidth="0px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      What is ByMail?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  Welcome to the Web3 Mailing Platform, ByMail. The Web3 Customer-Centric email
                  service that connects all through blockchain technology. With ByMail, Users are
                  able to send mails to other crypto addresses whether addresses or domains, just
                  like the emailing days!
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      How does ByMail work?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  ByMail functions similarly to how the Web2 Mailing System works where users
                  (crypto address) send mails to other crypto addresses/domains.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      Why ByMail?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  Here in ByMail, we seek a path for the future of Web3 and adoption of Crypto. For
                  Crypto to be adopted in the future, individuals have to start creating platforms
                  that users use on an everyday basis that adopt the crypto wallet as a form of
                  registering or creating a profile. To start this trend, it all starts from the
                  Mailing Platform to create accessibility for other platforms to come by in the
                  future as we act as a third party security for other platforms and communications
                  for users. We seek the future of Web3.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      What makes ByMail different?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  ByMail is a mailing platform operating using blockchain technology to send mails
                  and bridge businesses together. We are a decentralised platform that does not
                  collect data/information from our registered clients/users. By utilising
                  Peer-To-Peer Network, ByMail provides security for data of users where mails that
                  are sent are encrypted to provide protection.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py="10px">
                <h2>
                  <AccordionButton px="0px">
                    <Box flex="1" textAlign="left">
                      What Chain will ByMail be on?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="0px" pb={4}>
                  As of now, ByMail will be only accessible for the Ethereum Network. This means
                  only Ethereum Addresses can send mails to one another. More networks will be
                  available shortly as we seek scalability.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>

        <Box
          maxW={{ base: 'auto', md: '1440px' }}
          mx="auto"
          w="100%"
          id="footer"
          px="30px"
          py="50px"
          color="white"
        >
          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <Box>
              <Image w="200px" alt="logo" src="/images/logo.png" />
              <Text mt="5px" mb="5px">
                © 2022 ByMail
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
    </Box>
  );
}
