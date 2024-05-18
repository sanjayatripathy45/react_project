import reactLogo from '../assets/react.svg'


export default function CoreConcepts({title, description}) {
  return (
    <li>
      <img src={reactLogo} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

    </li>


  )
}