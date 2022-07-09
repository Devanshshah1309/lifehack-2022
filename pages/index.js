import {
  Heading,
  Center,
  Box,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { DesktopNav } from "../components/Navbar/index";

const img = require("../assets/fruits.jpeg");

import Footer from "../components/Footer/index";

export default function Home() {
  const router = useRouter();
  return (
    <Box backgroundColor="whiteAlpha.500">
      <Box paddingTop={4}>
        <DesktopNav />
      </Box>
      <SimpleGrid columns={2} paddingTop={10}>
        <Center paddingLeft={10}>
          <VStack>
            <Heading>Welcome to TradeEats!</Heading>
            <Text>
              In 2019, Singapore generated about 744 million kg of food waste.
              That is equivalent to 2 bowls of rice per person per day, or
              around 51,000 double decker buses.
            </Text>
          </VStack>
        </Center>
        <Image src={img} alt="Fruits" style={{ borderRadius: 15 }} />
      </SimpleGrid>
      <Center
        paddingTop={4}
        paddingBottom={4}
        paddingLeft={10}
        paddingRight={10}
      >
        <VStack>
          <Heading>Our Inspiration</Heading>
          <Text>
            When we heard the amount of food wastage in Singapore, we knew we
            had to act. There wasn't any time to lose. So, we started TradeEats
            - a simple app that allows you to share your food with others when
            you know you're not going to be able to finish it.
          </Text>
          <Text as="b" fontSize="xl">
            Our mission is clear: Save food, Save the world.
          </Text>
        </VStack>
      </Center>
      <Footer />
    </Box>
  );
}
