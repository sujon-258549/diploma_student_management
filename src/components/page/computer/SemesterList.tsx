"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpenCheck, LayoutGrid, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Semester = {
  id: number;
  name: string;
  gradient: string;
  icon: React.JSX.Element;
  group: string[];
  shift: string[];
}

const semesters = [
  { id: 1, name: "১ম সেমিস্টার", gradient: "from-red-400 to-pink-500", icon: <GraduationCap />, group: ["A", "B"], shift: ["Morning", "Evening"] },
  { id: 2, name: "২য় সেমিস্টার", gradient: "from-orange-400 to-yellow-500", icon: <BookOpenCheck />, group: ["A", "B"], shift: ["Morning", "Evening"] },
  { id: 3, name: "৩য় সেমিস্টার", gradient: "from-lime-400 to-green-500", icon: <LayoutGrid />, group: ["A", "B"], shift: ["Morning", "Evening"] },
  { id: 4, name: "৪র্থ সেমিস্টার", gradient: "from-emerald-400 to-teal-500", icon: <GraduationCap />, group: ["A", "B"], shift: ["Morning", "Evening"] },
  { id: 5, name: "৫ম সেমিস্টার", gradient: "from-cyan-400 to-blue-500", icon: <BookOpenCheck />, group: ["A", "B"], shift: ["Morning", "Evening"] },
  { id: 6, name: "৬ম সেমিস্টার", gradient: "from-indigo-400 to-violet-500", icon: <LayoutGrid />, group: ["A", "B"], shift: ["Morning", "Evening"] },
  { id: 7, name: "৭ম সেমিস্টার", gradient: "from-purple-500 to-fuchsia-500", icon: <GraduationCap />, group: ["A", "B"], shift: ["Morning", "Evening"] },
  { id: 8, name: "৮ম সেমিস্টার", gradient: "from-pink-500 to-rose-500", icon: <BookOpenCheck />, group: ["A", "B"], shift: ["Morning", "Evening"] },
]

const SemesterList = () => {
  const [selectedSemester, setSelectedSemester] = useState<Semester | null>(null)

  const morningSemesters = semesters.filter(sem => sem.shift.includes("Morning"))
  const eveningSemesters = semesters.filter(sem => sem.shift.includes("Evening"))

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-10 text-white md:mb-20 text-center">
        কম্পিউটার টেকনোলজি – ৪টি সেমিস্টার
      </h1>

      <Tabs defaultValue="morning" className="w-full">
        <TabsList className="grid w-full max-w-[350px] mx-auto gap-2 pb-12 grid-cols-2 bg-white">
          <TabsTrigger value="morning" className="text-white py-3 bg-black data-[state=active]:bg-cyan-700">
            Morning Shift
          </TabsTrigger>
          <TabsTrigger value="evening" className="text-white py-3 bg-black data-[state=active]:bg-cyan-700">
            Evening Shift
          </TabsTrigger>
        </TabsList>

        {/* Morning Shift */}
        <TabsContent value="morning">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {morningSemesters
              .filter((sem) => sem.id % 2 === 1)
              .map((sem) => (
                <Card
                  onClick={() => setSelectedSemester(sem)}
                  key={`morning-${sem.id}`}
                  className={`bg-gradient-to-r ${sem.gradient} text-white shadow-md hover:scale-105 transition duration-300 cursor-pointer`}
                >
                  <CardHeader className="flex flex-col items-center justify-center">
                    <div className="text-4xl">{sem.icon}</div>
                    <CardTitle className="text-lg mt-2">{sem.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm">Shift: Morning</p>
                    <p className="text-sm">Groups: {sem.group.join(", ")}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* Evening Shift */}
        <TabsContent value="evening">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {eveningSemesters
              .filter((sem) => sem.id % 2 === 0)
              .map((sem) => (
                <Card
                  onClick={() => setSelectedSemester(sem)}
                  key={`evening-${sem.id}`}
                  className={`bg-gradient-to-r ${sem.gradient} text-white shadow-md hover:scale-105 transition duration-300 cursor-pointer`}
                >
                  <CardHeader className="flex flex-col items-center justify-center">
                    <div className="text-4xl">{sem.icon}</div>
                    <CardTitle className="text-lg mt-2">{sem.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm">Shift: Evening</p>
                    <p className="text-sm">Groups: {sem.group.join(", ")}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {
        selectedSemester && (
          <div className="mt-10">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">Select Shift</h1>
            <div className="flex gap-5 py-10 w-full">


              {selectedSemester?.shift?.map((shiftName, index) => {
                // Group A for first shift, Group B for second shift
                const groupName = index === 0 ? "A" : "B";

                return (
                  <Card
                    key={`shift-${shiftName}-${index}`}
                    className={`bg-gradient-to-r ${selectedSemester.gradient} text-white shadow-md hover:scale-105 transition w-full duration-300 cursor-pointer`}
                  >
                    <CardHeader className="flex flex-col items-center justify-center">
                      <div className="text-4xl">{selectedSemester.icon}</div>
                      <CardTitle className="text-lg mt-2">{selectedSemester.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm">Shift: {shiftName}</p>
                      <p className="text-sm">Group: {groupName}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

          </div>
        )
      }

    </div>
  )
}

export default SemesterList