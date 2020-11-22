import { GetStaticProps } from "next"
import path from 'path'


// This function executes on server
export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require('fs');
  const txt = fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf-8');
  // takes this return value and injects it in to the props of the component function below
  return {
    props: {
      myFavNum: txt
    }
  }
}

export default function Dynamic(props) {
  // This helps to have dynamic content on the page
  return <h1>Dynamic Number - {props.myFavNum}</h1>
}