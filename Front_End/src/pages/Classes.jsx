import React, { useState } from "react";
import { Users, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import classBoard from "../assets/components/class_board.png";
import ClassCard from "../component/ClassCard";

function Classes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Example class subject (Just for testing UI)
  const exampleClass = {
    className: "Software Engineering",
    classCode: "CS0057",
  };

  // Function to handle clicking on a class (Navigate to Dashboard)
  const handleClassClick = () => {
    navigate(`/dashboard/${exampleClass.classCode}`);
  };

  return (
    <div className="flex flex-col h-screen bg-neutral-900 text-white p-6 ml-20">
      {/* ✅ Header with "Join Class" button */}
      <div className="flex justify-between items-center px-8">
        <h1 className="text-3xl font-bold">Classes</h1>
        <button
          className="border border-teal-400 text-white px-5 py-2 rounded-lg flex items-center space-x-2 hover:bg-teal-900 transition duration-300"
          onClick={() => setIsModalOpen(true)}
        >
          <Users size={20} className="text-teal-400" />
          <span>Join Class</span>
        </button>
      </div>

      <div className="border-t-2 border-gray-600 mx-8 my-4"></div>

      {/* ✅ Show Example Class */}
      <div className="flex flex-wrap gap-6 p-6">
        <div onClick={handleClassClick} className="cursor-pointer">
          <ClassCard className={exampleClass.className} classCode={exampleClass.classCode} />
        </div>
      </div>

      {/* ✅ Join Class Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-neutral-900 border border-gray-500 p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-3 right-3 text-teal-400 hover:text-white transition duration-200"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={22} />
            </button>
            <h3 className="text-xl font-bold text-center mb-4">Enter Class ID</h3>
            <input
              type="text"
              placeholder="Enter Course Code"
              className="w-full p-3 rounded-lg border border-teal-400 bg-black text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              disabled
            />
            <button
              className="w-full border border-teal-400 text-teal-400 px-5 py-3 rounded-lg shadow-lg mt-4 transition duration-300 opacity-50 cursor-not-allowed"
              disabled
            >
              Join Class
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Classes;
