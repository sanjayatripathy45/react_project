import React from 'react'
import TabButton from './TabButton'
import { EXMAPLES } from '../data'
import Section from './Section';
import { useState } from 'react';
import Tabs from './Tabs';



const ExampleTab = () => {

    const [selectTab, setSelectTab] = useState('');

    const handelSelect = (selectTab) => {
        setSelectTab(selectTab)
        console.log({ selectTab })

    }

    return (
        <Section title="Examples" id="examples">

            <Tabs className="menu" button={<>
                <TabButton isSelected={selectTab === "components"} onSelect={() => handelSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectTab === "jsx"} onSelect={() => handelSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectTab === "props"} onSelect={() => handelSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectTab === "state"} onSelect={() => handelSelect('state')}>State</TabButton>


            </>}> {!selectTab ? <p>Please selct a option to see the out put</p> :

                <div className="tab">
                    <h3>{EXMAPLES[selectTab].title}</h3>
                    <p>{EXMAPLES[selectTab].description}</p>
                    <pre>
                        <code>{EXMAPLES[selectTab].code}</code>
                    </pre>

                </div>
                }</Tabs>
            <menu className='menu'>

            </menu>


            {/* we can use && */}
            {/* {selectTab && <>this the true returen</>} */}
        </Section>

    )
}

export default ExampleTab