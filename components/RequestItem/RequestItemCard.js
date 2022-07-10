import { Button, useColorModeValue, Box, Text, Flex } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";

export default function RequestItemCard({
  name,
  expiryDate,
  owner,
  requestor,
  status,
}) {
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

  return (
    <Box
      margin="6px"
      padding="6px"
      borderWidth="1px"
      position="relative"
      width="100%"
    >
      <Flex flexDirection="column">
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
          <Text color={"black.500"} fontSize={"md"}>
            {name} expiring on <b>{expiryDate}</b>
          </Text>
          {isOwner && (
            <Text color={"black.500"} fontSize={"sm"}>
              Requestor: {requestor}
            </Text>
          )}
          {!isOwner && (
            <Text color={"black.500"} fontSize={"sm"}>
              Owner: {owner}
            </Text>
          )}
        </Box>

        {status == 0 && isOwner && (
          <Box>
            <Button color="green" onClick={handleAccept}>
              Accept
            </Button>
            <Button color="red" onClick={handleReject}>
              Reject
            </Button>
          </Box>
        )}
        {status == 0 && !isOwner && (
          <Flex justifyContent={"end"}>
            <Button colorScheme="teal" size="sm" m="1" onClick={handleOpenChat}>
              Chat
            </Button>
            <Button color="red" size="sm" m="1" onClick={handleCancel}>
              Cancel
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
