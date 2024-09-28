import Nft from "../contract/abi/contract.json";
import { ethers } from "ethers";
import Web3 from "web3";
import {BASE_SEPOLIA_CONTRACT_ADDRESS} from "../constants";

const isBrowser = () => typeof window !== "undefined";
const { ethereum } = isBrowser();

if (ethereum) {
  isBrowser().web3 = new Web3(ethereum); 
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

export const GETPHONENUMBERSBYWALLET =async (walletAddress) => {
    try {
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(BASE_SEPOLIA_CONTRACT_ADDRESS, Nft, signer);
        const answer = await Role.getPhoneNumbersByWallet(walletAddress);
        return answer;
    } catch (error) {
        console.error('Error fetching memo:', error);
    }
}

export const MINTNUMBERNFT = async ({ phoneNumbers, tokenUri, address, amount }) => {
  try {
    const provider = window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

    const signer = provider.getSigner();
    const Role = new ethers.Contract(BASE_SEPOLIA_CONTRACT_ADDRESS, Nft, signer);

    const tokenId = await Role.addPhoneNumbers(phoneNumbers, tokenUri, address, amount, { value: amount });
    return tokenId;
  } catch (error) {
    console.error('Error minting NFT:', error.message, error);
  }
};