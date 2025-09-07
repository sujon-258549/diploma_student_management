import { studentSingleData } from '@/server/student/studentServices';
import React from 'react';

const StudentIDCard = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const { data } = await studentSingleData(id);
    
    const studentData = {
        name: data?.name,
        registrationNo: data?.registrationNo,
        rollNo: data?.rollNo,
        department: data?.department,
        semester: data?.semester,
        bloodGroup: data?.bloodGroup,
        gender: data?.gender,
        email: data?.email,
        phoneNumber: data?.phoneNumber,
        cgpa: data?.cgpa,
        classTenGPA: data?.classTenGPA
    };

    // Format blood group
    const formatBloodGroup = (bloodGroup : string) => {
        if (!bloodGroup) return 'N/A';
        return bloodGroup.replace('_POS', '+').replace('_NEG', '-');
    };

    // Format gender
    const formatGender = (gender : string) => {
        if (!gender) return 'N/A';
        return gender === 'MALE' ? 'Male' : 'Female';
    };

    return (
        <div className="flex justify-center py-14 items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-5">
            <div className="w-full max-w-md bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 relative">
                {/* Flow design elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 via-cyan-100/10 to-cyan-300/20"></div>
                
                {/* Card content */}
                <div className="relative z-10 p-6">
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-full flex items-center justify-center text-white shadow-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5m9-5v6"></path>
                            </svg>
                        </div>
                    </div>
                    
                    {/* University header */}
                    <div className="text-center mb-6 pb-4 border-b border-cyan-300">
                        <h1 className="text-xl font-bold text-cyan-900 tracking-wide">CYAN UNIVERSITY</h1>
                        <p className="text-xs text-cyan-700 mt-1 tracking-wider">OFFICIAL STUDENT IDENTIFICATION</p>
                    </div>
                    
                    {/* Student info */}
                    <div className="flex mb-6">
                        {/* Photo */}
                        <div className="mr-5 flex-shrink-0">
                            <div className="w-24 h-28 bg-gradient-to-br from-cyan-100 to-cyan-200 border-2 border-cyan-400 rounded-lg flex items-center justify-center text-cyan-700">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1">
                            <h2 className="text-lg font-bold text-cyan-900">{studentData.name || "Student Name"}</h2>
                            <p className="text-xs text-cyan-700 mb-3">
                                ID: {studentData.registrationNo || "N/A"} | Roll: {studentData.rollNo || "N/A"}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-[10px] font-semibold text-cyan-600 uppercase tracking-wide">Department</p>
                                    <p className="text-xs font-medium text-cyan-900">{studentData.department || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold text-cyan-600 uppercase tracking-wide">Semester</p>
                                    <p className="text-xs font-medium text-cyan-900">{studentData.semester || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold text-cyan-600 uppercase tracking-wide">Blood Group</p>
                                    <p className="text-xs font-medium text-cyan-900">{formatBloodGroup(studentData.bloodGroup)}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold text-cyan-600 uppercase tracking-wide">Gender</p>
                                    <p className="text-xs font-medium text-cyan-900">{formatGender(studentData.gender)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Academic info */}
                    <div className="mb-6 pt-4 border-t border-dashed border-cyan-300">
                        <h3 className="text-xs font-bold text-cyan-700 text-center uppercase tracking-wider mb-3">Academic Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-cyan-100/50 rounded-lg p-3 text-center">
                                <p className="text-[10px] font-semibold text-cyan-600 uppercase tracking-wide">CGPA</p>
                                <p className="text-sm font-bold text-cyan-900">{studentData.cgpa || "N/A"}</p>
                            </div>
                            <div className="bg-cyan-100/50 rounded-lg p-3 text-center">
                                <p className="text-[10px] font-semibold text-cyan-600 uppercase tracking-wide">Class X GPA</p>
                                <p className="text-sm font-bold text-cyan-900">{studentData.classTenGPA || "N/A"}</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex justify-between items-center pt-4 border-t border-dashed border-cyan-300">
                        {/* Barcode */}
                        <div className="w-20 h-10 bg-gradient-to-r from-cyan-600 via-cyan-600/80 to-cyan-600 rounded-md"></div>
                        
                        {/* Signature */}
                        <div className="text-center">
                            <div className="w-20 h-0.5 bg-cyan-600 mx-auto mb-1"></div>
                            <p className="text-[10px] text-cyan-600">Authorized Signature</p>
                        </div>
                    </div>
                    
                    {/* Validity */}
                    <div className="text-center mt-4">
                        <div className="inline-block bg-cyan-100/50 px-4 py-1 rounded-full">
                            <p className="text-xs font-semibold text-cyan-700">Valid: 2023 - 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentIDCard;