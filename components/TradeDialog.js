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
import {
  addDoc,
  collection,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/config";

const TradeDialog = ({
  isOpen,
  onClose,
  itemName,
  title,
  location,
  expiryDate,
  description,
  owner,
  itemId,
}) => {
  const router = useRouter();
  const { user } = useAuth();
  const handleChat = () => {
    return router.push("/chat");
  };

  const handleTrade = async (e) => {
    e.preventDefault();
    const updateItem = async (item) => {
      const itemRef = doc(db, "items", itemId);
      await updateDoc(itemRef, {
        onTrade: true,
      });
    };
    updateItem();
    addDoc(collection(db, "trades"), {
      buyerId: user.uid,
      itemId: itemId,
      tradeCloseAt: null,
      tradeStartAt: Timestamp.now(),
      tradeStatus: 0,
      traderId: owner,
    });
    onClose();
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
              Request
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TradeDialog;
