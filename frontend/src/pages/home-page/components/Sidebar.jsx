import { useRef, useEffect } from "react";
import { RiHome4Fill } from "react-icons/ri";
import { FaWallet, FaLock } from "react-icons/fa";
import { IoCall, IoNotifications } from "react-icons/io5";
import { RiMessage2Fill, RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon

import udlogo from "../../../assets/ud-logo.png";

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      toggleSidebar(); // Close the sidebar when clicking outside
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 z-40 w-80 sm:w-[22rem] lg:w-96 bg-[#121735] transition-transform h-screen overflow-y-auto pt-10 px-5 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static flex flex-col justify-between border-r-2 border-[#7181a5]`}
      aria-label="Sidebar"
    >
      <div>
        <div className="flex justify-between items-center">
          <img
            src={udlogo}
            alt="Logo"
            className="h-[26px] md:h-[32px] w-[150px] md:w-[216px]"
          />

          <button
            onClick={toggleSidebar}
            className="md:hidden text-white text-xl"
            aria-label="Close Sidebar"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 pt-14 pl-3">
          <h6 className="flex items-center text-white font-medium gap-4">
            <RiHome4Fill />
            Home
          </h6>
          <h6 className="flex items-center text-[#7181a5]  gap-4">
            <FaWallet />
            <p className="font-medium">Payments</p>
            
          </h6>
          <h6 className="flex items-center text-[#7181a5] font-medium gap-4">
            <IoNotifications />
            <p className="font-medium">Notifications</p>
            <div className="text-[#977247] font-medium text-[14px] bg-[#9772472c] rounded-full px-3">
              Coming soon
            </div>
          </h6>
          <h6 className="flex items-center text-[#7181a5] font-medium gap-4">
            <FaLock />
            <p className="font-medium">Multi-factor auth</p>
            <div className="text-[#977247] font-medium text-[14px] bg-[#9772472c] rounded-full px-3">
              Coming soon
            </div>
          </h6>
          <h6 className="flex items-center text-[#7181a5] font-medium gap-4">
            <IoCall />
            <p className="font-medium">dVOIP</p>
            <div className="text-[#977247] font-medium text-[14px] bg-[#9772472c] rounded-full px-3">
              Coming soon
            </div>
          </h6>
          <h6 className="flex items-center text-[#7181a5] font-medium gap-4">
            <RiMessage2Fill />
            <p className="font-medium">Messenger</p>
            <div className="text-[#977247] font-medium text-[14px] bg-[#9772472c] rounded-full px-3">
              Coming soon
            </div>
          </h6>
        </div>
      </div>

      <button className="flex justify-between items-center text-white w-full p-5 bg-[#222945] rounded-lg font-medium mb-4">
        Log out <RiLogoutBoxRLine />
      </button>
    </aside>
  );
}
