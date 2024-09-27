import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWallet} from "react-icons/fa";
import { motion } from "framer-motion";

const MainContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen md:overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col bg-[#08061e] overflow-y-scroll">
        <header className="bg-[#222945] rounded-b-md py-2 md:hidden">
          <button
            onClick={toggleSidebar}
            className="bg-[#616a8d12] rounded-lg font-medium p-1 text-white text-xl  mt-1 ml-5"
          >
            <GiHamburgerMenu />
          </button>
        </header>
        <section>
          <div className="px-5 text-white border-b border-[#7181a5] pb-4 pt-1">
            <h1 className="text-3xl font-semibold">Home</h1>
            <p className="text-customText pt-1">
              Explore endless possibilities with your phone number in Web3
            </p>
          </div>
          <div className="border-b border-[#7181a5] px-5 pb-6">
            <div className=" text-white   py-9">
              <div className="flex lg:flex-row md:flex-col sm:flex-row flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-semibold">Your Numbers</h1>
                  <p className="text-customText pt-1">
                    View and manage your numbers
                  </p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="border-2 border-customBlue hover:bg-customBlue w-fit p-2 px-8 rounded-full mt-3 "
                >
                  <p className="  font-bold mx-auto flex justify-center gap-3 items-center text-center">
                    Buy A Number
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
                  </p>
                </motion.button>
              </div>
            </div>
            <div className="bg-[#121735] p-4 flex flex-col gap-6 w-72 sm:w-96 rounded-xl">
              <FaWallet className="text-[#7181a5]" />
              <div>
                <h4 className="text-white font-semibold text-xl">Number</h4>
                <p className="text-customText">+917299424311</p>
              </div>
              <div className="text-[#27613d] font-medium text-[14px] bg-[#27613d33] rounded-full px-3 w-fit ">
                Real Number
              </div>
            </div>
          </div>

          <div className="border-b border-[#7181a5] px-5 pb-6">
            <div className=" text-white   py-9">
              <div className="flex lg:flex-row md:flex-col sm:flex-row flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-semibold">Connected Wallets</h1>
                  <p className="text-customText pt-1">
                    You can view wallets connected to your phone
                  </p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="border-2 border-customBlue hover:bg-customBlue w-fit p-2 px-8 rounded-full mt-3 "
                >
                  <p className="  font-bold mx-auto flex justify-center gap-3 items-center text-center">
                    Load Another Wallet
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
                  </p>
                </motion.button>
              </div>
            </div>
            <div className="bg-[#121735] p-4 flex flex-col gap-6 w-fit sm:w-96 rounded-xl">
              <FaWallet className="text-[#7181a5]" />
              <h4 className="text-white font-semibold text-xl">
                Metamask Wallet
              </h4>
              <p className="text-customText">
                0xJ93NBF9HEHU887ENNJD93NM2U983849R
              </p>
              <div>
                <p className="text-customText">0.00263479823784</p>
                <p className="text-customText">ETH</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
