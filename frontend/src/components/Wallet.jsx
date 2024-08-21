import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { motion } from "framer-motion";
import MetamaskLogo from "../assets/Metamask.png";

import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [base, mainnet],
  ssr: true,
});
const queryClient = new QueryClient();

const CustomButton = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
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
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
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
                        <div className=" w-[300px] md:w-[450px] flex justify-center mx-auto pt-6 lg:pt-10">
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
                        <div className=" w-[300px] md:w-[450px] flex justify-center mx-auto pt-6 lg:pt-10">
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
                        <div className=" w-[300px] md:w-[450px] flex justify-center mx-auto pt-6 lg:pt-10">
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
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default CustomButton;
