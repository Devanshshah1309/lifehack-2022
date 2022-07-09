import { Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ProfileContainer from "../components/Profile";

const Profile = () => {
  return (
    <Flex alignItems={"center"}>
      <Sidebar />
      <ProfileContainer />
    </Flex>
  );
};

export default Profile;
