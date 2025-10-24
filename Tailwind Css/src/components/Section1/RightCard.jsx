import React from "react";

import { ArrowRight } from "lucide-react";
const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 bg-red-500 rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="empty" />

      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
          {props.id}
        </h2>
        <div>
          <p className="text-lg leading-relaxed text-white mb-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            placeat? Lorem ipsum dolor sit amet.
          </p>
          <div className=" flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full text-lg">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-3 py-3 rounded-full ">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
