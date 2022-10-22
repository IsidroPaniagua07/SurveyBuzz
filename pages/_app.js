import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Survey Buzz</title>
        <meta name="description" content="Anonymous surveys" />
      </Head>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  );
}

export default MyApp;
