import React, { useState } from 'react'
import Section from './Section'
import Tabs from './Tabs'

const ReactCourse = () => {
    const [Data, setData ] = useState('');
    const handleClick = () =>{
        setData("react dat")
    }
  return (
    <>
    <Section title="REACT COURSE">
        <Tabs button={<>
        <button onClick={handleClick}>Get the Course</button>
        </>}>
            {Data}

        </Tabs>

    </Section>
    </>
  )
}

export default ReactCourse