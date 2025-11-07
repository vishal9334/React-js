import React from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="w-[100%] h-[10%] flex justify-between items-center text-white bg-sky-500 p-5">
        <h1 className="font-bold text-[40px] text-gray-500">Karna</h1>
        <div className="flex gap-8">
          <Link className="font-bold text-[20px] text-white-500" to="/">
            Home
          </Link>
          <Link className="font-bold text-[20px] text-white-500" to="/about">
            About
          </Link>
          <Link className="font-bold text-[20px] text-white-500" to="/product">
            Product
          </Link>
          <Link className="font-bold text-[20px] text-white-500" to="/courses">
            Course
          </Link>
        </div>
      </div>
      <div className="w-[100%] h-[10%] flex text-white bg-sky-300 p-5 gap-[10px]">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-blue-500 px-4 py-1 rounded cursor-pointer active:scale-95 text-[20px]"
        >
          Return to home page
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="bg-blue-500 px-4 py-1 rounded cursor-pointer active:scale-95 text-[20px]"
        >
          Back
        </button>
        <button
          onClick={() => {
            navigate(+1);
          }}
          className="bg-blue-500 px-4 py-1 rounded cursor-pointer active:scale-95 text-[20px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Navbar;
