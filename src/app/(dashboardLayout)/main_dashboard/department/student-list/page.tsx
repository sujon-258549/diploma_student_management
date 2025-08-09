

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
    console.log(departmentName)

const student = await studentData()
console.log(student)

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Student List</h1>
            <p>Semester: {semester}</p>
            <p>Group: {group}</p>
            <p>Shift: {shift}</p>
            <p>departmentName: {departmentName}</p>
        </div>
    );
};

export default StudentList;
