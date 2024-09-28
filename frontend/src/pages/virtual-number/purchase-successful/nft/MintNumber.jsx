import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../../../../functions/formatPhoneNumber";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../../redux/cartSlice";
import { useAccount } from "wagmi";
import { GETPHONENUMBERSBYWALLET, MINTNUMBERNFT } from "../../../../contract/contractIntegration";
import { uploadToIPFS } from "../../../../functions/ipfs/uploadToIPF";
import { GlobalURL, RECEIVER_ADDRESS } from "../../../../constants";
import checkTotalPrice from "../../../../functions/checkTotalPrice";
import { ethers } from "ethers";

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
            navigate('/search-results/cart-checkout/purchase-successful');
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
    <div className="bg-gradient-to-tr from-blue-700 via-blue-950 to-black h-screen flex flex-col items-center justify-center pt-[8.2rem]">
      <h1 className="font-bold text-[32px] leading-[40px] tracking-tight mb-2 text-white">
        Mint your number
      </h1>
      <p className="font-medium text-[16px] leading-[28px] mb-10 text-[#D8E4FD]">
        You are minting the following numbers:
        <div className="bg-white mx-5 px-5 py-2 my-2 w-fit rounded-lg">
          {cartArray.map((number, i) => (
            <span className="block text-[#5293FF]" key={i}>
              +999 {`${number && formatPhoneNumber(number.toString())}`}
            </span>
          ))}
        </div>
        <br />
        Number owner will be assigned to the following wallet address:
        <span className="text-[#5293FF]"> {account.address}</span>
      </p>

      <div className="flex items-center justify-center space-x-5">
        {/* Loading state */}
        {loading ? (
          <button className="mb-8 py-2 px-4 bg-gray-400 text-white rounded-lg" disabled>
            Minting...
          </button>
        ) : (
          <button
            className="mb-8 py-2 px-4 bg-blue-500 text-white rounded-lg"
            onClick={buynumber}
          >
            Confirm
          </button>
        )}

        <button
          className="mb-8 py-2 px-4 bg-red-500 text-white rounded-lg"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>

      {/* Display minting status or error */}
      {status && <p className="text-white mt-4">{status}</p>}
    </div>
  );
};

export default MintNumber;