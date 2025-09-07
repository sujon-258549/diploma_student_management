"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminDashBoard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data
  const studentData = [
    { id: 1, name: 'John Smith', program: 'Computer Science', status: 'Active', progress: 75, grade: 'A', attendance: '92%' },
    { id: 2, name: 'Emma Johnson', program: 'Business Administration', status: 'Active', progress: 82, grade: 'A-', attendance: '95%' },
    { id: 3, name: 'Michael Brown', program: 'Electrical Engineering', status: 'Probation', progress: 45, grade: 'C', attendance: '78%' },
    { id: 4, name: 'Sarah Davis', program: 'Graphic Design', status: 'Active', progress: 90, grade: 'A+', attendance: '98%' },
    { id: 5, name: 'Robert Wilson', program: 'Mechanical Engineering', status: 'Inactive', progress: 30, grade: 'D', attendance: '65%' },
    { id: 6, name: 'Lisa Anderson', program: 'Computer Science', status: 'Active', progress: 88, grade: 'A', attendance: '94%' },
    { id: 7, name: 'James Wilson', program: 'Electrical Engineering', status: 'Active', progress: 79, grade: 'B+', attendance: '89%' },
    { id: 8, name: 'Emily Clark', program: 'Business Administration', status: 'Active', progress: 91, grade: 'A+', attendance: '97%' },
  ];

  const statsData = {
    totalStudents: 1245,
    activeStudents: 1120,
    newEnrollments: 42,
    completionRate: '78%',
    femaleStudents: 580,
    maleStudents: 665
  };

  const programsData = [
    { name: 'Computer Science', enrollment: 320, color: '#0ea5e9' },
    { name: 'Business Administration', enrollment: 280, color: '#06b6d4' },
    { name: 'Electrical Engineering', enrollment: 195, color: '#0891b2' },
    { name: 'Mechanical Engineering', enrollment: 172, color: '#0e7490' },
    { name: 'Graphic Design', enrollment: 148, color: '#155e75' },
  ];

  const upcomingEvents = [
    { title: 'Annual Tech Symposium', date: '15 Oct 2023', time: '10:00 AM', location: 'Main Auditorium' },
    { title: 'Industry Interaction Meet', date: '22 Oct 2023', time: '2:00 PM', location: 'Conference Hall' },
    { title: 'Placement Training Workshop', date: '28 Oct 2023', time: '9:30 AM', location: 'Lab Building' },
    { title: 'Project Exhibition', date: '5 Nov 2023', time: '11:00 AM', location: 'Exhibition Center' },
  ];

  const recentActivities = [
    { action: 'New student enrollment', details: 'Sarah Johnson enrolled in Graphic Design', time: '2 hours ago', icon: 'user-graduate', color: 'green' },
    { action: 'Grades updated', details: 'Mid-term grades have been posted', time: 'Yesterday', icon: 'file-invoice', color: 'blue' },
    { action: 'New report generated', details: 'Program completion report for Q3', time: '2 days ago', icon: 'chart-line', color: 'purple' },
    { action: 'Faculty meeting', details: 'Monthly faculty meeting completed', time: '3 days ago', icon: 'users', color: 'cyan' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-slate-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <div className="bg-cyan-500 p-2 rounded-lg mr-3">
                <i className="fas fa-graduation-cap text-white"></i>
              </div>
              Polytechnic Institute Dashboard
            </div>
          </motion.h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-slate-400"></i>
              </div>
              <input 
                type="text" 
                className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
                placeholder="Search..." 
              />
            </div>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg flex items-center">
              <i className="fas fa-plus mr-2"></i> New Student
            </button>
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <i className="fas fa-bell text-slate-600"></i>
              </button>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-2">
                <span className="text-cyan-600 font-medium">A</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">Admin User</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="px-6 pt-4">
        <div className="flex space-x-2 border-b border-slate-200">
          {['overview', 'students', 'courses', 'faculty', 'reports', 'settings'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${activeTab === tab ? 'bg-cyan-500 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <StatCard 
            title="Total Students" 
            value={statsData.totalStudents} 
            icon="users" 
            color="cyan" 
            change="+5% from last month" 
          />
          <StatCard 
            title="Active Students" 
            value={statsData.activeStudents} 
            icon="user-check" 
            color="green" 
            change="+3% from last month" 
          />
          <StatCard 
            title="New Enrollments" 
            value={statsData.newEnrollments} 
            icon="user-plus" 
            color="blue" 
            change="+12% from last month" 
          />
          <StatCard 
            title="Completion Rate" 
            value={statsData.completionRate} 
            icon="graduation-cap" 
            color="purple" 
            change="+2% from last month" 
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Student Gender Distribution */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Student Gender Distribution</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="#f1f5f9" />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="transparent"
                    stroke="#0ea5e9" 
                    strokeWidth="10"
                    strokeDasharray="283 283"
                    strokeDashoffset={283 - (283 * statsData.maleStudents) / statsData.totalStudents}
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 283 - (283 * statsData.maleStudents) / statsData.totalStudents }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="transparent"
                    stroke="#ec4899" 
                    strokeWidth="10"
                    strokeDasharray="283 283"
                    strokeDashoffset={283 - (283 * statsData.femaleStudents) / statsData.totalStudents + 20}
                    initial={{ strokeDashoffset: 283 + 20 }}
                    animate={{ strokeDashoffset: 283 - (283 * statsData.femaleStudents) / statsData.totalStudents + 20 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-slate-700">Total</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-cyan-500 rounded mr-2"></div>
                <span className="text-sm text-slate-600">Male: {statsData.maleStudents}</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-pink-500 rounded mr-2"></div>
                <span className="text-sm text-slate-600">Female: {statsData.femaleStudents}</span>
              </div>
            </div>
          </motion.div>

          {/* Program Distribution */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-5 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Program Distribution</h3>
            <div className="space-y-4">
              {programsData.map((program, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">{program.name}</span>
                    <span className="text-sm font-medium text-slate-700">{program.enrollment} students</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <motion.div 
                      className="h-2.5 rounded-full" 
                      style={{ backgroundColor: program.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${(program.enrollment / 500) * 100}%` }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Student Table */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-800">Student List</h3>
              <button className="text-cyan-500 text-sm font-medium">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Program</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Grade</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {studentData.map((student, index) => (
                    <motion.tr 
                      key={student.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center">
                              <span className="text-cyan-600 font-medium">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-slate-900">{student.name}</div>
                            <div className="text-sm text-slate-500">ID: {student.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {student.program}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${student.status === 'Active' ? 'bg-green-100 text-green-800' : 
                            student.status === 'Probation' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                          <div 
                            className="bg-cyan-600 h-2.5 rounded-full" 
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">{student.progress}% complete</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-500">
                        {student.grade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-cyan-600 hover:text-cyan-900 mr-3">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    className="border-l-4 border-cyan-500 pl-4 py-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <h4 className="text-sm font-medium text-slate-800">{event.title}</h4>
                    <div className="flex items-center text-xs text-slate-500 mt-1">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-500 mt-1">
                      <i className="far fa-map-marker-alt mr-2"></i>
                      <span>{event.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <div className={`bg-${activity.color}-100 rounded-full p-2 mr-3`}>
                      <i className={`fas fa-${activity.icon} text-${activity.color}-600`}></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{activity.action}</p>
                      <p className="text-sm text-slate-500">{activity.details}</p>
                      <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon, color, change }) => {
  const colorClasses = {
    cyan: 'bg-cyan-100 text-cyan-600',
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <motion.div 
      className="bg-white overflow-hidden shadow-sm rounded-xl"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-5">
        <div className="flex items-center">
          <div className={`rounded-full p-3 ${colorClasses[color]}`}>
            <i className={`fas fa-${icon} text-lg`}></i>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <p className="text-2xl font-semibold text-slate-900">{value}</p>
            <p className="text-xs text-slate-400 mt-1">{change}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashBoard;