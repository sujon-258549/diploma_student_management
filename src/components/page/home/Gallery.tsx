"use client";
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FaLaptopCode, FaBolt, FaMicrochip, FaBuilding, FaCogs, FaPlug, FaHeartbeat } from 'react-icons/fa';

interface TDepartment {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const departments: TDepartment[] = [
  { id: "CMT", name: "Computer", icon: <FaLaptopCode size={50} /> },
  { id: "ET", name: "Electrical", icon: <FaBolt size={50} /> },
  { id: "ELT", name: "Electronics", icon: <FaMicrochip size={50} /> },
  { id: "CT", name: "Civil", icon: <FaBuilding size={50} /> },
  { id: "MT", name: "Mechanical", icon: <FaCogs size={50} /> },
  { id: "PT", name: "Power", icon: <FaPlug size={50} /> },
  { id: "EMT", name: "Electromedical", icon: <FaHeartbeat size={50} /> },
];

const AllDepartmentData = [
  {
    name: "CMT",
    image: [
      { image: '/CMT1.png', type: "developer" },
      { image: '/CMT2.png', type: "designer" },
      { image: '/CMT3.png', type: "hardwork" },
      { image: '/CMT4.png', type: "software" },
      { image: '/CMT5.png', type: "developer" },
      { image: '/CMT6.png', type: "designer" },
      { image: '/CMT7.png', type: "hardwork" },
      { image: '/CMT8.png', type: "software" },
      { image: '/CMT9.png', type: "developer" },
      { image: '/CMT10.png', type: "designer" },
    ],
  }
]



const Gallery = () => {
  const [category, setCategory] = useState<string>(departments[0].id);
  const [images, setImages] = useState<{ image: string, type: string }[]>([]);
  console.log(images)
  useEffect(() => {
    const matchedDepartment = AllDepartmentData.find(d => d.name === category);
    setImages(matchedDepartment?.image || [])
    // fallback empty array
  }, [category]);


  return (
    <div className="container mx-auto px-5">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-6xl font-extrabold text-cyan-400 mb-4">
          Departments of Image Gallery
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our diverse range of technical departments offering cutting-edge education
        </p>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue={category} className="">
        {/* Tab Buttons */}
        <TabsList className="pb-16 md:pb-28 pt-5 px-12 lg:pb-12 lg:pt-1.5 lg:px-2 flex gap-3  flex-wrap overflow-y-auto md:overflow-y-hidden  mx-auto overflow-x-auto scrollbar-hide max-w-full">
          {/* <TabsList className="flex flex-wrap md:flex-nowrap gap-2 py-4 px-2 mx-auto overflow-x-auto scrollbar-hide max-w-full"></TabsList> */}
          {departments.map((department) => (
            <TabsTrigger
              key={department.id}
              value={department.id}
              onClick={() => setCategory(department.id)}
              className="text-white bg-cyan-900  data-[state=active]:bg-cyan-500 py-5 px-4"
            >
              {department.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Content */}
        {departments?.map((department) => (
          <TabsContent key={department.id} value={department.id}>
            <div className=" text-white text-center">
              <h3 className='text-3xl flex justify-center items-center md:text-4xl font-bold text-cyan-500 my-10 lg:text-5xl'>


                <span >  {department.icon}</span>{department.name} Department</h3>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {
                  images?.length > 0 ? (
                    images.map((image, index) => (
                      <div className="relative group h-[250px] w-full rounded-md overflow-hidden shadow-lg" key={index}>
                        {/* Image */}
                        <img
                          src={image.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay (optional) */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition duration-300"></div>

                        {/* Watermark Text */}
                        <p className="absolute bottom-2 right-2 text-white text-xs opacity-60 z-10 select-none">
                         {image.type}
                        </p>
                      </div>

                    ))
                  ) : (
                    <div className="col-span-full flex flex-col items-center justify-center p-10 bg-gray-800 rounded-md shadow-md text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <p className="text-lg font-semibold">No Images Available</p>
                    </div>
                  )
                }
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Gallery;
