import { studentSingleData } from '@/server/student/studentServices';
import React from 'react';

const StudentProfile = async({params}:{params: Promise<{id:string}>}) => {
    const {id} = await params;
    const {data} = await studentSingleData(id);
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-800 mb-8">Student ID Card</h1>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="md:flex">
                        {/* ID Card Front */}
                        <div className="md:w-2/3 p-6 border-r border-gray-200">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-indigo-900">UNIVERSITY OF TECHNOLOGY</h2>
                                    <p className="text-sm text-gray-600">Official Student Identification</p>
                                </div>
                                <div className="bg-indigo-700 text-white text-xs px-2 py-1 rounded">
                                    Valid: 2023-2025
                                </div>
                            </div>
                            
                            <div className="flex mb-6">
                                <div className="mr-6">
                                    <div className="w-32 h-40 bg-indigo-100 border border-indigo-300 rounded-lg flex items-center justify-center text-gray-500 mb-2">
                                        {data.photoUrl ? (
                                            <img src={data.photoUrl} alt="Student" className="w-full h-full object-cover rounded-lg" />
                                        ) : (
                                            <span>Photo Not Available</span>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <div className="h-1 w-16 bg-indigo-700 mx-auto mb-1"></div>
                                        <p className="text-xs text-gray-500">Authorized Signature</p>
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">{data.name}</h3>
                                        <p className="text-sm text-gray-600">{data.department} Department</p>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <p className="text-xs text-gray-500">Student ID</p>
                                            <p className="text-sm font-medium">{data.registrationNo}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Roll No</p>
                                            <p className="text-sm font-medium">{data.rollNo}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Semester</p>
                                            <p className="text-sm font-medium">{data.semester}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Blood Group</p>
                                            <p className="text-sm font-medium">{data.bloodGroup}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-2">
                                        <p className="text-xs text-gray-500">Email</p>
                                        <p className="text-sm font-medium break-words">{data.email}</p>
                                    </div>
                                    
                                    <div>
                                        <p className="text-xs text-gray-500">Phone</p>
                                        <p className="text-sm font-medium">{data.phoneNumber}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                                <div className="text-center">
                                    <div className="h-8 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md flex items-center justify-center text-white text-xs font-bold mx-auto">
                                        STUDENT ID
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-8 bg-gray-200 rounded-md mx-auto flex items-center justify-center">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-6 bg-indigo-600"></div>
                                            <div className="w-2 h-6 bg-indigo-600"></div>
                                            <div className="w-2 h-6 bg-indigo-600"></div>
                                            <div className="w-2 h-6 bg-indigo-600"></div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Barcode</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* ID Card Back */}
                        <div className="md:w-1/3 p-6 bg-gradient-to-b from-indigo-800 to-indigo-900 text-white">
                            <h3 className="text-lg font-bold mb-4 text-center">Emergency & Academic Details</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs opacity-75">Emergency Contact</p>
                                    <p className="text-sm font-medium">{data.emergencyContact}</p>
                                </div>
                                
                                <div>
                                    <p className="text-xs opacity-75">Address</p>
                                    <p className="text-sm font-medium">{data.presentAddress}</p>
                                </div>
                                
                                <div>
                                    <p className="text-xs opacity-75">Date of Birth</p>
                                    <p className="text-sm font-medium">{new Date(data.dateOfBirth).toLocaleDateString()}</p>
                                </div>
                                
                                <div className="pt-4 border-t border-indigo-700">
                                    <p className="text-xs opacity-75">Academic Information</p>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>CGPA:</span>
                                            <span className="font-medium">{data.cgpa}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Class X GPA:</span>
                                            <span className="font-medium">{data.classTenGPA}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-6">
                                    <div className="text-xs opacity-75 mb-2">In case of emergency, please contact the university</div>
                                    <div className="text-xs">+1 (800) 123-4567</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                        Download ID Card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;