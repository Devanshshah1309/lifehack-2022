import Sidebar from "../components/Sidebar/Sidebar";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import Items from "../components/Items/Items";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
export default function Marketplace() {
  const { user } = useAuth();
  const router = useRouter();

  // get all items owned by the user and pass it to Items component
  return (
    <HStack>
      <Sidebar />
      <VStack paddingLeft={10} width="100%">
        <Heading>
          Welcome to your home inventory,
          {user.name === undefined ? " John Doe" : user.name}
        </Heading>
        <Spacer />
        <Button
          backgroundColor="teal.500"
          onClick={() => router.push("/newitem")}
        >
          Click here to add a new item to the marketplace
        </Button>
        <Spacer />
        <Spacer />
        <Text>
          Below, you can see all the items that you have put on the marketplace.
        </Text>
        <Items />
      </VStack>
    </HStack>
  );
}
