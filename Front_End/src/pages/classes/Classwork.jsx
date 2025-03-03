import React from "react";
import { useParams } from "react-router-dom";

const Classwork = () => {
  const { classCode } = useParams();

  // Mock class tasks
  const classTasks = {
    "CS0057": [
      { title: "Seatwork 1 | Discovering Arrays and Loops", status: "Graded", dueDate: "January 17, 2025" },
      { title: "Seatwork 2 | Switch Statement", status: "ToDo", dueDate: "February 7, 2025" },
    ],
  };

  const tasks = classTasks[classCode] || [];

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold border-b pb-2 mb-4">Classwork</h1>
      <div className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="flex justify-between bg-gray-800 p-3 rounded-lg">
              <span>{task.title}</span>
              <span className="text-sm text-gray-400">{task.status} • {task.dueDate}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No classwork available.</p>
        )}
      </div>
    </div>
  );
};

export default Classwork;
