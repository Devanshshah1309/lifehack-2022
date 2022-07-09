import Sidebar from "../components/Sidebar/Sidebar";
import {
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  AspectRatio,
  Container,
  forwardRef,
  Button,
  Input,
  Flex,
  Image,
  Stack,
  Spacer,
  SimpleGrid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const first = {
  rest: {
    rotate: "-15deg",
    scale: 0.95,
    x: "-50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "-70%",
    scale: 1.1,
    rotate: "-20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const second = {
  rest: {
    rotate: "15deg",
    scale: 0.95,
    x: "50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "70%",
    scale: 1.1,
    rotate: "20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const third = {
  rest: {
    scale: 1.1,
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.3,
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const PreviewImage = forwardRef((props, ref) => {
  return (
    <Box
      bg="white"
      top="0"
      height="100%"
      width="100%"
      position="absolute"
      borderWidth="1px"
      borderStyle="solid"
      rounded="sm"
      borderColor="gray.400"
      as={motion.div}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
      {...props}
      ref={ref}
    />
  );
});

// function UploadImage() {
//   const controls = useAnimation();
//   const startAnimation = () => controls.start("hover");
//   const stopAnimation = () => controls.stop();
//   return (
//     <Container alignSelf="center">
//       <AspectRatio width="64" ratio={1}>
//         <Box
//           borderColor="gray.300"
//           borderStyle="dashed"
//           borderWidth="2px"
//           rounded="md"
//           shadow="sm"
//           role="group"
//           transition="all 150ms ease-in-out"
//           _hover={{
//             shadow: "md",
//           }}
//           as={motion.div}
//           initial="rest"
//           animate="rest"
//           whileHover="hover"
//         >
//           <Box position="relative" height="100%" width="100%">
//             <Box
//               position="absolute"
//               top="0"
//               left="0"
//               height="100%"
//               width="100%"
//               display="flex"
//               flexDirection="column"
//             >
//               <Stack
//                 height="100%"
//                 width="100%"
//                 display="flex"
//                 alignItems="center"
//                 justify="center"
//                 spacing="4"
//               >
//                 <Box height="16" width="12" position="relative">
//                   <PreviewImage
//                     variants={first}
//                     backgroundImage="url('https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg')"
//                   />
//                   <PreviewImage
//                     variants={second}
//                     backgroundImage="url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2628&q=80')"
//                   />
//                   <PreviewImage
//                     variants={third}
//                     backgroundImage={`url("https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2480&q=80")`}
//                   />
//                 </Box>
//                 <Stack p="8" textAlign="center" spacing="1">
//                   <Heading fontSize="lg" color="gray.700" fontWeight="bold">
//                     Drop images here
//                   </Heading>
//                   <Text fontWeight="light">or click to upload</Text>
//                 </Stack>
//               </Stack>
//             </Box>
//             <Input
//               type="file"
//               height="100%"
//               width="100%"
//               position="absolute"
//               top="0"
//               left="0"
//               opacity="0"
//               aria-hidden="true"
//               accept="image/*"
//               onDragEnter={startAnimation}
//               onDragLeave={stopAnimation}
//               onChange={(event) => setPhoto(event.target.value)}
//             />
//           </Box>
//         </Box>
//       </AspectRatio>
//     </Container>
//   );
// }

export default function NewItem() {
  function UploadImage() {
    const controls = useAnimation();
    const startAnimation = () => controls.start("hover");
    const stopAnimation = () => controls.stop();
    return (
      <Container alignSelf="center">
        <AspectRatio width="64" ratio={1}>
          <Box
            borderColor="gray.300"
            borderStyle="dashed"
            borderWidth="2px"
            rounded="md"
            shadow="sm"
            role="group"
            transition="all 150ms ease-in-out"
            _hover={{
              shadow: "md",
            }}
            as={motion.div}
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <Box position="relative" height="100%" width="100%">
              <Box
                position="absolute"
                top="0"
                left="0"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
              >
                <Stack
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justify="center"
                  spacing="4"
                >
                  <Box height="16" width="12" position="relative">
                    <PreviewImage
                      variants={first}
                      backgroundImage="url('https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg')"
                    />
                    <PreviewImage
                      variants={second}
                      backgroundImage="url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2628&q=80')"
                    />
                    <PreviewImage
                      variants={third}
                      backgroundImage={`url("https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2480&q=80")`}
                    />
                  </Box>
                  <Stack p="8" textAlign="center" spacing="1">
                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                      Drop images here
                    </Heading>
                    <Text fontWeight="light">or click to upload</Text>
                  </Stack>
                </Stack>
              </Box>
              <Input
                type="file"
                height="100%"
                width="100%"
                position="absolute"
                top="0"
                left="0"
                opacity="0"
                aria-hidden="false"
                accept="image/*"
                onDragEnter={startAnimation}
                onDragLeave={stopAnimation}
                onChange={(event) => setPhoto(event.target.files[0])}
              />
            </Box>
          </Box>
        </AspectRatio>
      </Container>
    );
  }
  const { user } = useAuth();
  const router = useRouter();
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  // get all items owned by the user and pass it to Items component

  const handleSubmit = () => undefined;
  return (
    <HStack>
      <Sidebar />
      <VStack paddingLeft={10} width="100%">
        <Heading style={{ verticalAlign: "top" }}>Add a new item</Heading>
        <Flex align="center">
          <form onSubmit={handleSubmit}>
            <Box shadow="2xl">
              <SimpleGrid columns={2} rowGap={4} padding={4}>
                <Center>
                  <GridItem>
                    <Text>Item Name</Text>
                  </GridItem>
                </Center>
                <Input
                  value={itemName}
                  onChange={(event) => setItemName(event.target.value)}
                ></Input>
                <Center>
                  <GridItem>
                    <Text>Item Description</Text>
                  </GridItem>
                </Center>
                <Input
                  value={itemDescription}
                  onChange={(event) => setItemDescription(event.target.value)}
                ></Input>
                <Center>
                  <GridItem>
                    <Text>Expiry Date</Text>
                  </GridItem>
                </Center>
                <GridItem>
                  <ReactDatePicker
                    minDate={new Date()}
                    selected={expiryDate}
                    onChange={(date) => setExpiryDate(date)}
                  />
                </GridItem>
                <Center>
                  <GridItem>
                    <Text>Photo</Text>
                  </GridItem>
                </Center>
                <GridItem>
                  {photo !== null ? (
                    <>
                      <Image src={URL.createObjectURL(photo)} width="250px" />
                      <Text color="teal.500">Image successfully uploaded!</Text>
                    </>
                  ) : (
                    <UploadImage />
                  )}
                </GridItem>
                <Spacer />
              </SimpleGrid>
              <Flex flexDirection="row-reverse">
                <Button
                  backgroundColor="teal.500"
                  padding={2}
                  m={2}
                  onClick={() => console.log(photo)}
                  disabled={itemName === "" || itemDescription === ""}
                >
                  Add
                </Button>
              </Flex>
            </Box>
          </form>
        </Flex>
      </VStack>
    </HStack>
  );
}
