import React from "react";
import HeaderLogo from "../../../../assets/ud-logo.png";

const NumberNft = () => {
  return (
    <div className="bg-gradient-to-br from-[#009EE5] via-[#00BFE5] to-[#50C9AF] shadow-md p-4 shadow-[#50C9AF] rounded-lg w-[180px] h-[180px] flex flex-col justify-between">
      <div className="">
        <img className="h-5" src={HeaderLogo} alt="HeaderLogo" />
      </div>
        <p className="font-bold">
          +999 <br /> 9359 894703
        </p>
    </div>
  );
};

export default NumberNft;
