import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TickIcon from "../../../assets/icons/tick.png";
import BUSD from "../../../assets/icons/busd.png";
import { useSelector } from "react-redux";
import { selectNumber } from "../../../redux/numberSlice";
import { motion } from "framer-motion";

const SearchResultComp = () => {
  const navigate = useNavigate();
  const storedNumber = useSelector(selectNumber); // Access the stored phone number
  const [isAdded, setIsAdded] = useState(false); // State to track if item is added

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleButtonClick = () => {
    setIsAdded(!isAdded); // Toggle the state
  };

  return (
    <div className="text-white">
      <div className=" w-[370px] md:w-[729px] bg-[#2e2e48] border-2 border-[#489D5D] rounded-lg p-1 md:p-3">
        <div className="flex items-center">
          <div className="flex flex-1 items-center gap-1 md:gap-6">
            <img className="h-8" src={TickIcon} alt="TickIcon" />
            <div className="text-center">
              <input
                type="text"
                placeholder="XXX XXX XXXX"
                value={storedNumber}
                readOnly
                className="bg-transparent border-none text-white text-sm md:text-base font-medium focus:outline-none focus:ring-0 w-full"
              />
              <div className="md:flex gap-2 space-y-1 md:space-y-0">
                <p className="bg-[#489D5D] w-fit h-fit text-xs md:text-sm p-1 px-2 rounded-full font-bold">
                  Available
                </p>
                <p className="bg-[#6366E9]/50 w-fit h-fit p-1 px-2 text-xs md:text-sm border border-[#6366E9]/20 text-[#8F91EF] rounded-full font-bold">
                  Diamond Tier
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-1 md:gap-4 ml-end">
              <div className="flex items-center">
                <img className="h-8" src={BUSD} alt="BUSD" />
                <p className="font-bold text-xs md:text-base">
                  BUSD $10
                </p>
              </div>
              <motion.button
                onClick={() => handleButtonClick(item.id)}
                whileTap={{ scale: 0.9 }}
                className={`font-bold text-xs md:text-base p-4 rounded-full w-32 md:w-40 transition-colors duration-300 ${
                  isAdded
                    ? "bg-transparent border border-customBlue text-white shadow-customBlue shadow-md"
                    : "bg-customBlue text-white border border-customBlue"
                }`}
              >
                {isAdded ? "Remove" : "Add to Cart"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-b-customText/10 mt-6"></div>
    </div>
  );
};

export default SearchResultComp;
