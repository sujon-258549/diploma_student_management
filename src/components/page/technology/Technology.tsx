"use client"
import {
  Building2, Zap, Ear, BatteryCharging, Laptop,
  HeartPulse, Cpu, BookOpen
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Technology = () => {
  const departments = [
    {
      id: "civil",
      name: "সিভিল টেকনোলজি",
      type: "বিভাগ পরিচিতি  ছাত্র তালিকা",
      Icon: Building2,
      gradient: "from-green-400 to-blue-500"
    },
    {
      id: "electrical",
      name: "ইলেকট্রিক্যাল টেকনোলজি",
      type: "বিভাগ পরিচিতি ছাত্র তালিকা",
      Icon: Zap,
      gradient: "from-yellow-400 to-red-500"
    },
    {
      id: "mechanical",
      name: "মেকানিক্যাল টেকনোলজি",
      type: "বিভাগ পরিচিতি  ছাত্র তালিকা",
      Icon: Ear,
      gradient: "from-gray-600 to-gray-900"
    },
    {
      id: "power",
      name: "পাওয়ার টেকনোলজি",
      type: "বিভাগ পরিচিতি  ছাত্র তালিকা",
      Icon: BatteryCharging,
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: "computer",
      name: "কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি",
      type: "বিভাগ পরিচিতি  ছাত্র তালিকা",
      Icon: Laptop,
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      id: "electromadical",
      name: "ইলেকট্রমেডিকেল টেকনোলজি",
      type: "বিভাগ পরিচিতি  ছাত্র তালিকা",
      Icon: HeartPulse,
      gradient: "from-pink-400 to-red-600"
    },
    {
      id: "electronic",
      name: "ইলেকট্রনিক্স টেকনোলজি",
      type: "বিভাগ পরিচিতি  ছাত্র তালিকা",
      Icon: Cpu,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      id: "nontech",
      name: "নন-টেক বিভাগ",
      type: "বিভাগ পরিচিতি ্",
      Icon: BookOpen,
      gradient: "from-orange-400 to-yellow-500"
    }
  ];

  const [technology, setTechnology] = useState<string>('')
  const router = useRouter()
  useEffect(() => {
    if (technology === "computer") {
      return router.push('/main_dashboard/department/computer-sections')
    }
  }, [technology])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {departments.map((dept, idx) => {
        const { Icon } = dept;
        return (
          <button onClick={() => setTechnology(dept.id)} style={{ boxShadow: '5px 5px 15px #000' }}
            key={idx}
            className={`flex cursor-pointer justify-center items-center gap-4 p-4 rounded-2xl text-white shadow-lg bg-gradient-to-r ${dept.gradient}`}
          >
            <div>
              <Icon className="w-10 h-10 text-center mx-auto" />
              <h3 className="text-xl text-center font-bold">{dept.name}</h3>
              <p className="text-sm opacity-90 text-center">{dept.type}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default Technology