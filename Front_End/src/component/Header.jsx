import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsPeople, BsCalendar } from "react-icons/bs";
import { SiCanvas } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/components/criticheck.png";
import dashboardIcon from "../assets/components/dashboard.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Fix: Ensure paths match exactly with App.jsx routes
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="flex flex-row h-screen">
      <div className="fixed top-0 left-0 h-full w-21 bg-neutral-800 flex flex-col justify-between items-center py-6 shadow-lg z-10">
        <div className="flex flex-col items-center space-y-4">
          <img src={logo} alt="Logo" className="w-14 h-14 mb-6" />

          {/* Dashboard Navigation */}
          <button
            className={`flex flex-col items-center justify-center w-22 h-18 cursor-pointer focus:outline-none ${
              isActive("/dashboard") ? "bg-teal-700 text-white border-l-4 border-teal-500" : "text-teal-300"
            } rounded-md`}
            onClick={() => navigate("/dashboard")}
          >
            <img src={dashboardIcon} alt="Dashboard" className="w-15 h-10" />
          </button>

          {/* Classes Navigation */}
          <button
            className={`flex flex-col items-center justify-center w-22 h-18 cursor-pointer focus:outline-none ${
              isActive("/classes") ? "bg-teal-700 text-white border-l-4 border-teal-500" : "text-teal-300"
            } rounded-md`}
            onClick={() => navigate("/classes")}
          >
            <BsPeople size={30} />
          </button>

          {/* Calendar Navigation */}
          <button
            className={`flex flex-col items-center justify-center w-22 h-18 cursor-pointer focus:outline-none ${
              isActive("/calendar") ? "bg-teal-700 text-white border-l-4 border-teal-500" : "text-teal-300"
            } rounded-md`}
            onClick={() => navigate("/calendar")}
          >
            <BsCalendar size={30} />
          </button>

          {/* Canvas Navigation */}
          <button
            className="flex flex-col items-center justify-center w-22 h-18 cursor-pointer text-teal-300 rounded-md focus:outline-none"
            onClick={() => window.open("https://feu.instructure.com/", "_blank")} // Opens in a new tab
          >
            <SiCanvas size={30} className="text-red-500" />
          </button>
        </div>

        {/* Profile Navigation */}
        <div className="-mb-6">
          <button
            className={`flex items-center justify-center w-22 h-18 cursor-pointer focus:outline-none ${
              isActive("/profile") ? "bg-teal-700 text-white border-l-4 border-teal-500" : "text-teal-300"
            } rounded-md`}
            onClick={() => navigate("/profile")}
          >
            <FaUserCircle size={45} color="#00ffd1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;