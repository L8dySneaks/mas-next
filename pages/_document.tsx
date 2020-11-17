import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * The root document, not a component
 * Global file, any changes here will be available throughout the site
 * This file gets rendered on the server
 */
export default class CustomDocument extends Document {
  render () {
    console.log('hi from document');
    return <Html>
      <Head>
        <meta property="custom" content="michaelaStudio" />
      </Head>
      <body>
        <Main />
      </body>
      <NextScript />
    </Html>
  }
}