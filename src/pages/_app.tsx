import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [path, setpath] = useState("");

  console.log(router.pathname);

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />

        <meta property="og:image" content="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DBMS</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <meta name="author" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="" />
        <meta name="googlebot" content="" />
        <meta name="robots" content="" />
        <meta property="og:title" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="" />
        <meta property="og:description" content="" />
      </Head>

      <div className="bg-[#ddd] min-h-screen">
        {router.pathname === "/" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </div>
    </>
  );
}
