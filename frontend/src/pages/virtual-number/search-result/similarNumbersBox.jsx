import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SimIcon from "../../../assets/icons/sim.png";
import BUSD from "../../../assets/icons/busd.png";
import { motion } from "framer-motion";
import DiamondTier from "./tiers-components/diamondTier";
import SilverTier from "./tiers-components/silverTier";
import BronzeTier from "./tiers-components/bronzeTier";
import GoldTier from "./tiers-components/goldTier";
import similarNumbers from "./data/data.json";

const SimilarNumberBox = () => {
  const navigate = useNavigate();
  const [addedItems, setAddedItems] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleButtonClick = (id) => {
    setAddedItems((prevItems) => ({
      ...prevItems,
      [id]: !prevItems[id],
    }));

    setShowModal(true); // Show the modal when an item is added or removed
  };

  const totalItemsInCart = Object.values(addedItems).filter(Boolean).length;

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
            {/* Container for Tick Icon and Tier Component */}
            <div className="flex items-center gap-1 md:gap-4">
              <img className="h-6 md:h-8 w-6 md:w-8" src={SimIcon} alt="TickIcon" />
              <div className="">
                <span className="text-[#A7C3FB] text-xs font-semibold">
                  +999
                </span>
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

      {/* Modal for Cart Summary */}
      {showModal && (
        <div className="fixed inset-x-0 bottom-0 p-4 bg-blue-950 border-t border-t-customBlue">
          <div className="flex justify-center items-center gap-4">
            <motion.button
              onClick={() => handleNavigation("/virtual-number/search-results/cart-checkout")}
              whileTap={{ scale: 0.9 }}
              className="font-bold text-xs md:text-base p-4 rounded-full  bg-customBlue text-white border border-customBlue"
            >
              Continue to Cart
            </motion.button>
            <p className="text-white text-sm md:text-base font-bold flex items-center">
              Your Cart:
              <div className="text-[#508FF6] bg-[#639BF7]/40 h-10 w-10 rounded-full flex items-center justify-center ml-2">
                {totalItemsInCart}
              </div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimilarNumberBox;
