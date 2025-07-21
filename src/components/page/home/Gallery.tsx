import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
interface TDepartment {
  id: string,
  name: string
}
const departments = [
  { id: "CMT", name: "Computer" },
  { id: "ET", name: "Electrical" },
  { id: "ELT", name: "Electronics" },
  { id: "CT", name: "Civil" },
  { id: "MT", name: "Mechanical" },
  { id: "PT", name: "Power" },
  { id: "EMT", name: "Electromedical" }

];

const Gallery = () => {
  return (
    <div className='container mx-auto px-5'>
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-6xl font-extrabold text-cyan-400 mb-4">
          Departments of Image Gallery
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our diverse range of technical departments offering cutting-edge education
        </p>
      </div>
      <div>
        <Tabs defaultValue={departments[0].id} className="mx-auto max-w-2xl overflow-x-auto">
          <TabsList className='py-7 px-2'>
            {
              departments.map((department: TDepartment) => (
                <TabsTrigger className='data-[state=active]:text-white data-[state=active]:bg-cyan-500 py-5 px-4' key={department.id} value={department.id}>{department.name}</TabsTrigger>
              ))
            }

          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;