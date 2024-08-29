import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectNumber } from "../../../redux/numberSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Telephone from "../../../assets/icons/Telephone.png";
import Header from "../../../components/Header";
import SearchResultComp from "./searchResultComp";
import SimilarNumberBox from "./similarNumbersBox";

const SearchResult = () => {
  const navigate = useNavigate();
  const storedNumber = useSelector(selectNumber); // Access the stored phone number
  const [addedItems, setAddedItems] = useState({}); // Cart state
  const [showModal, setShowModal] = useState(false); // Modal state

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleButtonClick = (itemId) => {
    setAddedItems((prevItems) => {
      const newItems = {
        ...prevItems,
        [itemId]: !prevItems[itemId],
      };

      // Check if the cart is empty after this action
      const totalItemsInCart = Object.values(newItems).filter(Boolean).length;
      if (totalItemsInCart === 0) {
        setShowModal(false); // Close the modal if the cart is empty
      } else {
        setShowModal(true); // Show the modal when an item is added or removed
      }

      return newItems;
    });
  };

  const totalItemsInCart = Object.values(addedItems).filter(Boolean).length;

  return (
    <div className="text-white inter-font">
      <div className="bg-gradient-to-t from-[#06061E] via-[#06061E] to-blue-950 min-h-screen pb-24">
        <Header />
        <div className="flex justify-center items-center pt-16">
          <div className="max-w-7xl mx-4 md:mx-0 space-y-3">
            <div className="flex items-center justify-center h-[72px] w-[350px] md:w-[553px] mx-auto">
              <div className="flex items-center w-full bg-[#2e2e48] text-white rounded-lg border border-[#7B8DB7]/20 shadow-lg overflow-hidden">
                {/* Telephone Icon */}
                <div className="flex items-center justify-center p-4 bg-[#384160] h-[72px] rounded-l-lg">
                  <img className="w-10 h-10" src={Telephone} alt="Telephone" />
                </div>

                {/* Input Field */}
                <div className="flex-grow p-3">
                  <label className="block text-sm font-semibold">
                    Phone number
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="XXX XXX XXXX"
                      value={storedNumber}
                      readOnly
                      className="bg-transparent border-none text-customText font-medium focus:outline-none focus:ring-0 w-full"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <motion.button
                  onClick={() => handleNavigation("/search-results")}
                  className="bg-blue-600 hover:bg-blue-700 hover:cursor-not-allowed text-white font-semibold px-6 h-[72px] rounded-r-lg"
                >
                  Search
                </motion.button>
              </div>
            </div>

            <div className="pt-4 md:pt-10 space-y-3">
              <p className="text-3xl font-bold text-center">Search results</p>
              <p className="text-customText text-center">
                The number you are looking for is available!
              </p>
            </div>

            <div className="mx-2 md:mx-0">
              <SearchResultComp
                addedItems={addedItems}
                handleButtonClick={handleButtonClick}
              />
            </div>
            <div className="pt-2 mx-2 md:mx-0">
              <SimilarNumberBox
                addedItems={addedItems}
                handleButtonClick={handleButtonClick}
              />
            </div>
          </div>
        </div>

        {/* Modal for Cart Summary with Smooth Transition */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
              className="fixed inset-x-0 bottom-0 p-4 bg-blue-950 border-t border-t-customBlue"
            >
              <div className="flex justify-center items-center gap-4">
                <motion.button
                  onClick={() =>
                    handleNavigation("/virtual-number/search-results/cart-checkout")
                  }
                  whileTap={{ scale: 0.9 }}
                  className="font-bold text-xs md:text-base p-4 rounded-full bg-customBlue text-white border border-customBlue"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchResult;
