// import App from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import ContextsProvider from 'context';
import { MainLayout } from 'layouts';
import type { AppProps /*, AppContext */ } from 'next/app';
import theme from 'theme';

function App({ Component, pageProps }: AppProps): JSX.Element | null {
  if (typeof window === 'undefined') return null;

  return (
    <ChakraProvider theme={theme} resetCSS>
      <ContextsProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ContextsProvider>
    </ChakraProvider>
  );
}

export default App;
