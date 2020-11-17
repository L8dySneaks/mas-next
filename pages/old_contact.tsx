/**
 * Styled JSX Component
 * JSX Styles are like inline styles, they are component level
 * Can make the style global by adding the global keyword after jsx in the style tag
 */

function Heading(props) {
  const variableColor = Math.random() > 0.5 ? 'red' : 'blue';
  return <div><h1>{props.heading}</h1>
    <style jsx>
      {`
        h1 {
          color: ${variableColor};
        }
      `}
    </style>
  </div>
}

export default function Contact() {
  return (
    <div>
      <Heading heading="Heading" />
      <h1>Here</h1>
    </div>
  )
}