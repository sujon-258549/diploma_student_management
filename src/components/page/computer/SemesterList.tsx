"use client"
import React from 'react';

const semesters = [
  { name: "১ম সেমিস্টার", gradient: "from-red-400 to-pink-500" },
  { name: "২য় সেমিস্টার", gradient: "from-orange-400 to-yellow-500" },
  { name: "৩য় সেমিস্টার", gradient: "from-lime-400 to-green-500" },
  { name: "৪র্থ সেমিস্টার", gradient: "from-emerald-400 to-teal-500" },
  { name: "৫ম সেমিস্টার", gradient: "from-cyan-400 to-blue-500" },
  { name: "৬ষ্ঠ সেমিস্টার", gradient: "from-indigo-500 to-violet-500" },
  { name: "৭ম সেমিস্টার", gradient: "from-purple-500 to-fuchsia-500" },
  { name: "৮ম সেমিস্টার", gradient: "from-pink-500 to-rose-500" },
];

const SemesterList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">কম্পিউটার টেকনোলজি – ৮টি সেমিস্টার</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {semesters.map((sem, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${sem.gradient} text-white rounded-xl p-6 shadow-md text-center hover:scale-105 transition`}
          >
            <h2 className="text-lg font-semibold">{sem.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemesterList;
