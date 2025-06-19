import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'

// Use a function component approach
export default function MyDocument() {
  return (
    <Html lang='ja'>
      <Head>
        {/* Favicon */}
        <link rel='icon' href='/ec/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-icon.png' />

        {/* Web App Manifest */}
        <link rel='manifest' href='/manifest.webmanifest' />

        {/* Microsoft Tile */}
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#9C8C6A' />

        {/* Theme Color */}
        <meta name='theme-color' content='#9C8C6A' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Spectral:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='preload'
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap'
          as='style'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap'
          media='print'
          onLoad="this.onload=null;this.media='all';"
        />
        <noscript>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap'
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// Add getInitialProps as a static method
MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await ctx.defaultGetInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}
