import React from "react";
import { CgHello } from "react-icons/cg";

const Button = ({ title }) => {
  return (
    <>
      <div >
      
        <button className="px-4 flex justify-center items-center gap-2 py-1  bg-white text-[#019ab2] rounded-xl mt-2 text-lg font-semibold">
          
          {title}
          <CgHello />
        </button>
      </div>
    </>
  );
};

export default Button;
