import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.scss";

import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { MoralisProvider } from "react-moralis";

function Layout({ children }) {
  return (
    <MoralisProvider
      appId="T8e6cdk14lL3mhhkG3a7MnvtqbkS4bPHIQzRbugr"
      serverUrl="https://jia8uhhivhhy.usemoralis.com:2053/server"
    >
      <Nav />
      {children}
      <Footer />
    </MoralisProvider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
