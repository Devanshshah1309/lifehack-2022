import "../styles/globals.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { AuthContextProvider } from "../context/AuthContext";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
