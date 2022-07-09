import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
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

const LinkItems = [
  { name: "Profile", icon: CgProfile },
  { name: "Marketplace", icon: CgShoppingCart },
  { name: "Requests", icon: CgArrowsExchange },
  { name: "Messages", icon: BsChatLeftDots },
  { name: "My Items", icon: CgHome },
];
const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Flex alignItems="center" justifyContent="start" m="6">
        <Icon as={GiTrade} boxSize="2rem" color="teal.500" m="2" />
        <Text fontSize="2xl" color="teal.500" fontWeight="bold">
          TradeEats
        </Text>
        <CloseButton display={{ base: "auto", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
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
