import React from 'react';
import { Book, ClipboardList, FileText, Clock, Award, Download, Building, Users, Laptop, GraduationCap } from 'lucide-react';

const ComputerPage = () => {
  // Department Information
   const departmentInfo = {
    name: "Computer Science & Technology",
    code: "66",
    institute: "Rangpur Polytechnic Institute",
    establishment: "2005",
    head: "Md. Abdul Karim",
    location: "R.K. Road, Rangpur",
    labs: ["Programming Lab", "Hardware Lab", "Networking Lab", "Multimedia Lab"],
    contact: {
      phone: "+880521-62451",
      email: "cse@rpi.edu.bd"
    },
    mission: "To produce skilled computer technicians with practical knowledge and ethical values to meet industry demands.",
    vision: "To become a center of excellence in technical education for computer science and information technology."
  };

  // Complete 8-semester data
  const semesters = [
    {
      semester: "1st Semester",
      totalPeriod: 35,
      ratio: "38.2% : 61.8%",
      subjects: [
        { code: "21011", name: "Engineering Drawing", theory: "-", practical: "6", credit: "2", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "50", final: "50", total: "100" },
          grandTotal: "100"
        },
        { code: "25711", name: "Bangla-I", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "25712", name: "English-I", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "25911", name: "Mathematics-I", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "25912", name: "Physics-I", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "26611", name: "Computer Office Application", theory: "-", practical: "6", credit: "2", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "50", final: "50", total: "100" },
          grandTotal: "100"
        },
        { code: "26711", name: "Basic Electricity", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        }
      ],
      totals: {
        theory: "13", practical: "21", credit: "20",
        theoryMarks: { cont: "260", final: "390", total: "650" },
        practicalMarks: { cont: "175", final: "175", total: "350" },
        grandTotal: "1000"
      }
    },
    {
      semester: "2nd Semester",
      totalPeriod: 34,
      ratio: "40.0% : 60.0%",
      subjects: [
        { code: "25721", name: "Bangla-II", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "25722", name: "English-II", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "25812", name: "Physical Education & Life skills Development", theory: "-", practical: "3", credit: "1", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "50"
        },
        { code: "25921", name: "Mathematics-II", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "25922", name: "Physics-II", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "26621", name: "Python Programming", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26622", name: "Computer Graphics Design-I", theory: "-", practical: "6", credit: "2", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "50", final: "50", total: "100" },
          grandTotal: "100"
        },
        { code: "26811", name: "Basic Electronics", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        }
      ],
      totals: {
        theory: "14", practical: "21", credit: "21",
        theoryMarks: { cont: "280", final: "420", total: "700" },
        practicalMarks: { cont: "175", final: "175", total: "350" },
        grandTotal: "1050"
      }
    },
    {
      semester: "3rd Semester",
      totalPeriod: 35,
      ratio: "40.0% : 60.0%",
      subjects: [
        { code: "25811", name: "Social Science", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "25913", name: "Chemistry", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "25931", name: "Mathematics-III", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "26631", name: "Application Development Using Python", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26632", name: "Computer Graphics Design-II", theory: "-", practical: "3", credit: "1", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "50"
        },
        { code: "26633", name: "IT Support Services", theory: "2", practical: "6", credit: "4", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "50", final: "50", total: "100" },
          grandTotal: "200"
        },
        { code: "26831", name: "Digital Electronics-I", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        }
      ],
      totals: {
        theory: "14", practical: "21", credit: "21",
        theoryMarks: { cont: "280", final: "420", total: "700" },
        practicalMarks: { cont: "175", final: "175", total: "350" },
        grandTotal: "1050"
      }
    },
    {
      semester: "4th Semester",
      totalPeriod: 35,
      ratio: "40.0% : 60.0%",
      subjects: [
        { code: "25831", name: "Business Communication", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "26641", name: "Java Programming", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26642", name: "Data Structure & Algorithm", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26643", name: "Computer Peripherals & Interfacing", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "26644", name: "Web Design & Development-I", theory: "1", practical: "6", credit: "3", 
          theoryMarks: { cont: "20", final: "30", total: "50" }, 
          practicalMarks: { cont: "50", final: "50", total: "100" },
          grandTotal: "150"
        },
        { code: "26841", name: "Digital Electronics-II", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "29041", name: "Environmental Studies", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        }
      ],
      totals: {
        theory: "14", practical: "21", credit: "21",
        theoryMarks: { cont: "280", final: "420", total: "700" },
        practicalMarks: { cont: "175", final: "175", total: "350" },
        grandTotal: "1050"
      }
    },
    {
      semester: "5th Semester",
      totalPeriod: 34,
      ratio: "38.2% : 61.8%",
      subjects: [
        { code: "25841", name: "Accounting", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "26651", name: "Application Development Using Java", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26652", name: "Web Design & Development-II", theory: "1", practical: "6", credit: "3", 
          theoryMarks: { cont: "20", final: "30", total: "50" }, 
          practicalMarks: { cont: "50", final: "50", total: "100" },
          grandTotal: "150"
        },
        { code: "26653", name: "Computer Architecture & Microprocessor", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "26654", name: "Data Communication", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "26655", name: "Operating System", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26656", name: "Project Work-I", theory: "-", practical: "3", credit: "1", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "50"
        }
      ],
      totals: {
        theory: "13", practical: "21", credit: "20",
        theoryMarks: { cont: "260", final: "390", total: "650" },
        practicalMarks: { cont: "175", final: "175", total: "350" },
        grandTotal: "1000"
      }
    },
    {
      semester: "6th Semester",
      totalPeriod: 34,
      ratio: "38.2% : 61.8%",
      subjects: [
        { code: "25851", name: "Principles of Marketing", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "25852", name: "Industrial Management", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "26661", name: "Database Management System", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26662", name: "Computer Networking", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26663", name: "Sensor & IoT System", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26664", name: "Microcontroller Based System Design & Development", theory: "2", practical: "6", credit: "4", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "50", final: "50", total: "100" },
          grandTotal: "200"
        },
        { code: "26665", name: "Surveillance Security System", theory: "1", practical: "3", credit: "2", 
          theoryMarks: { cont: "20", final: "30", total: "50" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "100"
        },
        { code: "26666", name: "Web Development Project", theory: "-", practical: "3", credit: "1", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "50"
        }
      ],
      totals: {
        theory: "13", practical: "21", credit: "20",
        theoryMarks: { cont: "260", final: "390", total: "650" },
        practicalMarks: { cont: "175", final: "175", total: "350" },
        grandTotal: "1000"
      }
    },
    {
      semester: "7th Semester",
      totalPeriod: 33,
      ratio: "36.4% : 63.6%",
      subjects: [
        { code: "25853", name: "Innovation & Entrepreneurship", theory: "2", practical: "-", credit: "2", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "-", final: "-", total: "-" },
          grandTotal: "100"
        },
        { code: "26671", name: "Digital Marketing Technique", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26672", name: "Network Administration & Services", theory: "3", practical: "3", credit: "4", 
          theoryMarks: { cont: "60", final: "90", total: "150" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "200"
        },
        { code: "26673", name: "Cyber Security & Ethics", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26674", name: "Apps Development Project", theory: "1", practical: "3", credit: "2", 
          theoryMarks: { cont: "20", final: "30", total: "50" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "100"
        },
        { code: "26675", name: "Multimedia & Animation", theory: "2", practical: "3", credit: "3", 
          theoryMarks: { cont: "40", final: "60", total: "100" }, 
          practicalMarks: { cont: "25", final: "25", total: "50" },
          grandTotal: "150"
        },
        { code: "26676", name: "Project Work-II", theory: "-", practical: "6", credit: "2", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "50", final: "50", total: "100" },
          grandTotal: "100"
        }
      ],
      totals: {
        theory: "12", practical: "21", credit: "19",
        theoryMarks: { cont: "240", final: "360", total: "600" },
        practicalMarks: { cont: "175", final: "175", total: "350" },
        grandTotal: "950"
      }
    },
    {
      semester: "8th Semester",
      totalPeriod: 36,
      ratio: "0.0% : 100.0%",
      subjects: [
        { code: "29081", name: "Industrial Attachment", theory: "-", practical: "24", credit: "8", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "200", final: "200", total: "400" },
          grandTotal: "400"
        },
        { code: "", name: "Project Presentation", theory: "-", practical: "12", credit: "4", 
          theoryMarks: { cont: "-", final: "-", total: "-" }, 
          practicalMarks: { cont: "100", final: "100", total: "200" },
          grandTotal: "200"
        }
      ],
      totals: {
        theory: "-", practical: "36", credit: "12",
        theoryMarks: { cont: "-", final: "-", total: "-" },
        practicalMarks: { cont: "300", final: "300", total: "600" },
        grandTotal: "600"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Department Header */}
      <div className="bg-gradient-to-r from-cyan-800 to-cyan-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Laptop className="size-12" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            Department of {departmentInfo.name} ({departmentInfo.code})
          </h1>
          <p className="text-xl">{departmentInfo.institute}</p>
          <p className="text-sm mt-2">Probidhan-2022 Curriculum</p>
        </div>
      </div>

      {/* Department Overview */}
      <section className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Building className="mr-2 size-6 text-cyan-600" />
              About the Department
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Established in {departmentInfo.establishment}, the {departmentInfo.name} Department at {departmentInfo.institute} 
                  is committed to providing quality technical education in computer science and information technology.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Users className="flex-shrink-0 h-5 w-5 text-cyan-600 mt-0.5 mr-2" />
                    <span className="text-gray-700">
                      <strong>Department Head:</strong> {departmentInfo.head}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="flex-shrink-0 h-5 w-5 text-cyan-600 mt-0.5 mr-2" />
                    <span className="text-gray-700">
                      <strong>Program:</strong> 4-Year Diploma in Engineering
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Laptop className="flex-shrink-0 h-5 w-5 text-cyan-600 mt-0.5 mr-2" />
                    <span className="text-gray-700">
                      <strong>Laboratories:</strong> {departmentInfo.labs.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mission</h3>
                <p className="text-gray-700 mb-4">{departmentInfo.mission}</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Vision</h3>
                <p className="text-gray-700">{departmentInfo.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 pb-10">
        <div className=" rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <ClipboardList className="mr-2 size-6 text-cyan-600" />
              Complete Curriculum Structure
            </h2>
            
            {/* Semester Tables */}
            <div className="space-y-12">
              {semesters.map((sem, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  {/* Semester Header */}
                  <div className="bg-cyan-700 text-white px-6 py-3 flex justify-between items-center">
                    <h3 className="text-lg font-bold">{sem.semester}</h3>
                    <div className="flex space-x-4">
                      <span className="text-sm">Total Period: {sem.totalPeriod}</span>
                      <span className="text-sm">Ratio: {sem.ratio}</span>
                    </div>
                  </div>
                  
                  {/* Subjects Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th rowSpan="2" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                          <th rowSpan="2" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject Name</th>
                          <th colSpan="2" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Period Per Week</th>
                          <th rowSpan="2" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
                          <th colSpan="3" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Theory Assessment</th>
                          <th colSpan="3" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Practical Assessment</th>
                          <th rowSpan="2" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grand Total</th>
                        </tr>
                        <tr>
                          <th className="px-2 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Theory</th>
                          <th className="px-2 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Practical</th>
                          <th className="px-2 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Cont.</th>
                          <th className="px-2 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Final</th>
                          <th className="px-2 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                          <th className="px-2 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Cont.</th>
                          <th className="px-2 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Final</th>
                          <th className="px-2 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {sem.subjects.map((subject, idx) => (
                          <tr key={idx}>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{subject.code}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{subject.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-700 text-center">{subject.theory}</td>
                            <td className="px-4 py-3 text-sm text-gray-700 text-center">{subject.practical}</td>
                            <td className="px-4 py-3 text-sm text-gray-700 text-center">{subject.credit}</td>
                            <td className="px-2 py-3 text-sm text-gray-700 text-center">{subject.theoryMarks.cont}</td>
                            <td className="px-2 py-3 text-sm text-gray-700 text-center">{subject.theoryMarks.final}</td>
                            <td className="px-2 py-3 text-sm text-gray-700 text-center">{subject.theoryMarks.total}</td>
                            <td className="px-2 py-3 text-sm text-gray-700 text-center">{subject.practicalMarks.cont}</td>
                            <td className="px-2 py-3 text-sm text-gray-700 text-center">{subject.practicalMarks.final}</td>
                            <td className="px-2 py-3 text-sm text-gray-700 text-center">{subject.practicalMarks.total}</td>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 text-center">{subject.grandTotal}</td>
                          </tr>
                        ))}
                        {/* Totals Row */}
                        <tr className="bg-gray-50 font-semibold">
                          <td className="px-4 py-3 text-sm text-gray-700" colSpan="2">Total</td>
                          <td className="px-4 py-3 text-sm text-gray-700 text-center">{sem.totals.theory}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 text-center">{sem.totals.practical}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 text-center">{sem.totals.credit}</td>
                          <td className="px-2 py-3 text-sm text-gray-700 text-center">{sem.totals.theoryMarks.cont}</td>
                          <td className="px-2 py-3 text-sm text-gray-700 text-center">{sem.totals.theoryMarks.final}</td>
                          <td className="px-2 py-3 text-sm text-gray-700 text-center">{sem.totals.theoryMarks.total}</td>
                          <td className="px-2 py-3 text-sm text-gray-700 text-center">{sem.totals.practicalMarks.cont}</td>
                          <td className="px-2 py-3 text-sm text-gray-700 text-center">{sem.totals.practicalMarks.final}</td>
                          <td className="px-2 py-3 text-sm text-gray-700 text-center">{sem.totals.practicalMarks.total}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 text-center">{sem.totals.grandTotal}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default ComputerPage;