import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';

const theme = extendTheme({ colors: {}, fonts: {} });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
