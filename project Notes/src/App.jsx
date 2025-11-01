import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTitle("");
    setDetails("");
    setTask(copyTask);
    console.log(copyTask);
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <>
      <div className="h-screen lg:flex bg-black text-white overflow-auto hide-scrollbar">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex items-start flex-col lg:w-1/2 p-10 gap-10 "
        >
          <input
            type="text"
            placeholder="Enter Notes heading"
            className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Enter Details"
            type="text"
            className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button className="bg-white font-medium w-full outline-none text-black px-5 py-2 rounded">
            Add Note
          </button>
        </form>
        <div className="lg:w-1/2 lg:border-l-2 p-10 ">
          <h1 className="text-4xl font-bold">Recent Notess</h1>
          <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[80vh] overflow-auto  scrollbar-hide ">
            {task.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center flex-col justify-between h-52 w-40 rounded-xl text-black p-4 bg-white"
                >
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                  <button
                    onClick={deleteNote}
                    className=" cursor-pointer active:scale-95 py-1 text-xs w-full border rounded font-bold bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
