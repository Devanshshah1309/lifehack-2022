import React from "react";
import { Flex, VStack, HStack, Text, Box } from "@chakra-ui/react";

const ChatBubble = ({ message, from, dateSent }) => {
  const isMe = from === "me";
  const bottomLeftRadius = isMe ? 0 : null;
  const bottomRightRadius = isMe ? null : 0;

  return (
    <VStack spacing={1} alignItems={isMe ? "flex-start" : "flex-end"}>
      <Box
        bg={from === "me" ? "blue.50" : "gray.100"}
        px={4}
        py={2}
        maxW={80}
        rounded="full"
        borderBottomLeftRadius={bottomLeftRadius}
        borderBottomRightRadius={bottomRightRadius}
        overflow="hidden"
        fontSize="xs"
      >
        {message}
      </Box>
      <Text fontSize="xs" color="gray">
        {dateSent}
      </Text>
    </VStack>
  );
};

export default ChatBubble;
