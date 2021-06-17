// import App from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "layouts";
import type { AppProps /*, AppContext */ } from "next/app";
import theme from "theme";

function App({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") return null;

  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
