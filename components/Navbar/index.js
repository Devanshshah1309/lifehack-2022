import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import CallToActionWithIllustration from "../Landing";
import { GiTrade } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

const Links = ["About", "Contact"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserInformation = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserData({
          ...userData,
          registeredAt: userData.registeredAt
            .toDate()
            .toISOString()
            .substring(0, 10),
        });
      } else {
        console.log("This document does not exists");
      }
    };
    getUserInformation();
  }, []);

  return (
    <>
      <Box px={8}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems={"center"}>
              <Icon as={GiTrade} boxSize="2rem" color="teal.500" mr="2" />
              <Text fontSize="xl" fontWeight={900}>
                TradeEats
              </Text>
            </Flex>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              {user ? (
                <Link href="/marketplace">TO MARKETPLACE</Link>
              ) : (
                <Link href="/login">LOG IN</Link>
              )}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        <CallToActionWithIllustration />
      </Box>
    </>
  );
}
