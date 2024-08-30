import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, removeItemFromCart } from "../../../redux/cartSlice";
import { motion } from "framer-motion";
import TickIcon from "../../../assets/icons/tick.png";
import BUSD from "../../../assets/icons/busd.png";
import DiamondTier from "../search-result/tiers-components/diamondTier";
import GoldTier from "../search-result/tiers-components/goldTier";
import SilverTier from "../search-result/tiers-components/silverTier";
import BronzeTier from "../search-result/tiers-components/bronzeTier";
import { useNavigate } from "react-router-dom";

const CartRightComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Ensure scroll to top after navigation
  };

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

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
    <div className="bg-black h-full lg:min-h-screen">
      <div className="">
        {/* header */}
        <div className="hidden lg:block">
          <div className=" flex justify-center gap-6 p-4 h-16">
            <motion.button
              onClick={() => handleNavigation("/selection-page")}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 font-bold "
            >
              {/* Icon and Text */}
            </motion.button>
            {/* Other buttons */}
          </div>
          <div className="border-b border-[#7B8DB7]/20 w-full"></div>
        </div>

        <div className="w-[380px] md:w-[600px] mx-auto py-6 lg:pt-0 lg:mt-10 md:mx-aut lg:pb-0">
          {cartItems.map((item) => (
            <div key={item.id} className="w-full bg-[#2e2e48]/50 rounded-lg border border-[#7B8DB7]/20 p-3 mb-4">
              <div className=" flex justify-between items-center">
                <div className=" flex gap-3 items-center">
                  <img className=" h-6 md:h-8 w-6 md:w-8" src={TickIcon} alt="" />
                  <div className="">
                    <p className=" font-bold text-xs md:text-base">
                      {item.number}
                    </p>
                    <div className="md:flex gap-2 space-y-2 md:space-y-0">
                      <p className="bg-[#489D5D] w-fit h-fit text-xs p-1 px-2 rounded-full font-bold">
                        Available
                      </p>
                      {renderTierComponent(item.tier)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="">
                    <div className="flex items-center">
                      <img
                        className="h-6 md:h-8 w-6 md:w-8"
                        src={BUSD}
                        alt="BUSD"
                      />
                      <p className=" font-bold text-xs md:text-base">BUSD {item.price.toFixed(2)}</p>
                    </div>
                    <p className=" text-customText text-xs md:text-base flex justify-end">
                      Total due
                    </p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRemove(item.id)}
                    className=" font-bold text-xs md:text-base p-3 rounded-full w-24 md:w-32 border border-customBlue shadow-md hover:shadow-customBlue"
                  >
                    Remove
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
          <div className="  pt-5">
            <motion.button
              onClick={() => handleNavigation("/search-results/cart-checkout/purchase-successful")}
              whileTap={{ scale: 0.9 }}
              className={`font-bold text-xs md:text-base p-3 w-full rounded-full bg-customBlue text-white border border-customBlue`}
            >
              Checkout
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRightComp;
