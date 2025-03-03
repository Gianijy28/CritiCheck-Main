import React from "react";

const Technicals = () => {
  // Mock Data
  const technicalTasks = [
    { title: "Technical Report 1", dueDate: "January 3, 2025", status: "" },
    { title: "Technical Report 2", dueDate: "February 15, 2025", status: "Pending" },
    { title: "Technical Report 3", dueDate: "March 10, 2025", status: "To Do" },
  ];

  // Status Color Mapping
  const statusColors = {
    Pending: "bg-yellow-500",
    "To Do": "bg-red-500",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold border-b pb-2 mb-4">Technicals</h1>
      <div className="grid grid-cols-3 gap-6">
        {technicalTasks.map((task, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-[15px] shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg">{task.title}</h3>
              <p className="text-sm text-gray-400">{task.dueDate}</p>
            </div>
            {task.status && (
              <span className={`px-3 py-1 mt-4 text-sm font-semibold rounded-lg self-start ${statusColors[task.status]}`}>
                {task.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technicals;
