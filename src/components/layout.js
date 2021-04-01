import React from "react";
import { Helmet } from "react-helmet";
import { Global, css } from "@emotion/react";
import Header from "./header";
import Footer from "./footer";
import useSeo from "../hooks/useSeo";

const Layout = ({ children }) => {
  const seo = useSeo();
  const {
    siteName,
    fallbackSeo: { description, title },
  } = seo;
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }
          body {
            font-size: 16px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "PT Sans", sans-serif;
            background-color: #f6f6f6;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          h3 {
            font-family: "PT Sans", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          /* h1,
          h2,
          h3,
          p,
          span,
          a {
            letter-spacing: 0.2rem;
          } */
        `}
      />
      <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
      <Footer title={title} />
    </>
  );
};

export default Layout;
