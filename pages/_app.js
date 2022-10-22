import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Survey Buzz</title>
        <meta name="description" content="Anonymous surveys" />
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  );
}

export default MyApp;
