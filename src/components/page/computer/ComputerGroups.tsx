"use client"
import React from 'react';

const groups = [
  { name: "Group A", color: "from-blue-500 to-cyan-500" },
  { name: "Group B", color: "from-green-500 to-emerald-500" },
  { name: "Group C", color: "from-purple-500 to-pink-500" }
];

const ComputerGroups = () => {
  return (
    <div className="p-6">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {groups.map((group, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${group.color} text-white rounded-xl p-6 shadow-md text-center hover:scale-105 transition`}
          >
            <h1 className="text-2xl font-bold mb-4">কম্পিউটার টেকনোলজি</h1>
            <h2 className="text-xl font-semibold">{group.name} গ্রুপ</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComputerGroups;
