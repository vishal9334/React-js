import React from 'react'

const App = () => {

  const user1 = {
    name:"vishal",
    age:23,
    gender:'male'
  }
  const data = {user1}
  localStorage.setItem("data", JSON.stringify(data))
   JSON.parse(localStorage.getItem("data"))
   localStorage.removeItem("data");

 
  
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
