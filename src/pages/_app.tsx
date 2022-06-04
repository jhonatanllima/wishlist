import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Header } from '~/components';

import GlobalStyles from '~/styles/GlobalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Head>
        <title>Wishlist</title>
        <link rel="shortcut icon" href="images/icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" />

        <meta
          name="description"
          content="A test project for Luiza Labs working with TypeScript, React, NextJs and styled components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
