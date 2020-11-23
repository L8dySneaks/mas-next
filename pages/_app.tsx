/**
 * Global Styles only get imported into this file
 */

import '../styles/index.css';

/**
 * This file is responsible for rendering all of the pages
 * can update the pages the way you want before they are rendered
 * This file gets executed on the server and on the client
 * 
 */
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
