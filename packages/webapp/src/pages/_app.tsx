// import App from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import ContextsProvider from 'context';
import { MainLayout } from 'layouts';
import type { AppProps /*, AppContext */ } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from 'theme';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps): JSX.Element | null {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <QueryClientProvider client={queryClient}>
        <ContextsProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ContextsProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
