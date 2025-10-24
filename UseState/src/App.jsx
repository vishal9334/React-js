import { useState } from 'react'
import './App.css'

function App() {
  
  // const [num , setNum] = useState({user:'Vishu', age:23})
  const [num , setNum] = useState(10)
  const btnClicked = ()=>{
    // const newNum = {...num}
    // newNum.user ='Vishal'
    // newNum.age =21
    // setNum(newNum)

    // setNum(prev => ({...prev, age:50}))

    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)

  }
  return (
    <>
    <h1>{num}</h1>
    <button onClick={btnClicked}>click</button>
    </>
  )
}

export default App
