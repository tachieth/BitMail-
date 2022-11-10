import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';
import '@fontsource/roboto';



const theme = extendTheme({
  colors: {
    bg: '#42367c',
    pink: '#31254b',
    bg: '#2c2c2c',
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
