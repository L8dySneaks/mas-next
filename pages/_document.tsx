import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render () {
    // This is a global file, any changes made here will be available throughout the site
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