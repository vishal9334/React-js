import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by", title);
    setTitle('')
  };

  return (
    <>
      <div className="w-screen h-screen bg-[#DC143C] flex items-center justify-center">

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input type="text" placeholder="Enter your name" value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          <button>Submit</button>
        </form>

      </div>
    </>
  );
};

export default App;
