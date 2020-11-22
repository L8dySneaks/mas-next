/**
 * This is an example of how to catch all routes
 */


import { useRouter } from 'next/router';

export default function MyProject() {
  const router = useRouter()

  console.log(router.query);

  return <h1>Hello</h1>
}