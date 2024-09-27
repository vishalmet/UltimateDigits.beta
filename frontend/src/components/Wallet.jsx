import React, { useEffect } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { motion } from "framer-motion";
import MetamaskLogo from "../assets/Metamask.png";
import { useNavigate } from "react-router-dom";

import {
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { GlobalURL } from "../constants";
const CustomButton = ({ setLoading } ) => {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();

  const checkIfUserExists = async (address) => {
    try {
      const response = await fetch(`${GlobalURL}/user/getUser/${address}`);
      const data = await response.json();
      console.log("User Data:", data.data);

      return data.exists;
    } catch (error) {
      console.error("Error checking user existence", error);
      return true;
    }
  };


  useEffect(() => {
    const handleNavigation = async () => {
      if (isConnected && address) {
        setLoading(true);
        console.log("Checking user existence...");

        const userExists = await checkIfUserExists(address);
        setLoading(false);

        if (!userExists) {
          navigate("/selection-page");
        } else {
          navigate("/");
        }
      }
      if (!isConnected) {
        navigate("/");
      }
    };

    handleNavigation();
  }, [isConnected, address, navigate]);

  return (
    <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");
              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <div className=" w-[300px] md:w-[400px] flex justify-center mx-auto pt-6 lg:pt-10">
                          <motion.button
                            onClick={openConnectModal}
                            type="button"
                            whileTap={{ scale: 0.9 }}
                            className=" flex justify-center p-3 rounded-full items-center  gap-3 text-base md:text-xl border-[#2070F4] border-2 bg-[#2070F4] text-white hover:shadow-[#2070F4] hover:shadow-md w-full font-bold"
                          >
                            <img
                              className=" w-6 h-6"
                              src={MetamaskLogo}
                              alt=""
                            />
                            Connect with Metamask
                          </motion.button>
                        </div>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <div className=" w-[300px] md:w-[400px] flex justify-center mx-auto pt-6 lg:pt-10">
                          <motion.button
                            onClick={openChainModal}
                            type="button"
                            whileTap={{ scale: 0.9 }}
                            className=" flex justify-center p-3 rounded-full items-center  gap-3 text-base md:text-xl border-[#2070F4] border-2 bg-[#2070F4] text-white hover:shadow-[#2070F4] hover:shadow-md w-full font-bold"
                          >
                            Wrong Network
                          </motion.button>
                        </div>
                      );
                    }

                    return (
                      <div className=" w-[300px] md:w-[400px] flex justify-center mx-auto pt-6 lg:pt-10">
                        <motion.button
                          className=" flex justify-center p-3 rounded-full items-center  gap-3 text-base md:text-xl border-[#2070F4] border-2 bg-[#2070F4] text-white hover:shadow-[#2070F4] hover:shadow-md w-full font-bold"
                          onClick={openAccountModal}
                          whileTap={{ scale: 0.9 }}
                          type="button"
                        >
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ""}
                        </motion.button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
    </ConnectButton.Custom>
  );
};

export default CustomButton;
