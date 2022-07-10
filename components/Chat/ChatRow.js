import React from "react";
import { HStack, VStack, Flex, Avatar, Heading, Text } from "@chakra-ui/react";

const ChatRow = () => {
  return (
    <HStack
      w="full"
      borderBottomWidth={1}
      borderBottomColor="gray.200"
      style={{ transition: "background 300ms" }}
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      pb={3}
      mb={3}
    >
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <VStack w="83%" alignItems="flex-start">
        <Flex w="full" justifyContent="space-between">
          <Heading size="sm">Kevin Korea</Heading>
          <Text fontSize="xs" color="gray.500" mr={3}>
            08:30
          </Text>
        </Flex>
        <Text
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          w="83%"
          fontSize="xs"
          color="gray.600"
        >
          Hey dude, where is my shoes? I gotta have to go for a walk for a while
          hey man come one~~~~push push babe
        </Text>
      </VStack>
    </HStack>
  );
};

export default ChatRow;
