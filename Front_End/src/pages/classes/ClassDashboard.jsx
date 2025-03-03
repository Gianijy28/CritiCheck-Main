import React from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ClassDashboard = () => {
  const { classCode } = useParams();
  const location = useLocation();

  const classData = {
    "CS0057": {
      name: "Parallel And Distributed Computing",
      code: "CS0057",
      sections: [
        { name: "Classwork", route: "classwork" },
        { name: "Assignments", route: "assignments" },
        { name: "Technicals", route: "technicals" },
        { name: "Grades", route: "grades" },
      ],
    },
  };

  const currentClass = classData[classCode] || {};

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white ml-20">
      <div className="w-72 bg-neutral-900 p-6 border-r border-gray-700">
        <Link to="/classes" className="flex items-center text-white hover:text-teal-400">
          <ArrowLeft size={20} className="mr-2" />
          <h2 className="text-lg font-bold">All Classes</h2>
        </Link>
        <div className="mt-4 flex items-center space-x-4">
          <div className="w-16 h-12 flex items-center justify-center text-white font-bold text-xl rounded-md bg-blue-800">
            {currentClass.code?.slice(-2)}
          </div>
          <div>
            <div className="text-sm font-semibold">{currentClass.name}</div>
            <div className="text-gray-400 text-xs">{currentClass.code}</div>
          </div>
        </div>

        <nav className="mt-6">
          {currentClass.sections?.map((section) => {
            const isActive = location.pathname.includes(section.route);
            return (
              <Link
                key={section.name}
                className={`block py-2 px-4 rounded transition ${
                  isActive ? "bg-[#4d4f57] text-white font-semibold" : "text-gray-400 hover:bg-gray-700"
                }`}
                to={`/dashboard/${classCode}/${section.route}`}
              >
                {section.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default ClassDashboard;
