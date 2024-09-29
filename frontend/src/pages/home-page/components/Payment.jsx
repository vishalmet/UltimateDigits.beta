import React, { useEffect, useState } from "react";
import { countries, GlobalURL } from "../../../constants";
import { useAccount } from "wagmi";
import { selectNumber, setNumber } from "../../../redux/numberSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("virtual");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userData, setUserData] = useState(null);
  const [hasPhoneNumber, setHasPhoneNumber] = useState(false);
  const { address } = useAccount();
  const storedNumber = useSelector(selectNumber);
  const [inputValue, setInputValue] = useState(storedNumber.replace("+999 ", ""));
  const dispatch = useDispatch();
  
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const trimmed = cleaned.substring(0, 10);
    const formattedNumber = trimmed.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
    return formattedNumber;
  };

  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    if (rawValue.length <= 10) {
      const formattedValue = formatPhoneNumber(rawValue);
      setInputValue(formattedValue);
      dispatch(setNumber(`+999 ${formattedValue}`));
    }
  };

  const fetchUserData = async (address) => {
    try {
      const response = await fetch(`${GlobalURL}/user/getUser/${address}`);
      const data = await response.json();
      console.log("User Data:", data.data);
      setUserData(data.data);
      // Check if phone number exists
      setHasPhoneNumber(!!data.data.phone);
      return data.exists;
    } catch (error) {
      console.error("Error fetching user data", error);
      return true;
    }
  };

  useEffect(() => {
    if (address) {
      fetchUserData(address);
    }
  }, [address]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setPhoneNumber(numericValue);
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleOtpSend = async () => {
    try {
      const bodyData = {
        countryCode: selectedCountry,
        phoneNumber: phoneNumber
      }; 
      const response = await fetch(`${GlobalURL}/twilio-sms/sendotp`, {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(bodyData)
      });
      const result = await response.json();
      if (response.ok && result.sid) {
        console.log('OTP sent successfully:', result);
        return true;
      } else {
        console.error("Failed to send OTP:", result);
        return false;
      }
    } catch (error) {
      console.error("Error checking user existence", error);
      return false;
    }
  }

  const handleRealNumberNavigation = async (path) => {
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("countryCode", selectedCountry);
    const otpSent = await handleOtpSend();
    if(otpSent){
      navigate(path);
    }
    else{
      alert("Failed to send OTP! Please try again.")
    }
  };

  return (
    <div className="pt-8 ">
      <div className="border-b border-[#7181a5] px-5 pb-6 w-full">
        <h1 className="text-3xl font-semibold text-white">Payments</h1>
        <p className="text-customText pt-1">
          Start sending people crypto through their numbers
        </p>
      </div>

      <div className=" py-6 border-b border-[#7181a5] px-5 w-full">
        <div className="flex bg-[#121735] w-fit rounded-full">
          <button
            className={`p-3 w-fit rounded-full ${
              selectedOption === "virtual"
                ? "bg-customBlue text-white"
                : "text-white"
            }`}
            onClick={() => handleOptionChange("virtual")}
          >
            Virtual Number
          </button>
          {/* Show Real Number option only if hasPhoneNumber is false */}
          {!hasPhoneNumber && (
            <button
              className={`p-3 w-fit rounded-full ${
                selectedOption === "real"
                  ? "bg-customBlue text-white"
                  : "text-white"
              }`}
              onClick={() => handleOptionChange("real")}
            >
              Real Number
            </button>
          )}
        </div>

        <div className="pt-8">
          {selectedOption === "virtual" ? (
            <div className="flex items-center ">
              <div
                id="country"
                className="bg-[#1F2138] px-5 h-12 border  border-[#7B8DB7]/20 rounded-l-lg p-2 text-white flex items-center"
              >
                +999
              </div>
              <input
                type="tel"
                placeholder="+999 93567 94703"
                className="bg-[#1F2138]  h-12 w-52 lg:w-60 border border-[#7B8DB7]/20 p-2 text-customText"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="bg-customBlue text-white h-12 rounded-r-lg px-2"
                onClick={() => handleNavigation(`/virtual-number/search-results?n=${inputValue}`)}
              >
                Proceed
              </button>
            </div>
          ) : (
            <div className="flex items-center ">
              <select
                id="country"
                className="bg-[#1F2138] max-w-20 h-12 border border-[#7B8DB7]/20 rounded-l-lg p-2 text-customText"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option className="max-w-16 truncate" value="" disabled>
                  US
                </option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} (+{country.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="+1 (555) 000-000"
                className="bg-[#1F2138]  h-12 w-52 lg:w-60 border border-[#7B8DB7]/20 p-2 text-customText"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <button className="bg-customBlue text-white h-12 rounded-r-lg px-2"
                onClick={() => handleRealNumberNavigation("/real-number/otp-page")}>
                Proceed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;