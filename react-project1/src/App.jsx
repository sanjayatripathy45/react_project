import reactLogo from './assets/react.svg'
import './App.css'

const reactDesc = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));

}


function Header() {
  return (
    <div>
      <h2>React Essentaital</h2>
      <p>
        {reactDesc[genRandomInt(2)]} React concept you will needfor almostany app you are going to bulid!
      </p>
    </div>

  )
};
import { CORE_CONCEPTS } from './data';
function CoreConcepts({title, description}) {
  return (
    <li>
      <img src={reactLogo} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

    </li>


  )
}


function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concept</h2>
            <ul className="UL">
              <CoreConcepts title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description} />
              <CoreConcepts {...CORE_CONCEPTS[1]} />
              <CoreConcepts {...CORE_CONCEPTS[2]} />
              <CoreConcepts {...CORE_CONCEPTS[3]} />
            </ul>

          </section>

        </main>

      </div>



    </>
  )
}

export default App
