import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Caudill&apos;s Crafts</title>
        <meta name="description" content="Caudill's Crafts web page" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
