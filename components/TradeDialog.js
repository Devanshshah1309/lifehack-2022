import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const TradeDialog = ({
  isOpen,
  onClose,
  itemName,
  title,
  location,
  expiryDate,
  description,
}) => {
  const router = useRouter();

  const handleChat = () => {
    return router.push("/chat");
  };

  // TODO
  const handleTrade = () => {
    console.log("Trade");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Text fontSize="md">{`Item name: ${itemName}`}</Text>
              <Text fontSize="md">{`Location: ${location}`}</Text>
              <Text fontSize="md">{`Expiry Date: ${expiryDate}`}</Text>
              <Text fontSize="md">{`Item Description: ${description}`}</Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleChat}>
              Chat
            </Button>
            <Button colorScheme="green" mr={3} onClick={handleTrade}>
              Trade
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TradeDialog;
