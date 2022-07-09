import "../styles/globals.css";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { AuthContextProvider } from "../context/AuthContext";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ChakraProvider>
          <Box bg="whitesmoke">
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
