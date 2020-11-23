/**
 * Importing component based styles
 * The file has to be *.module.css
 */
import styles from '../styles/index.module.scss';

function Heading(props) {
  return (
    <div>
      <h1 className={styles.white}><span>I'm bitch</span> {props.heading}</h1>
    </div>
  )
}

export default function Home() {
  return (
    // <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    //   <div className="flex-shrink-0">
    //     <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
    //   </div>
    //   <div className="text-xl font-medium text-black">ChitChat</div>
    //   <p className="text-gray-500">You have a new message!</p>
      <div className="flex justify-center items-center w-screen h-screen">
        Youtube testing
      </div>
    // </div>
    
  )
}