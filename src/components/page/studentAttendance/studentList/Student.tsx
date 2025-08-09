


"use client"

import { useState } from 'react';

type Student = {
    id: string;
    name: string;
    department: string
    status?: 'active' | 'inactive';
};

type StudentListProps = {
    students: Student[];
};

const StudentList = ({ students }: StudentListProps) => {
    const [studentStatus, setStudentStatus] = useState<Record<string, boolean>>(
        students.reduce((acc, student) => ({
            ...acc,
            [student.id]: student.status === 'inactive'
        }), {})
    );
    console.log(studentStatus)

    const handleStatusChange = (studentId: string) => {
        setStudentStatus(prev => ({
            ...prev,
            [studentId]: !prev[studentId]
        }));
        // Here you would typically make an API call to update the status
    };

    return (
        <div className="space-y-4">
            {students?.map((student) => (
                <div
                    key={student.id}
                    className="flex items-center justify-between p-4 bg-cyan-700 rounded-lg shadow  transition-colors"
                >
                    <div className='flex'>
                        <h5 className="text-lg w-50 font-medium text-white">
                            {student.name}
                        </h5>
                        <h5 className="text-lg font-medium text-left text-white">

                            {student.department}
                        </h5>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={studentStatus[student.id] || false}
                            onChange={() => handleStatusChange(student.id)}
                            aria-label={`Toggle status for ${student.name}`}
                        />
                        <div className={`
              w-16 h-8 rounded-full 
              peer peer-checked:bg-cyan-300 
              bg-gray-600 
              transition-colors duration-300
              after:content-[''] 
              after:absolute 
              after:top-1 after:left-1 
              after:bg-white 
              after:rounded-full 
              after:h-6 after:w-6 
              after:transition-all 
              after:duration-300
              peer-checked:after:translate-x-8
            `} />
                        <span className="ml-3 text-sm font-medium text-gray-300">
                            {studentStatus[student.id] ? 'Active' : 'Inactive'}
                        </span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default StudentList;