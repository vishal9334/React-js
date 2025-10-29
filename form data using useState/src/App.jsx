import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by", title);
    setTitle("");
  };

  return (
    <>
      <div className="w-screen h-screen bg-[#DC143C] flex items-center justify-center">
        <form
          className="flex gap-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[300px] h-[50px] px-4 text-[18px] text-white bg-transparent border border-gray-400 rounded-2xl outline-none focus:border-green-500"
          />
          <button
            type="submit"
            className="w-[120px] h-[50px] bg-green-500 text-white text-[18px] font-semibold rounded-2xl shadow-md hover:bg-green-600 active:scale-95 transition-transform duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
