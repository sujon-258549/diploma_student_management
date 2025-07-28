

import React from 'react';

type PageProps = {
    params: {
        semesterName: string;
        groupName: string;
        shiftName: string;
    };
};

const StudentList = async ({
    searchParams,
}: {
    searchParams: Promise<{ semester: string, group: string, shift: string }>;
}) => {
    const { semester, group, shift } = await searchParams;



    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Student List</h1>
            <p>Semester: {semester}</p>
            <p>Group: {group}</p>
            <p>Shift: {shift}</p>
        </div>
    );
};

export default StudentList;
