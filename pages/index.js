import {
  Heading,
  Center,
  Grid,
  GridItem,
  Box,
  Stack,
  Button,
  Text,
  Flex,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "./../assets/fruits.jpeg";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { DesktopNav } from "../components/Navbar";

const img = require("../assets/fruits.jpeg");

export default function Home() {
  const router = useRouter();
  return (
    <Box backgroundColor="gray.300">
      <Box paddingTop={4}>
        <DesktopNav />
      </Box>
      <HStack paddingTop={10}>
        <Image src={logo} alt="Fruits" objectFit="cover" />
      </HStack>
    </Box>
  );
}
