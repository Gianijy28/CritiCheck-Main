import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Lock, Trash2, MoreVertical } from "lucide-react";

const getRandomColor = () => {
  const colors = ["bg-red-900", "bg-blue-950", "bg-green-700", "bg-purple-700", "bg-yellow-500", "bg-gray-900", "bg-teal-700"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ClassCard = ({ className, classCode }) => {
  const navigate = useNavigate();
  const bgColor = getRandomColor();

  return (
    <div
      className="w-83 h-40 bg-neutral-900 text-white p-5 rounded-2xl shadow-lg border border-gray-700 flex flex-col justify-between hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/classes/${classCode}`)} // ✅ Redirects to Class Dashboard
    >
      {/* Header: Profile + Title */}
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-4">
          {/* Fixed Profile Box */}
          <div className={`w-19 h-14 flex items-center justify-center text-white font-bold text-xl rounded-md ${bgColor}`}>
            {classCode.slice(-2)}
          </div>

          {/* Class Title & Code */}
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-bold leading-tight break-words">{className}</h3>
            <p className="text-gray-400 text-sm">{classCode}</p>
          </div>
        </div>

        <MoreVertical className="text-teal-400 cursor-pointer" />
      </div>

      {/* Bottom: Fixed Icon Position */}
      <div className="flex justify-start space-x-5 text-gray-400 mt-auto">
        <Bell className="cursor-pointer hover:text-white transition" />
        <Lock className="cursor-pointer hover:text-white transition" />
        <Trash2 className="cursor-pointer hover:text-white transition" />
      </div>
    </div>
  );
};

export default ClassCard;
