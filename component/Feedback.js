import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Link,
  Text,
  Flex,
  Stack,
  Image,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function SettingMobile({ isOpen, onClose }) {
  const [value, setValue] = React.useState("1");
  const [secondValue, setSecondValue] = React.useState("1");
  const [thirdValue, setThirdValue] = React.useState("1");
  const [fourthValue, setFourthValue] = React.useState("1");

  const [placement, setPlacement] = React.useState("right");
  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg="bg">
        <DrawerBody>
          <Flex flexDirection="column" borderRadius="15px" w="100%" bg="bg">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              borderBottomWidth="1px"
              borderColor="text"
              py="15px"
            >
              <Text fontSize="10px" color="white">
                Send feedback to Bymail
              </Text>
              <Box onClick={onClose} as="button" mt="5px">
                <Image w="10px" alt="close" src="/images/close.png" />
              </Box>
            </Flex>

            <Text py="10px" fontSize="10px" color="white">
              Describe your issue or suggestion
            </Text>

            <Textarea
              color="white"
              borderRadius="0px"
              fontSize="10px"
              placeholder="Tell us how we can improve our product"
            />
            <Text mt="3px" fontSize="10px" color="white">
              Please don’t include any sensitive information
            </Text>
            <Box mt="20px">
              <Text mb="5px" fontSize="10px" color="white">
                A screenshot will help us better understand the issue.
              </Text>
              <Box
                w="100%"
                py="10px"
                borderWidth="1px"
                as="button"
                borderColor="text"
                mb="50px"
              >
                <Text color="blue" fontSize="10px">
                  Capture Screenshot
                </Text>
              </Box>
            </Box>
            <Box
              pb="10px"
              borderBottomWidth="1px"
              borderColor="text"
              mt="100px"
            >
              <Checkbox color="white">
                <Text color="white" fontSize="10px">
                  We may email you for more information or updates
                </Text>
              </Checkbox>
              <Text color="white" fontSize="10px">
                Some account and system information may be sent to Bymail. We
                will use it to fix problems and improve our services, subject to
                our Privacy Policy and Terms of Service. We may email you for
                more information or updates. Go to Legal Help to ask for content
                changes for legal reasons.
              </Text>
            </Box>
            <Flex
              w="100%"
              mt="10px"
              maxW="70px"
              py="10px"
              borderWidth="1px"
              as="button"
              borderColor="text"
              justifyContent="center"
              position="absolute"
              right="22px"
              bottom="38%"
            >
              <Text color="white" fontSize="10px">
                Send
              </Text>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
