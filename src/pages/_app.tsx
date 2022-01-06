import { ChakraProvider } from '@chakra-ui/provider';
import ContextsProvider from 'context';
import { MainLayout } from 'layouts';
import type { AppProps /*, AppContext */ } from 'next/app';
// import App from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from 'theme';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps): JSX.Element | null {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
      </Head>

      <ChakraProvider theme={theme} resetCSS>
        <QueryClientProvider client={queryClient}>
          <ContextsProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ContextsProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
