import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
import {
  CgProfile,
  CgArrowsExchange,
  CgShoppingCart,
  CgHome,
} from "react-icons/cg";
import { BsChatLeftDots } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GiTrade } from "react-icons/gi";
import { useRouter } from "next/router";
import Request from "../RequestItem";
import Link from "next/link";

const LinkItems = [
  { name: "Profile", icon: CgProfile, path: "/profile" },
  { name: "Marketplace", icon: CgShoppingCart, path: "/marketplace" },
  { name: "Requests", icon: CgArrowsExchange },
  { name: "Messages", icon: BsChatLeftDots, path: "/messages" },
  { name: "My Items", icon: CgHome, path: "/myitems" },
];
const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <Box minH="100vh" boxShadow={"lg"}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "base", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} />
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box w={{ base: "full", md: 60 }} pos="fixed" h="full" {...rest}>
      <Link href="/">
        <Flex
          alignItems="center"
          justifyContent="start"
          m="6"
          _hover={{ pointer: "cursor", textDecoration: "none" }}
        >
          <Icon as={GiTrade} boxSize="2rem" color="teal.500" m="2" />
          <Text fontSize="2xl" color="teal.500" fontWeight="bold">
            TradeEats
          </Text>
          <CloseButton
            display={{ base: "auto", md: "none" }}
            onClick={onClose}
          />
        </Flex>
      </Link>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          name={link.name}
          icon={link.icon}
          path={link.path}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ name, icon, children, path, ...rest }) => {
  return name === "Requests" ? (
    <Popover placement="right" arrowSize={20} colorScheme="teal" closeOnEsc>
      <PopoverTrigger>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "teal.500",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Notifications</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Request />
          </PopoverBody>
          <PopoverFooter>Save food, save the world.</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  ) : (
    <Link
      href={path === undefined ? "#" : path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "teal.500",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 3, md: 24 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="center"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="xl" color="teal.500" fontWeight="bold">
        TradeEats
      </Text>
    </Flex>
  );
};

export default Sidebar;
