import Student from '@/components/page/studentAttendance/studentList/Student';
import { studentData } from '@/server/student/studentServices';
import React from 'react';

type PageProps = {
    params: {
        semesterName: string;
        groupName: string;
        shiftName: string;
        departmentName: string;
    };
};

const StudentList = async ({
    searchParams,
}: {
    searchParams: Promise<{ semester: string, group: string, shift: string, departmentName: string }>;
}) => {
    const { semester, group, shift, departmentName } = await searchParams;
    const { data } = await studentData();

    return (
        <div className="min-h-screen bg-gray-50  rounded-md">
            {/* Professional Top Bar */}
            <div className="rounded-t-md bg-gradient-to-r from-cyan-600 to-cyan-800 text-white shadow-lg">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">Student Attendance</h1>
                            <p className="text-blue-100 mt-1">
                                {departmentName} • {semester} • {group} • {shift}
                            </p>
                        </div>
                        <div className="">
                            <div className="flex items-center space-x-4">
                                <div className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                                    {data?.length || 0} Students
                                </div>
                                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                                    Export
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-8 ">
                <div className="bg-white rounded-lg  overflow-hidden">
                    <Student students={data} />
                </div>
            </div>
        </div>
    );
};

export default StudentList;
