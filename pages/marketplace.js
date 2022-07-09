import Sidebar from "../components/Sidebar/Sidebar";
import { Box, Flex, HStack, VStack, Heading, Text } from "@chakra-ui/react";
import Items from "../components/Items/Items";
import { useAuth } from "../context/AuthContext";
export default function Marketplace() {
  const { user } = useAuth();
  return (
    <HStack>
      <Sidebar />
      <VStack paddingLeft={10} width="100%">
        <Heading>
          Welcome to the Marketplace,
          {user.name === undefined ? " John Doe" : user.name}
        </Heading>
        <Text fontSize="2xl">
          Below, you can see all the items available for you to trade.
        </Text>
        <Items />
      </VStack>
    </HStack>
  );
}
