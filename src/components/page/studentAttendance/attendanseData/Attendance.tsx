import React from "react";

interface AttendanceProps {
    subject: string;
    group: string;
    semester: string;
    departmentName: string;
    shift: string;
    students: any[]; // You can type this better if you know the student structure
}

const Attendance: React.FC<AttendanceProps> = ({
    subject,
    group,
    semester,
    departmentName,
    shift,
    students
}) => {
    return (
        <div>
            <h2>Attendance for {subject}</h2>
            <p>
                <strong>Group:</strong> {group} | <strong>Semester:</strong> {semester} |{" "}
                <strong>Department:</strong> {departmentName} | <strong>Shift:</strong> {shift}
            </p>

            <h3>Student List</h3>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student.name} {student.rollNo}</li>
                ))}
            </ul>
        </div>
    );
};

export default Attendance;
