// import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";

// export default function ItemCard({ name, expiry, distance, photoPath }) {
//   return (
//     <Box>
//       <Center py={12}>
//         <Box
//           role={"group"}
//           p={6}
//           maxW={"330px"}
//           w={"full"}
//           boxShadow={"2xl"}
//           rounded={"lg"}
//           pos={"relative"}
//           zIndex={1}
//         >
//           <Box
//             rounded={"lg"}
//             mt={-12}
//             pos={"relative"}
//             height={"230px"}
//             _after={{
//               transition: "all .3s ease",
//               content: '""',
//               w: "full",
//               h: "full",
//               pos: "absolute",
//               top: 5,
//               left: 0,
//               filter: "blur(15px)",
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: "blur(20px)",
//               },
//             }}
//           >
//             <Image
//               rounded={"lg"}
//               height={230}
//               width={282}
//               objectFit={"cover"}
//               src={"/images/milk.jpg"}
//             />
//           </Box>
//           <Stack pt={10} align={"center"}>
//             <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
//               Item Name: {name}
//             </Heading>
//             <Text color={"gray.500"} fontSize={"sm"}>
//               Expiry Date: {expiry}
//             </Text>
//             <Text color={"gray.500"} fontSize={"sm"}>
//               Distance: {distance}
//             </Text>
//           </Stack>
//         </Box>
//       </Center>
//     </Box>
//   );
// }

import {
  AspectRatio,
  Box,
  Button,
  Heading,
  Text,
  Image,
  Link,
  Skeleton,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TradeDialog from "../TradeDialog";
import { FavouriteButton } from "./FavouriteButton";

const ProductCard = (props) => {
  const {
    name,
    distance,
    expiry,
    imageUrl,
    title,
    isOpen,
    onClose,
    onClick,
    description,
  } = props;

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
        location={distance}
        title={title}
        expiryDate={expiry}
        description={description}
      />
    </>
  );
};

export default ProductCard;
