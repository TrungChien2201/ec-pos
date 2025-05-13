import { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default function Document() {
  // Note: We can't directly access process.env here for client-side rendering
  // The actual title will be set in _app.js
  return (
    <Html>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="apple-icon.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="manifest.webmanifest" />

        {/* Microsoft Tile */}
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#9C8C6A" />

        {/* Theme Color */}
        <meta name="theme-color" content="#9C8C6A" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await ctx.defaultGetInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps?.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
