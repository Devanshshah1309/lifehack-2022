import Sidebar from "../components/Sidebar/Sidebar";
import { Box, Flex, VStack, Heading, Text, HStack } from "@chakra-ui/react";
import Items from "../components/Items/Items";
import { useAuth } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { userAction } from "../store/reducers/users";

export default function Marketplace() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
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
    }
  }, []);

  useEffect(() => {
    dispatch(userAction.saveUserState({ user: userData }));
  }, [userData]);

  return (
    <Flex>
      <Sidebar />
      <VStack paddingLeft={10} width="100%">
        <Heading m="5">
          Welcome to the Marketplace,{" "}
          <Text color="teal.500" display={"inline-block"}>
            {userData?.name && userData.name}
          </Text>
        </Heading>
        <Text fontSize="xl">
          Below you can see all the items available for you to trade.
        </Text>
        <Items />
      </VStack>
    </Flex>
  );
}
