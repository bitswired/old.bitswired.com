import Document, { Head, Html, Main, NextScript } from 'next/document';

import theme from '../theme';

class MyDocument extends Document {
  // static async getInitialProps(context) {
  //   const initialProps = await Document.getInitialProps(context);
  //   return { ...initialProps };
  // }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
