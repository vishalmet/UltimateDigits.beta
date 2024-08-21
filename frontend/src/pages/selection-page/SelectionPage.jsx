import React from "react";
import Header from "../../components/Header";
import CurrentNum from "../../assets/currentnum.png";
import VirtualNum from "../../assets/virtualnum.png";

const SelectionPage = () => {
  return (
    <div className=" bg-gradient-to-tr from-[#06061E] via-[#06061E] to-blue-950 min-h-screen text-white">
      <Header />
      <div className="flex justify-center items-center py-8 md:pt-16">
        <div className=" max-w-7xl">
          <div className=" flex">
            <div className=" flex-1 ">
              <p className=" text-3xl font-bold">Let's get you started</p>
              <p className=" text-base text-[#D8E4FD]">
                Supercharge your phone number for Web3
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div className=" md:flex md:gap-6">
          <div className=" bg-[#181931] w-[360px] rounded-xl mt-10">
            <div className="">
              <img
                className=" w-[360px] h-[220px] rounded-t-xl"
                src={CurrentNum}
                alt=""
              />
            </div>
            <div className=" flex h-10 justify-center pt-2">
              <p className=" flex items-center text-base font-bold text-center bg-[#489D5D] rounded-lg p-1 px-3 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    clip-rule="evenodd"
                  />
                </svg>
                FREE
              </p>
            </div>
            <div className=" px-5 py-3">
              <p className=" font-bold text-2xl text-center ">
                Current number
              </p>
              <p className=" text-base text-center text-customText pt-2">
                Verify the number with a secure OTP sent to your actual mobile
                number
              </p>
              <div className="border-2 border-customBlue hover:bg-customBlue w-full p-2 rounded-full mt-3 ">
              <button className="  font-bold mx-auto flex gap-3 items-center text-center">
                Use Your Current Number
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              </div>
            </div>
          </div>

          <div className=" bg-[#181931] w-[360px] rounded-xl mt-10">
            <div className="">
              <img
                className=" w-[360px] h-[220px] rounded-t-xl"
                src={VirtualNum}
                alt=""
              />
            </div>
            <div className=" flex h-10 justify-center pt-2">
            </div>
            <div className=" px-5 py-3">
              <p className=" font-bold text-2xl text-center ">
                Virtual number
              </p>
              <p className=" text-base text-center text-customText pt-2">
                Buy a customized 10 digit virtual number of your choice
              </p>
              <div className="border-2 border-customBlue hover:bg-customBlue w-full p-2 rounded-full mt-3 ">
              <button className="  font-bold mx-auto flex gap-3 items-center text-center">
                Get A Virtual Number
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
