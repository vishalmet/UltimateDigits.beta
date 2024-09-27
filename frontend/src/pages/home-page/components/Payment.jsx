import React, { useState } from "react";
import { countries } from "../../../constants";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("virtual"); 
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
 
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    
    const numericValue = value.replace(/[^0-9]/g, "");
    setPhoneNumber(numericValue);
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
        </div>

        <div className="pt-8">
          {selectedOption === "virtual" ? (
            <p className="text-white">
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
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                <button className="bg-customBlue text-white h-12 rounded-r-lg px-2">
                  Proceed
                </button>
              </div>
            </p>
          ) : (
            <p className="text-white">
              <div className="flex items-center ">
                <select
                  id="country"
                  className="bg-[#1F2138] max-w-20 h-12 border border-[#7B8DB7]/20 rounded-l-lg p-2 text-customText"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option className=" max-w-16 truncate" value="" disabled>
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
                <button className="bg-customBlue text-white h-12 rounded-r-lg px-2">
                  Proceed
                </button>
              </div>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
