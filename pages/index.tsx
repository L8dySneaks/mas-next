/**
 * Importing component based styles
 * The file has to be *.module.css
 */
import styles from '../styles/index.module.css';

function Heading(props) {
  return (
    <div>
      <h1 className={styles.white}>{props.heading}</h1>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Heading heading="Heading" />
      <h1>Here</h1>
    </div>
  )
}