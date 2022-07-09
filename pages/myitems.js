import Sidebar from "../components/Sidebar/Sidebar";
import {
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import MyItems from "../components/Items/myItems";
import { useSelector } from "react-redux";

export default function Marketplace() {
  const user = useSelector((state) => state.user.user);
  const router = useRouter();

  // get all items owned by the user and pass it to Items component
  return (
    <HStack>
      <Sidebar />
      <VStack paddingLeft={10} width="100%">
        <Heading>
          Welcome to your home inventory,{" "}
          {user.name === undefined ? "" : user.name}
        </Heading>
        <Spacer />
        <Button
          backgroundColor="teal.500"
          color="white"
          _hover={{ color: "black", backgroundColor: "gray.100" }}
          onClick={() => router.push("/newitem")}
        >
          Click here to add a new item to the marketplace
        </Button>
        <Spacer />
        <Spacer />
        <Text>
          Below, you can see all the items that you have put on the marketplace.
        </Text>
        <MyItems />
      </VStack>
    </HStack>
  );
}
