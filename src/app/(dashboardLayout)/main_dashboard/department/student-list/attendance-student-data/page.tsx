import Attendance from "@/components/page/studentAttendance/attendanseData/Attendance";
import { studentData } from "@/server/student/studentServices";

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

    const { data } = await studentData();

    return (
        <div>
            <Attendance
                subject={subject}
                group={group}
                semester={semester}
                departmentName={departmentName}
                shift={shift}
                students={data}
            />
        </div>
    );
};

export default AttendanceStudentData;
