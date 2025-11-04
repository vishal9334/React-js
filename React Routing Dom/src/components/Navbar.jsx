import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[40px] border-b border-white flex justify-between p-10 bg-black text-white">
        <h2>Logo</h2>
        <div className="flex gap-10 font-bold text-xl">
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
