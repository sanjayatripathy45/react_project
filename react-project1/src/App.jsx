import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS } from './data';
import { EXMAPLES } from './data.js';
import { useState } from 'react';

function App() {
  const [selectTab, setSelectTab] = useState('');

  const handelSelect = (selectTab) => {
    setSelectTab(selectTab)
    console.log({selectTab})

  }

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
              {CORE_CONCEPTS.map((conceptItem) =>  
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            )}
              {/* {CORE_CONCEPTS.map((conceptItem) =>  
              <CoreConcepts title={conceptItem.title}
              description={conceptItem.description} />
            )} */}
              {/* <CoreConcepts title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description} />
              <CoreConcepts {...CORE_CONCEPTS[1]} />
              <CoreConcepts {...CORE_CONCEPTS[2]} />
              <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
            </ul>

          </section>
          <section id="examples">
            <h2>examples</h2>
            <menu className='menu'> 
             <TabButton isSelected={selectTab === "components"} onSelect={() => handelSelect('components')}>Components</TabButton>
             <TabButton isSelected={selectTab === "jsx"} onSelect={() => handelSelect('jsx')}>JSX</TabButton>
             <TabButton isSelected={selectTab === "props"} onSelect={() => handelSelect('props')}>Props</TabButton>
             <TabButton isSelected={selectTab === "state"} onSelect={() => handelSelect('state')}>State</TabButton>

            </menu>
            {!selectTab ? <p>Please selct a option to see the out put</p> :
            
            <div className="tab">
              <h3>{EXMAPLES[selectTab].title}</h3>
              <p>{EXMAPLES[selectTab].description}</p>
              <pre>
                <code>{EXMAPLES[selectTab].code}</code>
              </pre>

            </div>
            }

            {/* we can use && */}
            {/* {selectTab && <>this the true returen</>} */}
          </section>


         

        </main>

      </div>



    </>
  )
}

export default App
