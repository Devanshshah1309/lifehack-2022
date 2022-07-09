import "../styles/globals.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Flex
          flexDirection="column"
          width="100vw"
          height="100vh"
          justifyContent="center"
        >
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
