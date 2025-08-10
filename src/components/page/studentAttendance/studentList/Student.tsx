"use client"

import { useState } from 'react';
import Swal from 'sweetalert2';
import { FiSend } from 'react-icons/fi';
import { createAttendance } from '@/server/attendance/attendanceServices';
import { useRouter } from 'next/navigation';

type Student = {
    id: string;
    name: string;
    department: string;
    rollNo: string;
    status?: 'active' | 'inactive';
};

type StudentListProps = {
    students: Student[];
    subject: string;
    teacherId: string;
    group: string
    semester: string
    departmentName: string
    shift: string
};


const StudentList = ({
    students,
    subject,
    teacherId,
    group,
    semester,
    departmentName,
    shift
}: StudentListProps) => {
    const [studentStatus, setStudentStatus] = useState<Record<string, boolean>>(
        students.reduce((acc, student) => ({
            ...acc,
            [student.id]: student.status === 'inactive'
        }), {})
    );

    const handleStatusChange = (studentId: string) => {
        setStudentStatus(prev => ({
            ...prev,
            [studentId]: !prev[studentId]
        }));
    };
    const router = useRouter()
    const handleSubmit = async () => {
        const { isConfirmed } = await Swal.fire({
            title: "Confirm Attendance Submission",
            text: "Are you sure you want to submit this attendance record?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#0ea5e9",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Yes, submit it!",
            cancelButtonText: "Cancel",
        });

        if (isConfirmed) {
            const attendanceData = {
                students: students.map(student => ({
                    studentId: student.id,
                    isAttended: studentStatus[student.id] || false
                })),
                subject,
                teacherId,
                group,
                semester,
                departmentName,
                shift
            };

            try {
                // Here you would typically make an API call
                console.log("Submitting attendance:", attendanceData);
                const res = await createAttendance(attendanceData)
                console.log(res)
                if (res.success === false) {
                    Swal.fire({
                        title: "Error!",
                        text: res.message || "Failed to record attendance. Please try again.",
                        icon: "error",
                        confirmButtonText: "OK"
                    });

                } else {
                    Swal.fire({
                        title: "Success!",
                        text: "Attendance has been successfully recorded.",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false
                    });
                    router.push(`/main_dashboard/department/student-list/attendance-student-data?subject=${subject}&group=${group}&semester=${semester}&departmentName=${departmentName}&shift=${shift}`);
                }

            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to submit attendance. Please try again.",
                    icon: "error"
                });
            }
        }
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-12 bg-cyan-800 text-white p-3 rounded-lg shadow">
                <div className="col-span-6 md:col-span-4 font-semibold">Student Name</div>
                <div className="col-span-3 md:col-span-2 font-semibold">Roll No</div>
                <div className="col-span-3 md:col-span-4 font-semibold">Department</div>
                <div className="col-span-6 md:col-span-2 font-semibold text-right">Status</div>
            </div>

            {students?.map((student) => (
                <div
                    key={student.id}
                    className="grid grid-cols-12 items-center bg-cyan-700/90 hover:bg-cyan-700 p-3 rounded-lg shadow transition-colors"
                >
                    <div className="col-span-6 md:col-span-4 text-white truncate">
                        {student.name}
                    </div>
                    <div className="col-span-3 md:col-span-2 text-white">
                        {student.rollNo}
                    </div>
                    <div className="col-span-3 md:col-span-4 text-white/90 text-sm truncate">
                        {student.department}
                    </div>
                    <div className="col-span-6 md:col-span-2 flex justify-end">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={studentStatus[student.id] || false}
                                onChange={() => handleStatusChange(student.id)}
                                aria-label={`Toggle status for ${student.name}`}
                            />
                            <div className={`
                w-14 h-7 rounded-full 
                peer peer-checked:bg-cyan-300 
                bg-gray-600 
                transition-colors duration-300
                after:content-[''] 
                after:absolute 
                after:top-0.5 after:left-0.5 
                after:bg-white 
                after:rounded-full 
                after:h-6 after:w-6 
                after:transition-all 
                after:duration-300
                peer-checked:after:translate-x-7
              `} />
                            <span className="ml-2 text-sm font-medium text-white">
                                {studentStatus[student.id] ? 'Present' : 'Absent'}
                            </span>
                        </label>
                    </div>
                </div>
            ))}

            <div className="flex justify-end pt-6">
                <button
                    onClick={handleSubmit}
                    className="relative inline-flex cursor-pointer items-center justify-center h-12 px-6 overflow-hidden font-medium text-white transition-all rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 shadow-lg hover:shadow-cyan-500/20 active:scale-95"
                >
                    Submit Attendance
                    <FiSend className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default StudentList;