import React from "react";
import {
  Flex,
  VStack,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stat,
  StatLabel,
  StatNumber,
  IconButton,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import ChatBubble from "./ChatBubble.js";

const messages = [
  {
    message: "Hey Jun! Would you like to go out for a cup of coffe?",
    from: "others",
    dateSent: "20:21",
  },
  {
    message: "ummmm, I am super busy now but tomorrow morning I can.",
    from: "me",
    dateSent: "20:23",
  },
  {
    message: "That's too early! How about at noon?",
    from: "others",
    dateSent: "20:30",
  },
  {
    message: "Okay. I am going to do some business around your office.",
    from: "me",
    dateSent: "20:31",
  },
  {
    message: "That's lucky! What about at hardware store on 21 Duck Ave?",
    from: "others",
    dateSent: "20:45",
  },
  {
    message: "Sounds good. I will bring my puppy. Is it okay?",
    from: "me",
    dateSent: "20:50",
  },
  {
    message: "Hummmm, Sorry, I have sick of dog alegies.",
    from: "others",
    dateSent: "20:59",
  },
  {
    message: "Hey,,, then see you another day..",
    from: "me",
    dateSent: "21:01",
  },
  {
    message: "When???",
    from: "others",
    dateSent: "21:12",
  },
  {
    message: "You can ask it to God. LOL.",
    from: "me",
    dateSent: "21:50",
  },
];

function Chat() {
  return (
    <VStack
      w="full"
      h="full"
      spacing={1}
      alignItems="center"
      justifyContent="center"
      px={3}
      borderLeftWidth={1}
      borderRightWidth={1}
      borderColor="gray.200"
    >
      <Flex w="full" h="10%" alignItems="center" justifyContent="center">
        <InputGroup w="98%">
          <InputLeftElement
            pointerEvents="none"
            color="gray.400"
            fontSize="1.3em"
            pb={1}
            children={<BiSearch />}
          />
          <Input
            size="sm"
            variant="filled"
            rounded="full"
            placeholder="Search friends"
          />
        </InputGroup>
      </Flex>
      <Box w="full" h="10%">
        <Stat>
          <StatLabel color="gray.500">Chat with</StatLabel>
          <StatNumber>Devansh</StatNumber>
        </Stat>
      </Box>
      <Box overflowY="auto" p="3px 7px" w="full" h="70%">
        {messages.map(({ message, from, dateSent }, index) => (
          <ChatBubble
            key={index}
            message={message}
            from={from}
            dateSent={dateSent}
          />
        ))}
      </Box>
      <Flex w="full" h="10%" alignItems="center" justifyContent="center">
        <Input
          variant="flushed"
          placeholder="Type your message"
          width="90%"
          p="0 10px"
        />
        <IconButton
          colorScheme="blue"
          aria-label="send message"
          variant="ghost"
          icon={<IoSend />}
        />
      </Flex>
    </VStack>
  );
}

export default Chat;
