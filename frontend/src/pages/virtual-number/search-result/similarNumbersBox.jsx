import React from "react";
import SimIcon from "../../../assets/icons/sim.png";
import BUSD from "../../../assets/icons/busd.png";
import { motion } from "framer-motion";
import DiamondTier from "./tiers-components/diamondTier";
import SilverTier from "./tiers-components/silverTier";
import BronzeTier from "./tiers-components/bronzeTier";
import GoldTier from "./tiers-components/goldTier";
import similarNumbers from "./data/data.json";

const SimilarNumberBox = ({ addedItems, handleButtonClick }) => {
  // Function to select the appropriate tier component
  const renderTierComponent = (tier) => {
    switch (tier) {
      case "Diamond Tier":
        return <DiamondTier />;
      case "Gold Tier":
        return <GoldTier />;
      case "Silver Tier":
        return <SilverTier />;
      case "Bronze Tier":
        return <BronzeTier />;
      default:
        return null;
    }
  };

  return (
    <div className="text-white">
      <p className="font-bold md:text-xl">Similar Numbers</p>
      <div className="w-[370px] md:w-[729px] bg-[#2e2e48] border-2 border-[#7B8DB7]/20 rounded-lg mt-3 p-2 md:p-3">
        {similarNumbers.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-3 last:mb-0 border-b border-[#7B8DB7]/20 first:pt-0 last:pb-0 last:border-b-0"
          >
            {/* Container for Sim Icon and Tier Component */}
            <div className="flex items-center gap-1 md:gap-4">
              <img className="h-6 md:h-8 w-6 md:w-8" src={SimIcon} alt="Sim Icon" />
              <div className="">
                <span className="text-[#A7C3FB] text-xs font-semibold">+999</span>
                <input
                  type="text"
                  placeholder="XXX XXX XXXX"
                  value={item.number}
                  readOnly
                  className="bg-transparent border-none text-white text-xs md:text-base font-medium focus:outline-none focus:ring-0 w-full"
                />
                {renderTierComponent(item.tier)}
              </div>
            </div>

            {/* Container for Price and Button */}
            <div className="flex items-center gap-1 md:gap-4 ml-end">
              <div className="flex items-center">
                <img className="h-8" src={BUSD} alt="BUSD" />
                <p className="font-bold text-xs md:text-base">
                  BUSD ${item.price}
                </p>
              </div>
              <motion.button
                onClick={() => handleButtonClick(item.id)}
                whileTap={{ scale: 0.9 }}
                className={`font-bold text-xs md:text-base p-4 rounded-full w-32 md:w-40 transition-colors duration-300 ${
                  addedItems[item.id]
                    ? "bg-transparent border border-customBlue text-white shadow-customBlue shadow-md"
                    : "bg-customBlue text-white border border-customBlue"
                }`}
              >
                {addedItems[item.id] ? "Remove" : "Add to Cart"}
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarNumberBox;
