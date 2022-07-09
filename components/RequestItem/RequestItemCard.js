import { Button, useColorModeValue, Box, Text, Flex } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";

export default function RequestItemCard({
  name,
  expiryDate,
  owner,
  requestor,
  status,
}) {
  const img = require("../../assets/fruits.jpeg");

  const { user } = useAuth();
  const isOwner = user.name == owner;

  const handleAccept = () => {
    console.log("Accept request");
  };

  const handleReject = () => {
    console.log("Reject request");
  };

  const handleOpenChat = () => {
    console.log("Open chat");
  };

  const handleCancel = () => {
    console.log("Cancel the request");
  };

  console.log(name, expiryDate, requestor, owner);

  return (
    <Box
      bg={
        isOwner
          ? useColorModeValue("teal.100", "gray.800")
          : useColorModeValue("blue.100", "gray.800")
      }
      margin="6px"
      padding="6px"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      width="100%"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Text color={"gray.500"} fontSize={"sm"}>
            Item Name: {name}
          </Text>
          <Text color={"gray.500"} fontSize={"sm"}>
            Expiry Date: {expiryDate}
          </Text>
          {isOwner && (
            <Text color={"gray.500"} fontSize={"sm"}>
              Requestor: {requestor}
            </Text>
          )}
          {!isOwner && (
            <Text color={"gray.500"} fontSize={"sm"}>
              Owner: {owner}
            </Text>
          )}
        </Box>

        {status == 0 && isOwner && (
          <Box>
            <Button color="green" margin="3px" onClick={handleAccept}>
              Accept
            </Button>
            <Button color="red" margin="3px" onClick={handleReject}>
              Reject
            </Button>
          </Box>
        )}
        {status == 0 && !isOwner && (
          <Box>
            <Button color="blue" margin="3px" onClick={handleOpenChat}>
              Chat
            </Button>
            <Button color="red" margin="3px" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
