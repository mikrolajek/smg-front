import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import "antd/dist/antd.css";
import "../styles/global.css";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../lib/apolloClient"; // useApollo, // initializeApollo,
import jwt from "jsonwebtoken";
import Cookies from "cookies";
import React from "react";
import Head from "next/head";
// import { createContext, useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { token } = pageProps;
  const apolloClient = createApolloClient(token);
  // console.log(apolloClient, "pageProps", "####################");
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Samsung QR/NFC</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req, res, asPath } = appContext.ctx;

  const ISSERVER = typeof window === "undefined";
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  // console.log(appProps, "APP PROPS");
  // console.log(appContext, "APP CONTEXT");

  if (ISSERVER) {
    //@ts-ignore
    const cookies = new Cookies(req, res);
    const secret = process.env.JWTSECRET || "";
    //@ts-ignore
    const cookieToken: string = cookies.get("token");
    console.log("Bearer ", cookieToken);

    // console.log("COOKIES TOKEN", cookieToken);
    // try {
    //   jwt.verify(cookieToken, secret);
    // } catch (err) {
    //   res?.writeHead(301, {
    //     Location: "/login",
    //   });
    //   res?.end();
    //   return { ...appProps };
    // }
    if (!(asPath == "/login")) {
      if (!cookieToken) {
        res?.writeHead(301, {
          Location: "/login",
        });
        res?.end();
        return { ...appProps };
      }
    }

    return {
      pageProps: {
        ...appProps.pageProps,
        token: cookieToken,
      },
    };
  }

  return {
    pageProps: {
      ...appProps.pageProps,
      token: localStorage.getItem("token"),
    },
  };
};

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsic2Ftc3VuZ2FkbWluIiwiYWRtaW4iXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjAzMjkwMjY0LCJleHAiOjE2MDMzNzY2NjR9.Og0_oLsJxgc04QRmseL6RdL9mHuNDRj3UVRGYNGuyKo";
// const apolloClient = await createApolloClient("lalala");
// console.log(JSON.stringify(apolloClient));
// appProps.pageProps.token = { token };
// return { ...appProps, page Props: { apolloClient } };

// appProps.pageProps.initialApolloState,
// return { ...appProps };

// {
//  </StateManager> */
// }

// const apolloClient = useApollo(pageProps.initialApolloState);

// <ApolloProvider client={apolloClient}>
//   </ApolloProvider>

// import { GetServerSideProps } from "next";
// import Router, { useRouter } from "next/router";

//   const [token, setToken] = useState(getToken());
//   console.log(token, "TOKEN $$$$$$$$$$$$$$$$$");
//   const apolloClient = useApollo(pageProps.initialApolloState, token);

//   return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
//   // }
// };
// <StateManager pageProps={pageProps}>
