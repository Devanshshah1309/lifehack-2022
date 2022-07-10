import { Flex } from "@chakra-ui/react";
import React from "react";
import IndexPage from "../components/Chat";
import Sidebar from "../components/Sidebar/Sidebar";

const Messages = () => {
  return (
    <Flex>
      <Sidebar />
      <IndexPage />
    </Flex>
  );
};

export default Messages;
