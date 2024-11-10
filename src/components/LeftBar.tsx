import React from "react";
import { MdOutlineAdd } from "react-icons/md";

function LeftBar() {
  return (
    <div className="contaienr pl-10 pr-10">
      <div className="pt-14 flex flex-col gap-7">
        <p className="bg-yellow-800 pl-7 pt-2 pb-2 rounded-md text-xl font-light hover:opacity-60 cursor-pointer active:translate-x-6">
          Home
        </p>
        <p className="bg-yellow-800 pl-7 pt-2 pb-2 rounded-md text-xl font-light hover:opacity-60 cursor-pointer active:translate-x-6">
          About
        </p>
        <p className="bg-yellow-800 pl-7 pt-2 pb-2 rounded-md text-xl font-light hover:opacity-60 cursor-pointer active:translate-x-6">
          Contact us
        </p>
        <p className="bg-yellow-800 pl-7 pt-2 pb-2 rounded-md text-xl font-light hover:opacity-60 cursor-pointer active:translate-x-6">
          Tasks
        </p>
        <p className="flex items-center bg-stone-800 pl-7 pt-2 pb-2 rounded-md text-xl font-light hover:opacity-60 cursor-pointer active:translate-x-6">
          <MdOutlineAdd /> New Todo
        </p>
      </div>
    </div>
  );
}

export default LeftBar;
