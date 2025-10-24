import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const increaseNum = () => setNum(num + 1);
  const decreaseNum = () => setNum(num - 1);
  const jump5Num = () => setNum(num + 5);

  return (
    <>
      <div className="w-screen h-screen bg-red-900 flex flex-col items-center justify-center text-white space-y-6">
        <h1 className="text-4xl font-bold">{num}</h1>

        <div className="flex space-x-4">
          <button
            className="rounded-3xl border border-transparent px-[1.2em] py-[0.6em] font-medium font-inherit bg-[#1a1a1a] cursor-pointer text-white transition-colors duration-200 hover:border-[#646cff] hover:text-[#646cff] focus:outline focus:outline-[4px] focus:outline-blue-500 focus-visible:outline focus-visible:outline-[4px] focus-visible:outline-blue-500"
            onClick={increaseNum}
          >
            Increase
          </button>

          <button
            className="rounded-3xl border border-transparent px-[1.2em] py-[0.6em] font-medium font-inherit bg-[#1a1a1a] cursor-pointer text-white transition-colors duration-200 hover:border-[#ff4747] hover:text-[#ff4747] focus:outline focus:outline-[4px] focus:outline-blue-500 focus-visible:outline focus-visible:outline-[4px] focus-visible:outline-blue-500"
            onClick={decreaseNum}
          >
            Decrease
          </button>

          <button
            className="rounded-3xl border border-transparent px-[1.2em] py-[0.6em] font-medium font-inherit bg-[#1a1a1a] cursor-pointer text-white transition-colors duration-200 hover:border-[#22c55e] hover:text-[#22c55e] focus:outline focus:outline-[4px] focus:outline-blue-500 focus-visible:outline focus-visible:outline-[4px] focus-visible:outline-blue-500"
            onClick={jump5Num}
          >
            5X Increase
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
