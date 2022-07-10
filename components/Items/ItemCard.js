import {
  AspectRatio,
  Box,
  Button,
  Heading,
  Text,
  Image,
  Skeleton,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TradeDialog from "../TradeDialog";
import { FavouriteButton } from "./FavouriteButton";
import Link from "next/link";

const ProductCard = (props) => {
  const {
    name,
    id,
    address,
    expiry,
    imageUrl,
    title,
    isOpen,
    onClose,
    onClick,
    description,
    owner,
  } = props;

  console.log(id);

  return (
    <>
      <Stack
        spacing={useBreakpointValue({ base: "4", md: "5" })}
        p="6"
        borderRadius={"lg"}
        boxShadow="lg"
        onClick={onClick}
        cursor="pointer"
        _hover={{ bg: "gray.100" }}
      >
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={imageUrl}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
            />
          </AspectRatio>
          <FavouriteButton
            position="absolute"
            top="4"
            right="4"
            aria-label={`Add ${name} to your favourites`}
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {name}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Text color={"gray.500"}>{description}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Expiry date</Text>
            <Text color={"gray.500"}>{expiry}</Text>
          </Stack>
        </Stack>
      </Stack>
      <TradeDialog
        isOpen={isOpen}
        onClose={onClose}
        itemName={name}
        location={address}
        title={title}
        expiryDate={expiry}
        description={description}
        owner={owner}
        itemId={id}
      />
    </>
  );
};

export default ProductCard;
