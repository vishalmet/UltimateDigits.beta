import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../../../../functions/formatPhoneNumber";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../../redux/cartSlice";
import { useAccount } from "wagmi";
import { MINTNUMBERNFT } from "../../../../contract/contractIntegration";
import { uploadToIPFS } from "../../../../functions/ipfs/uploadToIPF";
import { GlobalURL, RECEIVER_ADDRESS } from "../../../../constants";
import checkTotalPrice from "../../../../functions/checkTotalPrice";
import { ethers } from "ethers";
import Header from "../../../../components/Header";
import NumberNft from "./NumberNft";
import { motion } from "framer-motion";

const MintNumber = () => {
  const navigate = useNavigate();
  const cartArray = useSelector(selectCartItems);
  const account = useAccount();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const buynumber = async () => {
    if (cartArray.length === 0) {
        setStatus("No phone numbers to mint.");
        return;
    }

    try {
        setLoading(true);
        setStatus("Uploading data to IPFS...");

        // Step 1: Upload data to IPFS
        const imageUrl = await uploadToIPFS('/src/contract/tokenAssets/ud-square-logo2.png');

        const metadata = {
            name: `UDWeb3Number UDW3N`,
            description: "This NFT represents ownership of a phone number.",
            image: imageUrl,
            phoneNumbers: cartArray.map(number => `+999 ${formatPhoneNumber(number.toString())}`),
            owner: account.address,
            attributes: [
                {
                    trait_type: "Phone Numbers",
                    value: cartArray.map(number => `+999 ${formatPhoneNumber(number.toString())}`).join(", "),
                },
                {
                    trait_type: "Owner Address",
                    value: account.address,
                },
            ],
        };
        const tokenUri = await uploadToIPFS(JSON.stringify(metadata));
        console.log("Token URI: ", tokenUri);

        // Step 2: Mint the NFT
        setStatus("Minting in progress...");

        const totalPrice = checkTotalPrice(cartArray);
        if (isNaN(totalPrice) || totalPrice <= 0) {
            throw new Error("Invalid total price. Please check the input values.");
        }

        const transacamount = ethers.utils.parseUnits(totalPrice.toString(), "ether"); // Specify units
        console.log("Parsed Amount as BigNumber:", transacamount.toString());

        // Call the mint function with the correct parameters
        const result = await MINTNUMBERNFT({ 
            phoneNumbers: cartArray, 
            tokenUri, 
            address: RECEIVER_ADDRESS,
            amount: transacamount
        });

        if (result && result.hash) {
            setStatus(`NFT minted successfully! Transaction Hash: ${result.hash}`);
        } else {
            throw new Error("Minting failed, no transaction hash returned.");
        }

        setStatus("Adding virtual number to the backend...");
        const virtualNumbers = cartArray.map(number => formatPhoneNumber(number.toString()));

        const response = await fetch(`${GlobalURL}/user/addVirtual`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                address: account.address,
                virtualNumber: virtualNumbers,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            setStatus(`Virtual number added successfully. ${data.message}`);
            navigate('/virtual/number-linked');
        } else {
            setStatus(`Failed to add virtual number.`);
        }
    } catch (error) {
        console.error("Error during minting process:", error);
        setStatus(`Error during minting process: ${error.message}`);
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="text-white inter-font">
      <div className="bg-gradient-to-t from-[#06061E] via-[#06061E] to-blue-950 min-h-screen pb-24">
        <Header />
        <div className="flex justify-center items-center pt-16">
          <div className="max-w-7xl mx-4 md:mx-0 space-y-6">
            <div className="flex justify-center">
              <NumberNft />
            </div>
            <div className=" text-center">
              <p className=" font-bold text-3xl">Purchase Confirmation</p>
              <p className=" text-customText">
                Number owner will be assigned to the following wallet address:
              </p>
              <p className="hidden md:flex font-bold mt-2 text-center"> {account.address}</p>
              <div className="  pt-5">
                {loading ? (
                  <button className="font-bold text-xs md:text-base p-3 w-full rounded-full border border-gray-400 bg-gray-400 text-white" disabled>
                    Minting...
                  </button>
                ) : (
                  <motion.button
                    onClick={buynumber}
                    whileTap={{ scale: 0.9 }}
                    className={`font-bold text-xs md:text-base p-3 w-full rounded-full bg-customBlue text-white border border-customBlue`}
                  >
                    Link your number to a wallet
                  </motion.button>
                )}

                <button
                  className="mt-2 py-2 px-4 bg-red-500 text-white rounded-lg"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
              </div>
              {status && <p className="text-white mt-4">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintNumber;