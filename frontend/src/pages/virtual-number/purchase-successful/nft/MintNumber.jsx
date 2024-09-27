import React from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../../../../functions/formatPhoneNumber";
import checkTotalPrice from "../../../../functions/checkTotalPrice";
import { useSelector } from "react-redux";
import { ethers } from "ethers"; // Ensure this is correct
import { selectCartItems } from "../../../../redux/cartSlice";
import { useAccount } from "wagmi";

const MintNumber = () => {
  const navigate = useNavigate();
  const cartArray = useSelector(selectCartItems);
  const account = useAccount();

  async function buynumber() {
    const toaddress = "0x9217aBD6cD0a54ef915944Ff4bE80A6915EE9086";
    const amount = parseInt(checkTotalPrice(cartArray)) * 0.0041336988687793;

    // Check if window.ethereum is defined
    if (typeof window.ethereum === 'undefined') {
      alert("Please install a web3 wallet like MetaMask.");
      return;
    }

    // Create an ethers provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // Get the signer
    const signer = provider.getSigner();

    // Convert the amount to the appropriate units
    const amt = ethers.utils.parseUnits(amount.toString(), "ether");

    try {
      const tx = await signer.sendTransaction({
        to: toaddress,
        value: amt,
      });
      console.log("Transaction Hash:", tx.hash);
    } catch (err) {
      console.error("Transaction Error:", err);
    }
  }

  return (
    <div className="bg-gradient-to-tr from-blue-700 via-blue-950 to-black h-full flex flex-col items-center justify-center pt-[8.2rem]">
      <h1 className="font-bold text-[32px] leading-[40px] tracking-tight mb-2 text-white">
        Mint your number
      </h1>
      <p className="font-medium text-[16px] leading-[28px] mb-10 text-[#D8E4FD]">
        You are minting the following numbers:
        {cartArray.map((number, i) => (
          <span className="block ml-5 text-[#5293FF]" key={i}>
            +999 {`${number && formatPhoneNumber(number.toString())}`}
          </span>
        ))}
        <br />
        Number owner will be assigned to the following wallet address:
        <span className="text-[#5293FF]"> {account.address}</span>
      </p>
      <div className="flex items-center justify-center space-x-5">
        <button
          className="mb-8 py-2 px-4 bg-blue-500 text-white rounded-lg"
          onClick={buynumber}
        >
          Confirm
        </button>
        <button
          className="mb-8 py-2 px-4 bg-red-500 text-white rounded-lg"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MintNumber;