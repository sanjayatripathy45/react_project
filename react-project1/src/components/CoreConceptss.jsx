import React from 'react'
import { CORE_CONCEPTS } from '../data'
import CoreConcepts from './CoreConcepts'
import Section from './Section'

const CoreConceptss = () => {
  return (
    <Section title="Core Concept" id="coreconcepts">
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

        </Section>
  )
}

export default CoreConceptss