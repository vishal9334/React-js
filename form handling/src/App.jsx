import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [title, setTitle] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("I am handler button",title)
  }
  return (
    <>
      <div className="w-screen h-screen bg-gray-500 flex items-center justify-center">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input
            className="w-[300px] h-[70px] border border-solid border-gray-400 p-2 rounded-s-3xl m-[20px] text-white"
            type="text" value={title}
            placeholder="Enter you name"
            onChange={(e)=> setTitle(e.target.value)}
          />
          <button className="rounded-e-3xl w-[100px] h-[70px] border border-solid border-gray-400 p-2 text-white">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
