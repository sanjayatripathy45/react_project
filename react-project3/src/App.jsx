import { useState } from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/userInput.jsx'
import Result from './components/Result.jsx';


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handelChange = (inputIdetifier, newValue) =>{
    setUserInput((preValues) =>{
      return{
        ...preValues,
        [inputIdetifier] : +newValue

      }
    })

  }
  const dataCheck = userInput.duration >=1;
  console.log(dataCheck)




  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange = {handelChange}/>
      {!dataCheck && <p className='center'>Please enter a duration greater than zero.</p>}
      {dataCheck && 
      <Result input={userInput} />

}
      
    </>
  )
}

export default App
