import React from "react";
import { motion } from "framer-motion";
import TickIcon from "../../../assets/icons/tick.png";
import BUSD from "../../../assets/icons/busd.png";
import DiamondTier from "../search-result/tiers-components/diamondTier";
import { useNavigate } from "react-router-dom";

const CartRightComp = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Ensure scroll to top after navigation
  };
  return (
    <div className="bg-black h-full lg:min-h-screen">
      <div className="">
        {/* header */}
        <div className="">
          <div className=" flex justify-center gap-6 p-4 h-16">
            <motion.button
              onClick={() => handleNavigation("/selection-page")}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 font-bold "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              Get a new number
            </motion.button>
            <motion.button
              onClick={() => handleNavigation("/selection-page")}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 font-bold "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
              </svg>
              Refer and earn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => handleNavigation("/selection-page")}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 font-bold "
            >
              My account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
          <div className="border-b border-[#7B8DB7]/20 w-full"></div>
        </div>

        <div className=" w-[380px] md:w-[600px]  mx-auto mt-6 md:mx-auto pb-10 lg:pb-0">
          <div className="w-full bg-[#2e2e48]/50 rounded-lg border border-[#7B8DB7]/20 p-3">
            <div className=" flex justify-between items-center">
              <div className=" flex gap-3 items-center">
                <img className=" h-6 md:h-8 w-6 md:w-8" src={TickIcon} alt="" />
                <div className="">
                  <p className=" font-bold text-xs md:text-base">
                    +999 120 023 0245
                  </p>
                  <div className="md:flex gap-2 space-y-2 md:space-y-0">
                    <p className="bg-[#489D5D] w-fit h-fit text-xs p-1 px-2 rounded-full font-bold">
                      Available
                    </p>
                    <DiamondTier />
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
                    <p className=" font-bold text-xs md:text-base">BUSD $0</p>
                  </div>
                  <p className=" text-customText text-xs md:text-base flex justify-end">
                    Total due
                  </p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className=" font-bold text-xs md:text-base p-3 rounded-full w-24 md:w-32 border border-customBlue shadow-md hover:shadow-customBlue"
                >
                  Remove
                </motion.button>
              </div>
            </div>
          </div>
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
