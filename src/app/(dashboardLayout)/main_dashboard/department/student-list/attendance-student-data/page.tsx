import Attendance from "@/components/page/studentAttendance/attendanseData/Attendance";
import { getAttendance } from "@/server/attendance/attendanceServices";

const AttendanceStudentData = async ({ searchParams }: {
    searchParams: Promise<{
        subject: string;
        group: string;
        semester: string;
        departmentName: string;
        shift: string;
    }>;
}) => {
    const { subject, group, semester, departmentName, shift } = await searchParams;
    console.log(subject, group, semester, departmentName, shift);


    const { data:studentAttendance } = await getAttendance();


    return (
        <div>
            <Attendance
                subject={subject}
                group={group}
                semester={semester}
                departmentName={departmentName}
                shift={shift}
                studentAttendance={studentAttendance}
            />
        </div>
    );
};

export default AttendanceStudentData;
