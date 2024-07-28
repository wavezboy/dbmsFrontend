import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />

        <meta property="og:image" content="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Noshride</title>
        <meta
          name="description"
          content="Welcome to Vendorsail, your premier platform for connecting vendors and clients in various industries. Whether you're a caterer, musician, photographer, event planner, or any other professional service provider, our website offers a seamless way to showcase your offerings and connect with potential clients. For clients, we provide an extensive directory of top-rated vendors, making it easy to find the perfect match for your business needs or special events. Explore our categories, read reviews, and contact vendors directly through our user-friendly interface. Join Vendorsail today and discover a world of business opportunities and professional collaborations."
        />
        <meta
          name="keywords"
          content="vendor-client connection, business vendors, client services, vendor marketplace, business networking, vendor directory, client directory, business partners, vendor services, client partnerships, vendor-client collaboration, business solutions, vendor search, client search, vendor matching, client matching, B2B marketplace, business vendors online, client vendor platform, business opportunities, vendor leads, client leads, business relationships, professional networking, vendor management, client management, caterer, musician, photographer, event planner, florist, DJ, videographer, graphic designer, web developer, marketing consultant, IT services, accountant, legal services, interior designer, personal trainer, health coach, wedding planner, corporate events, entertainment services"
        />

        <meta name="author" content="Bigi brand" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="noshride" />
        <meta
          name="googlebot"
          content="vendor-client connection, business vendors, client services, vendor marketplace, business networking, vendor directory, client directory, business partners, vendor services, client partnerships, vendor-client collaboration, business solutions, vendor search, client search, vendor matching, client matching, B2B marketplace, business vendors online, client vendor platform, business opportunities, vendor leads, client leads, business relationships, professional networking, vendor management, client management, caterer, musician, photographer, event planner, florist, DJ, videographer, graphic designer, web developer, marketing consultant, IT services, accountant, legal services, interior designer, personal trainer, health coach, wedding planner, corporate events, entertainment services"
        />
        <meta
          name="robots"
          content="vendor-client connection, business vendors, client services, vendor marketplace, business networking, vendor directory, client directory, business partners, vendor services, client partnerships, vendor-client collaboration, business solutions, vendor search, client search, vendor matching, client matching, B2B marketplace, business vendors online, client vendor platform, business opportunities, vendor leads, client leads, business relationships, professional networking, vendor management, client management, caterer, musician, photographer, event planner, florist, DJ, videographer, graphic designer, web developer, marketing consultant, IT services, accountant, legal services, interior designer, personal trainer, health coach, wedding planner, corporate events, entertainment services"
        />
        <meta property="og:title" content="noshride" />
        <meta property="og:url" content="https://www.vendorsail.com" />
        <meta
          property="og:type"
          content="vendor-client connection, business vendors, client services, vendor marketplace, business networking, vendor directory, client directory, business partners, vendor services, client partnerships, vendor-client collaboration, business solutions, vendor search, client search, vendor matching, client matching, B2B marketplace, business vendors online, client vendor platform, business opportunities, vendor leads, client leads, business relationships, professional networking, vendor management, client management, caterer, musician, photographer, event planner, florist, DJ, videographer, graphic designer, web developer, marketing consultant, IT services, accountant, legal services, interior designer, personal trainer, health coach, wedding planner, corporate events, entertainment services"
        />
        <meta
          property="og:description"
          content="Welcome to Vendorsail, your premier platform for connecting vendors and clients in various industries. Whether you're a caterer, musician, photographer, event planner, or any other professional service provider, our website offers a seamless way to showcase your offerings and connect with potential clients. For clients, we provide an extensive directory of top-rated vendors, making it easy to find the perfect match for your business needs or special events. Explore our categories, read reviews, and contact vendors directly through our user-friendly interface. Join Vendorsail today and discover a world of business opportunities and professional collaborations."
        />
      </Head>
      <div className="bg-bg">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
