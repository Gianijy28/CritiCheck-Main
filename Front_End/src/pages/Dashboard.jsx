import React, { useState } from "react";
import pandaImage from "../assets/components/panda.png"; 
function Dashboard() {
  const activities = []; 
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="flex bg-neutral-950 h-screen overflow-hidden">
      <div className="w-1/5 bg-neutral-900 p-4 h-screen ml-21">
        <h2 className="text-3xl font-bold text-white mb-4 -ml-1">Activity</h2>
        <div className="border-t border-gray-600 mb-4 -mx-4"></div>
        <div className="space-y-2 -ml-1">
          {activities.length === 0 ? (
            <p className="text-gray-400">No activities available</p>
          ) : (
            activities.map((activity) => (
              <button
                key={activity.id}
                className={`flex items-center bg-neutral-800 p-4 rounded-xl shadow-md hover:bg-neutral-700 cursor-pointer w-full ${
                  selectedActivity?.id === activity.id ? "border-2 border-teal-500" : ""
                }`}
                onClick={() => setSelectedActivity(activity)}
              >
                <div className="ml-4 text-left">
                  <h3 className="text-white font-semibold text-lg">{activity.subject}</h3>
                  <p className="text-gray-400 text-sm">{activity.instructor}</p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      <div className="border border-gray-600 h-screen"></div>
      <div className="flex-1 bg-neutral-950 p-6 rounded-xl shadow-lg h-screen flex flex-col items-center justify-center">
        {selectedActivity ? (
          <>
            <div className="flex justify-between items-center mb-6 bg-neutral-900 p-4 rounded-lg shadow-md w-full">
              <h2 className="text-lg font-bold text-white">{selectedActivity.subject}</h2>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{selectedActivity.type}</h2>
            <p className="text-gray-400 mb-4">{selectedActivity.description}</p>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <img src={pandaImage} alt="No updates" className="w-40 h-35 mb-4" />
            <p className="text-gray-400 text-lg">No updates for now. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
