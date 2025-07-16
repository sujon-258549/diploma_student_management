"use client"
import {
  Building2, Zap, Ear, BatteryCharging, Laptop,
  HeartPulse, Cpu, BookOpen
} from "lucide-react";

const Technology = () => {
  const departments = [
    {
      name: "সিভিল টেকনোলজি",
      type: "টেকনোলজি পরিচিতি",
      Icon: Building2,
      gradient: "from-green-400 to-blue-500"
    },
    {
      name: "ইলেকট্রিক্যাল টেকনোলজি",
      type: "টেকনোলজি পরিচিতি",
      Icon: Zap,
      gradient: "from-yellow-400 to-red-500"
    },
    {
      name: "মেকানিক্যাল টেকনোলজি",
      type: "টেকনোলজি পরিচিতি",
      Icon: Ear,
      gradient: "from-gray-600 to-gray-900"
    },
    {
      name: "পাওয়ার টেকনোলজি",
      type: "টেকনোলজি পরিচিতি",
      Icon: BatteryCharging,
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি",
      type: "টেকনোলজি পরিচিতি",
      Icon: Laptop,
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      name: "ইলেকট্রমেডিকেল টেকনোলজি",
      type: "টেকনোলজি পরিচিতি",
      Icon: HeartPulse,
      gradient: "from-pink-400 to-red-600"
    },
    {
      name: "ইলেকট্রনিক্স টেকনোলজি",
      type: "টেকনোলজি পরিচিতি",
      Icon: Cpu,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      name: "নন-টেক বিভাগ",
      type: "বিভাগ পরিচিতি",
      Icon: BookOpen,
      gradient: "from-orange-400 to-yellow-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {departments.map((dept, idx) => {
        const { Icon } = dept;
        return (
          <div style={{boxShadow:'5px 5px 15px #000'}}
            key={idx}
            className={`flex justify-center items-center gap-4 p-4 rounded-2xl text-white shadow-lg bg-gradient-to-r ${dept.gradient}`}
          >
            <div>
              <Icon className="w-10 h-10 text-center mx-auto" />
              <h3 className="text-xl text-center font-bold">{dept.name}</h3>
              <p className="text-sm opacity-90 text-center">{dept.type}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Technology