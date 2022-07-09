import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function SocialProfileWithImage() {
  const user = useSelector((state) => state.user.user);
  return (
    <Container>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Flex>
          <Flex justify={"center"} mt={-12} position="relative">
            <Image
              w={"160px"}
              src={
                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              objectFit={"cover"}
            />
            <Avatar
              size={"xl"}
              position="absolute"
              top="130px"
              left="100px"
              src={"images/placeholder.png"}
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={8} ml="10">
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {user.name}
              </Heading>
              <Text color={"gray.500"}>{user.email}</Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{user.postal}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Postal
                </Text>
              </Stack>
            </Stack>

            <Button
              w={"full"}
              mt={8}
              rounded={"md"}
              size="sm"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Edit your profile
            </Button>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
