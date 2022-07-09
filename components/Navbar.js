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
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const router = useRouter();

  const NAV_ITEMS = [
    {
      label: "Sign up",
      onClick: () => router.push("/sign_up"),
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
        <Box key={navItem.label}>
          <Link
            p={8}
            href={navItem.href ?? "#"}
            fontSize={"2xl"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Flex>
  );
};
