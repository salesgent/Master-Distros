import React from "react";
import NextDocument, { Html, Main, NextScript, Head } from "next/document";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";
// import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@mui/styles";

// import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles";
export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets();
    // const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            // styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />));
          },
        });
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <div id="page-transition" key="styles">
            {initialProps.styles}
            {/* {materialUiSheets.getStyleElement()} */}
            {styledComponentSheet.getStyleElement()}
          </div>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="description" content="leaf distro" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          {/* favicons */}
          <link rel="icon" type="image/png" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="16x16" href="/favicon/apple-icon-16x16.png" />
          <link rel="apple-touch-icon" sizes="32x32" href="/favicon/apple-icon-32x32.png" />
          <link rel="apple-touch-icon" sizes="96x96" href="/favicon/apple-icon-96x96.png" />
          {/* //////////apple's fav icon */}
          <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="152" href="/favicon/apple-icon-152.png" />
          <link rel="apple-touch-icon" sizes="180" href="/favicon/apple-icon-180.png" />
          {/* //////////andriod fav icon */}
          <link rel="android-icon" sizes="36x36" href="/favicon/apple-icon-36x36.png" />
          <link rel="android-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
          <link rel="android-icon" sizes="96x96" href="/favicon/apple-icon-96x96.png" />
          <link rel="android-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
          <link rel="android-icon" sizes="192x192" href="/favicon/apple-icon-192x192.png" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <title>ABC WHOLESALE</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
