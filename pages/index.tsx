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
    <div>
      <Heading heading="Tits" />
      <h1>Here</h1>
    </div>
  )
}