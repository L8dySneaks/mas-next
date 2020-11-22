import { GetServerSideProps } from "next"


// This function executes on server always on every page request
// That is one reason why this is not a good practice, because this calls a node server on every request
// no caching benefits, or requests will be slow
export const getServerSideProps: GetServerSideProps = async (context) => {
  return{
    props: {
      myFavNum: Math.random()
    }
  }
}

export default function Dynamic(props) {
  // This helps to have dynamic content on the page
  return <h1>Dynamic Number - {props.myFavNum}</h1>
}