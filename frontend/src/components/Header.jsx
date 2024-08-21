import React from "react";
import HeaderLogo from "../assets/ud-logo.png";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <div className=" p-2 md:p-4 px-2 md:px-10 lg:px-24 border-b-2 flex items-center text-white">
      <motion.button whileTap={{scale : 0.9}} className=" flex-1">
        <img className=" h-[26px] md:h-[32px] w-[150px] md:w-[216px]" src={HeaderLogo} alt="" />
      </motion.button>
      <button whileTap={{sclae : 0.9}} className=" flex gap-2 items-center">
        <p className=" text-base md:text-xl font-bold">Log Out</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
