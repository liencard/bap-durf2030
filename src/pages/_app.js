import '../styles/globals.scss';
import '../styles/styles.scss';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';
import theme from '../theme';
import Head from 'next/head';
import 'react-quill/dist/quill.snow.css';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>DURF2030</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="og:title" property="og:title" name="og:title" content="DURF2030" key="title" />
        <meta property="og:type" content="website" />
        <meta
          name="og:description"
          property="og:description"
          content="Kortrijk en regio durven jullie het aan? Via 2030 projecten tekenen we de komende 10 jaar de contouren van de stad waarvan we durven dromen."
        />
        <meta property="og:keywords" content="crowdfunding, stakeholders, burgers, Kortrijk, projecten" />
        <meta property="og:site_name" content="DURF2030" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/logo.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
