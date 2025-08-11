'use client';

import { useMemo } from 'react';

interface Student {
  id: string;
  name: string;
  rollNo?: string;
}

interface AttendanceStudent {
  id: string;
  studentId: string;
  isAttended: boolean;
  student: Student;
}

interface AttendanceRecord {
  createdAt: string | Date;
  id: string;
  date: string;
  students: AttendanceStudent[];
}

interface AttendanceProps {
  subject: string;
  group: string;
  semester: string;
  departmentName: string;
  shift: string;
  studentAttendance: AttendanceRecord[];
}

const Attendance: React.FC<AttendanceProps> = ({
  subject,
  group,
  semester,
  departmentName,
  shift,
  studentAttendance,
}) => {
  // Memoize derived data for performance
  const { dates, allStudents, sortedStudents } = useMemo(() => {
    // Extract all unique dates from records
    const uniqueDates = Array.from(
      new Set(
        studentAttendance.map(record =>
          new Date(record.createdAt).toISOString().split('T')[0]
        )
      )
    ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    // Collect all unique students across all records
    const studentsMap = new Map<string, Student>();
    studentAttendance.forEach(record => {
      record.students.forEach(attStudent => {
        if (!studentsMap.has(attStudent.student.id)) {
          studentsMap.set(attStudent.student.id, attStudent.student);
        }
      });
    });

    // Convert to array and sort by roll number
    const studentsArray = Array.from(studentsMap.values());
    const sorted = [...studentsArray].sort((a, b) =>
      (a.rollNo || 'ZZZ').localeCompare(b.rollNo || 'ZZZ')
    );

    return {
      dates: uniqueDates,
      allStudents: studentsArray,
      sortedStudents: sorted,
    };
  }, [studentAttendance]);

  // Helper to find attendance status for a student on a given date
  const getAttendanceStatus = (studentId: string, date: string) => {
    const record = studentAttendance.find(r => {
      const recordDate = new Date(r.createdAt).toISOString().split('T')[0];
      return recordDate === date;
    });

    if (!record) return null;

    const studentRecord = record.students.find(s => s.studentId === studentId);
    return studentRecord ? studentRecord.isAttended : null;
  };

  // Format date for display
  const formatDateHeader = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      day: date.getDate().toString(),
      year: date.toLocaleDateString('en-US', { year: '2-digit' }),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0),
    };
  };

  return (
    <div className="text-gray-100 p-4 bg-cyan-700 rounded-lg shadow-lg">
      <header className="mb-6">
        <h1 className="text-xl font-bold text-white mb-1">
          Attendance for <span className="text-blue-300">{subject}</span>
        </h1>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
          <span>
            <strong className="font-semibold text-gray-400">Group:</strong> {group}
          </span>
          <span>
            <strong className="font-semibold text-gray-400">Semester:</strong> {semester}
          </span>
          <span>
            <strong className="font-semibold text-gray-400">Department:</strong> {departmentName}
          </span>
          <span>
            <strong className="font-semibold text-gray-400">Shift:</strong> {shift}
          </span>
        </div>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-4 text-white">
          Student Attendance Records
        </h2>

        <div className="border border-gray-700 rounded-lg overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800">
                <th className="px-4 py-2 text-left">
                  <span className="font-medium text-gray-300">Student</span>
                </th>
                {dates.map(date => {
                  const { month, day, year, weekday } = formatDateHeader(date);
                  return (
                    <th
                      key={date}
                      className="px-1 py-2 text-center border-l border-gray-700"
                    // title={formatDate(date)}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-400">{weekday}</span>
                        <span className="text-xs font-medium">{day}</span>
                        <span className="text-[10px] text-gray-400">
                          {month}/{year}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {sortedStudents.map((student, index) => (
                <tr
                  key={student.id}
                  className={`hover:bg-gray-800/70 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-900/50'}`}
                >
                  <td className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className="font-medium text-white text-sm truncate max-w-[120px]">
                        {student.name}
                      </span>
                      {student.rollNo && (
                        <span className="text-xs text-gray-400">
                          {student.rollNo}
                        </span>
                      )}
                    </div>
                  </td>
                  {dates.map(date => {
                    const status = getAttendanceStatus(student.id, date);
                    return (
                      <td
                        key={`${student.id}-${date}`}
                        className="px-1 py-2 text-center border-l border-gray-700"
                      >
                        {status !== null ? (
                          <span
                            className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${status ? 'bg-green-600/90' : 'bg-red-600/90'} text-white text-xs font-medium`}
                            aria-label={status ? 'Present' : 'Absent'}
                          >
                            {status ? 'P' : 'A'}
                          </span>
                        ) : (
                          <span
                            className="text-gray-500 text-xs"
                            aria-label="No record"
                          >
                            &mdash;
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 rounded-full bg-green-600/90"
              aria-hidden="true"
            ></span>
            <span className="text-xs">Present</span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 rounded-full bg-red-600/90"
              aria-hidden="true"
            ></span>
            <span className="text-xs">Absent</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-xs" aria-hidden="true">
              &mdash;
            </span>
            <span className="text-xs">No record</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attendance;