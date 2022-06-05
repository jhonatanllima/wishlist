import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppProvider } from '~/hooks';
import { Header } from '~/components';
import GlobalStyles from '~/styles/GlobalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Header logo="MagaNets" />
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
      <ToastContainer />
      <GlobalStyles />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default App;
