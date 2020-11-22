/**
 * This is an example of how to catch all routes
 */


import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from "next"

import path from 'path'


// This function executes on server
/**
 * If you implement GetStaticProps on a dynamic page, you must implement 
 * GetStaticPaths also
 * @param context 
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require('fs');

  // takes this return value and injects it in to the props of the component function below
  // Can use the revalidate param in order to try and update the static file that gets 
  // created when the NextJS build is run, can only run this on Production
  // revalidate: 10, every 10 seconds it will look for new content on the static file and re-populate as needed
  return {
    revalidate: 10,
    props: {
      myFavNum: Math.random()
    }
  }
}

/**
 * This function specifies when the staticProps should run
 * GetStaticProps runs at build time, DOES NOT run at runtime
 * This getStaticPaths will let getStaticProps know which pages it has to be run on
 */

export const getStaticPaths: GetStaticPaths = async () => {
  // NextJS will get the bottom 2 URLs, take the output, and store it on the disk
  // any path that is not localhost:3000/project/hello or localhost:3000/project/world
  // will return a 404
  // fallback: false - this does not allow us to go to any other paths except for the defined path
  // if you want to be able to go to any dynamic segment, change fallback to true
  // localhost:3000/project/klsadfjlsk -> call the getStaticProps on server -> render the page -> (background)
  // NextJS would add this to the paths list and would store it locally on the filesystem for faster access
  return {
    paths: [
      {
        params: {name: 'hello'}
      },
      {
        params: {name: 'world'}
      }
    ],
    fallback: true
  }
}

export default function MyProject(props) {
  const router = useRouter()

  console.log(router.query);

  if(router.isFallback) {
    // this will show if you are rendering a brand new page (URL)
    return <h1> is loading ...</h1>
  }

  return <h1>Hello {props.myFavNum}</h1>
}