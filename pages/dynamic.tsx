import { GetStaticProps } from "next"
import path from 'path'


// This function executes on server
export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require('fs');
  const txt = fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf-8');
  // takes this return value and injects it in to the props of the component function below
  // Can use the revalidate param in order to try and update the static file that gets 
  // created when the NextJS build is run, can only run this on Production
  // revalidate: 10, every 10 seconds it will look for new content on the static file and re-populate as needed
  return {
    revalidate: 10,
    props: {
      myFavNum: txt
    }
  }
}

export default function Dynamic(props) {
  // This helps to have dynamic content on the page
  return <h1>Dynamic Number - {props.myFavNum}</h1>
}