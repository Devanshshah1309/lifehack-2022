import React from "react";
import {
  VStack,
  HStack,
  Flex,
  Avatar,
  Heading,
  IconButton,
  Divider,
  Text,
  Input,
  AvatarBadge,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
} from "@chakra-ui/react";
import { RiDribbbleLine, RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import UserAvatar from "./UserAvatar.js";
import ChatRow from "./ChatRow.js";

const onlineFriends = [
  { name: "Kent Dodds", src: "https://bit.ly/kent-c-dodds" },
  { name: "Ryan Florence", src: "https://bit.ly/ryan-florence" },
  { name: "Prosper Otemuyiwa", src: "https://bit.ly/prosper-baba" },
  { name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
  { name: "Segun Adebayo", src: "https://bit.ly/sage-adebayo" },
  { name: "Kola Tioluwani", src: "https://bit.ly/tioluwani-kolawole" },
  { name: "Dan Abrahmov", src: "https://bit.ly/dan-abramov" },
  { name: "Kent Dodds", src: "https://bit.ly/kent-c-dodds" },
  { name: "Ryan Florence", src: "https://bit.ly/ryan-florence" },
  { name: "Prosper Otemuyiwa", src: "https://bit.ly/prosper-baba" },
  { name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
  { name: "Segun Adebayo", src: "https://bit.ly/sage-adebayo" },
  { name: "Kola Tioluwani", src: "https://bit.ly/tioluwani-kolawole" },
  { name: "Dan Abrahmov", src: "https://bit.ly/dan-abramov" },
];

function ChatHistorySidebar() {
  return (
    <VStack w="full" h="full" p={4}>
      <Flex
        w="full"
        h="full"
        maxH="20%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt={4}
      >
        <Avatar size="xl" name="Dan Abrahmov" src="images/placeholder.png">
          <AvatarBadge
            bg="green.400"
            boxSize={5}
            borderWidth={2}
            right={3}
            bottom={2}
          />
        </Avatar>
        <Heading size="md" mt={3}>
          Devansh
        </Heading>
        <HStack mt={1}>
          <IconButton
            icon={<RiDribbbleLine />}
            variant="ghost"
            rounded="full"
            color="gray.500"
            aria-label="Dribbble Account"
          />
          <IconButton
            icon={<RiInstagramLine />}
            variant="ghost"
            rounded="full"
            color="gray.500"
            aria-label="Instagram Account"
          />
          <IconButton
            icon={<RiTwitterFill />}
            variant="ghost"
            rounded="full"
            color="gray.500"
            aria-label="Twitter Account"
          />
        </HStack>
      </Flex>
      <Divider borderBottomWidth="1px" borderBottomColor="gray.300" />
      {/* middle */}
      <Flex
        w="100%"
        h="full"
        maxH="20%"
        flexDirection="column"
        justifyContent="center"
      >
        <HStack justifyContent="space-between" m="10px 18px">
          <Heading size="xs">Friends Online</Heading>
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            {onlineFriends.length}
          </Text>
        </HStack>
        <HStack overflowX="auto" h={20} p="5px 15px">
          {onlineFriends.map(({ name, src }, index) => (
            <UserAvatar key={index} name={name} src={src} />
          ))}
        </HStack>
      </Flex>
      <Divider borderBottomWidth="1px" borderBottomColor="gray.300" />
      {/* bottom */}
      <Flex
        w="full"
        h="full"
        maxH="60%"
        flexDirection="column"
        alignItems="center"
      >
        <Heading size="xs" w="full" pl={3} mb={2} mt={5}>
          Chats
        </Heading>
        <InputGroup w="full">
          <InputLeftElement
            pointerEvents="none"
            color="gray.400"
            children={<BiSearch fontSize="28px" />}
            pb={1}
          />
          <Input
            size="sm"
            fontSize={18}
            variant="filled"
            rounded="full"
            placeholder="Search chat"
          />
        </InputGroup>
        <List w="full" overflowY="auto" mt={5}>
          <ListItem p="7px 12px">
            <ChatRow />
          </ListItem>
        </List>
      </Flex>
    </VStack>
  );
}

export default ChatHistorySidebar;
