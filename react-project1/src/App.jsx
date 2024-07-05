import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header';
import CoreConceptss from './components/CoreConceptss.jsx';
import ExampleTab from './components/ExampleTab.jsx';
import ReactCourse from './components/ReactCourse.jsx';

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Header />
        <main>
          <CoreConceptss />
          <ExampleTab />
          <ReactCourse />
          
          
        </main>

      </div>



    </>
  )
}

export default App
