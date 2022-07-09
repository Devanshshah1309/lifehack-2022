import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export const DesktopNav = () => {
  const router = useRouter();

  const NAV_ITEMS = [
    {
      label: "Sign up",
      onClick: () => router.push("/signup"),
    },
    {
      label: "Login",
      onClick: () => router.push("/login"),
    },
    {
      label: "Our Inspiration",
    },
  ];

  return (
    <Flex spacing={4} flexDirection="row-reverse">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} padding={4}>
          {navItem.onClick === undefined ? (
            <Link
              p={8}
              href={navItem.href ?? "#"}
              fontSize={"xl"}
              fontWeight={500}
              _hover={{
                textDecoration: "none",
              }}
            >
              {navItem.label}
            </Link>
          ) : (
            <Button bgColor="teal.500" onClick={navItem.onClick}>
              <Text fontSize={"xl"} fontWeight={500}>
                {navItem.label}
              </Text>
            </Button>
          )}
        </Box>
      ))}
    </Flex>
  );
};
