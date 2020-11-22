/* This file will serve any URL that looks something like 
* http://localhost:3000/project/<anythingcangohere>/<anythingcangohere>
* Only works for two dynamic segments
* Lose the ability to capture 2 dynamic segments
*/

import { useRouter } from 'next/router';

export default function SubProjectName() {

  const router = useRouter();
  console.log(router);

  function takeMeHome() {
    // This pushed home onto the stack of history, so therefor the back button on the browser works
    router.push('/');
    // The back button will take you back to whatever the original page was you came from, not where you JUST came from
    //router.replace('/');
  }

  /**
   * NextJS will make the query request blank on the first time around, unless you have prefetching
   * requests, like getServerSideProps or getStaticProps
   */

  return <h1>
    Hello {router.query.project} {router.query.subproject}
    <button onClick={takeMeHome}>Home</button>
  </h1>
}