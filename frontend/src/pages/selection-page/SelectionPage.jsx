import React from "react";
import Header from "../../components/Header";

const SelectionPage = () => {
  return (
    <div className=" bg-gradient-to-tr from-[#06061E] via-[#06061E] to-blue-950 min-h-screen text-white">
      <Header />
      <div className="flex justify-center items-center">
      <div className=" max-w-7xl ">
        <div className="">
          <div className=" flex items-center">
            <p className=" text-3xl font-bold">Let's get you started</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p className=" text-base text-[#D8E4FD]">Supercharge your phone number for Web3</p>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
      </div>
    </div>
  );
};

export default SelectionPage;
