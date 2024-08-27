import React from "react";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UDlogo from "../../assets/logo.png";
import Telephone from "../../assets/Telephone.png";
import Light from "../../assets/light.png";

const VirtualNumber = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="text-white inter-font">
      <div className="bg-gradient-to-t from-[#06061E] via-[#06061E] to-blue-900 h-full pb-24 ">
        <img
          className=" absolute mx-auto h-[400px] w-[200px] left-0 right-0 top-0"
          src={Light}
          alt="spotlight"
        />
        <Header />
        <motion.button
          onClick={() => handleNavigation("/selection-page")}
          whileTap={{ scale: 0.9 }}
          className=" bg-[#2B324A]/70 p-3 px-5 w-fit rounded-full m-3 lg:m-10 "
        >
          <p className=" flex gap-2 text-xs md:text-base font-semibold items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className=" size-4 md:size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Go Back
          </p>
        </motion.button>

        <div className="flex justify-center items-center">
          <div className=" max-w-7xl mx-4 md:mx-0 space-y-3">
            <img className=" h-12 w-12 mx-auto" src={UDlogo} alt="UD - Logo" />
            <p className=" text-3xl lg:text-4xl text-center font-bold">
              Your Web3 Mobile Number
            </p>
            <p className="text-base text-center text-customText">
              Your custom mobile number. Your Web3 identity. <br /> The only
              wallet address you ever need to share.
            </p>
            <div className="flex items-center justify-center h-[72px] w-[350px] md:w-[553px] ">
              <div className="flex items-center w-full bg-[#2e2e48] text-white rounded-lg border border-[#7B8DB7]/20 shadow-lg overflow-hidden">
                {/* Telephone Icon */}
                <div className="flex items-center justify-center p-4 bg-[#384160] h-[72px] rounded-l-lg">
                  <img className=" w-10 h-10" src={Telephone} alt="" />
                </div>

                {/* Input Field */}
                <div className="flex-grow p-3">
                  <label className="block text-sm font-medium">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="+999 123"
                    className="bg-transparent border-none text-[#b0b0d0] focus:outline-none focus:ring-0 w-full mt-1"
                  />
                </div>

                {/* Search Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 h-[72px] rounded-r-lg"
                >
                  Search
                </motion.button>
              </div>
            </div>
            <p className=" text-customText text-center">
              {" "}
              <span className=" italic text-customBlue">#</span> Enter minimum
              10 digits
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-[#06061E] via-[#06061E] to-blue-950 h-full border-t border-[#7B8DB7]/30 p-4 md:p-10 lg:p-16">
        <div className="max-w-7xl space-y-6 md:space-y-0 mx-2 md:mx-auto md:grid md:grid-cols-3 gap-6">
          <div className="flex space-x-4">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-customBlue"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            </div>
            <div className="">
              <p className=" font-bold text-xl">
                Receive and Send Crypto with Ease
              </p>
              <p className=" text-customText">
                Use your virtual mobile number to map to your Web3 wallet
                address and simplify sending and receiving cryptocurrency. No
                need to share your entire wallet address, avoiding errors.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-customBlue"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
            </div>
            <div className="">
              <p className=" font-bold text-xl">Get Web3 Transaction Alerts</p>
              <p className=" text-customText">
                Our app provides secure and customizable notifications for your
                Web3 transactions, either as push notifications or text messages
                through our secure relay.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-customBlue"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
            <div className="">
              <p className=" font-bold text-xl">Decentralized VOIP and Messaging</p>
              <p className=" text-customText">
                Experience the future of communication with our decentralized VOIP and messaging platform. Choose who can contact you. Secure, private, and crystal clear.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center pt-16">
        <motion.button className=" text-customBlue font-semibold hover:underline">Learn more</motion.button>
        </div>
      </div>
    </div>
  );
};

export default VirtualNumber;
