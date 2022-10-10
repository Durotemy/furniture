 import NProgress from "nprogress"
import Layout from "../components/Layout";
import '../styles/globals.css'
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </div>
  )
}
export default MyApp;
