import { studentSingleData } from "@/server/student/studentServices";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const student = await studentSingleData(id);
  
  if (!student.data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Student not found</p>
      </div>
    );
  }

  const {
    name,
    photoUrl,
    rollNo,
    registrationNo,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    bloodGroup,
    cgpa,
    department,
    semester,
    shift,
    fatherName,
    motherName,
    emergencyContact,
    presentAddress,
    permanentAddress,
    religion,
    nationality,
    classTenSchoolName,
    classTenBoard,
    classTenGPA,
    classTenPassingYear,
    classTenRollNo,
    classTenRegistrationNo,
    classTenGroup,
    startEducationYear,
    passingYear,
    regularStudent,
    group,
    createdAt,
    updatedAt
  } = student.data;

  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate age from date of birth
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <div className="flex-shrink-0">
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-cyan-100 flex items-center justify-center bg-white overflow-hidden">
              {photoUrl ? (
                <img 
                  src={photoUrl} 
                  alt={name} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-cyan-100 flex items-center justify-center">
                  <span className="text-cyan-800 text-2xl font-semibold">
                    {getInitials(name)}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-grow">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">{name}</h1>
            <p className="text-slate-600 mt-1">{department} Department</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full font-medium">
                Roll: {rollNo}
              </span>
              <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full font-medium">
                Reg: {registrationNo}
              </span>
              <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full font-medium">
                {semester} Semester
              </span>
              <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full font-medium">
                {shift}
              </span>
              <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full font-medium">
                Blood: {bloodGroup}
              </span>
            </div>
          </div>
          
          <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100 self-stretch">
            <h3 className="font-semibold text-cyan-800">Academic Summary</h3>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-slate-600">CGPA: <span className="font-medium">{cgpa}</span></p>
              <p className="text-sm text-slate-600">Group: <span className="font-medium">{group}</span></p>
              <p className="text-sm text-slate-600">Status: <span className="font-medium">{regularStudent ? 'Regular' : 'Irregular'}</span></p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg border border-cyan-100 overflow-hidden">
            <div className="bg-cyan-50 px-6 py-4 border-b border-cyan-100">
              <h2 className="text-xl font-semibold text-cyan-800">Personal Information</h2>
              <p className="text-sm text-slate-500">Basic details and contact information</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Date of Birth</p>
                    <p className="text-slate-800">{formatDate(dateOfBirth)} (Age: {calculateAge(dateOfBirth)})</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Gender</p>
                    <p className="text-slate-800">{gender}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <p className="text-slate-800">{email}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-slate-500">Phone Number</p>
                  <p className="text-slate-800">{phoneNumber}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-slate-500">Emergency Contact</p>
                  <p className="text-slate-800">{emergencyContact}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Religion</p>
                    <p className="text-slate-800">{religion}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Nationality</p>
                    <p className="text-slate-800">{nationality}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Family Information */}
          <div className="bg-white rounded-lg border border-cyan-100 overflow-hidden">
            <div className="bg-cyan-50 px-6 py-4 border-b border-cyan-100">
              <h2 className="text-xl font-semibold text-cyan-800">Family Information</h2>
              <p className="text-sm text-slate-500">Parent and guardian details</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Father's Name</p>
                  <p className="text-slate-800">{fatherName}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-slate-500">Mother's Name</p>
                  <p className="text-slate-800">{motherName}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-slate-500">Present Address</p>
                  <p className="text-slate-800">{presentAddress}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-slate-500">Permanent Address</p>
                  <p className="text-slate-800">{permanentAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Class Ten Information */}
          <div className="bg-white rounded-lg border border-cyan-100 overflow-hidden md:col-span-2">
            <div className="bg-cyan-50 px-6 py-4 border-b border-cyan-100">
              <h2 className="text-xl font-semibold text-cyan-800">Secondary School Certificate (SSC) Details</h2>
              <p className="text-sm text-slate-500">Class Ten Academic Information</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">School Name</p>
                    <p className="text-slate-800">{classTenSchoolName}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Education Board</p>
                    <p className="text-slate-800">{classTenBoard}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Group/Stream</p>
                    <p className="text-slate-800">{classTenGroup}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Passing Year</p>
                    <p className="text-slate-800">{classTenPassingYear}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">GPA Achieved</p>
                    <p className="text-slate-800">{classTenGPA}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Roll Number</p>
                    <p className="text-slate-800">{classTenRollNo}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Registration Number</p>
                    <p className="text-slate-800">{classTenRegistrationNo}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-slate-500 mr-2">Performance:</p>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div 
                        className="bg-cyan-600 h-2.5 rounded-full" 
                        style={{ width: `${(parseFloat(classTenGPA) / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Running Academic Information */}
          <div className="bg-white rounded-lg border border-cyan-100 overflow-hidden md:col-span-2">
            <div className="bg-cyan-50 px-6 py-4 border-b border-cyan-100">
              <h2 className="text-xl font-semibold text-cyan-800">Current Academic Information</h2>
              <p className="text-sm text-slate-500">Ongoing Education Details</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Department</p>
                    <p className="text-slate-800">{department}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Current Semester</p>
                    <p className="text-slate-800">{semester}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Shift</p>
                    <p className="text-slate-800">{shift}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Group</p>
                    <p className="text-slate-800">{group}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Start Year</p>
                    <p className="text-slate-800">{startEducationYear}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Expected Passing Year</p>
                    <p className="text-slate-800">{passingYear || 'Not specified'}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Current CGPA</p>
                    <p className="text-slate-800">{cgpa}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">Student Status</p>
                    <p className="text-slate-800">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${regularStudent ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                        {regularStudent ? 'Regular' : 'Irregular'}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Progress bar for CGPA */}
              <div className="mt-6">
                <p className="text-sm font-medium text-slate-500 mb-2">CGPA Progress</p>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div 
                    className="bg-cyan-600 h-2.5 rounded-full" 
                    style={{ width: `${(parseFloat(cgpa) / 4) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>0.00</span>
                  <span>Target: 4.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Information */}
          <div className="bg-white rounded-lg border border-cyan-100 overflow-hidden md:col-span-2">
            <div className="bg-cyan-50 px-6 py-4 border-b border-cyan-100">
              <h2 className="text-xl font-semibold text-cyan-800">System Information</h2>
              <p className="text-sm text-slate-500">Record metadata and timestamps</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Created At</p>
                  <p className="text-slate-800">{formatDate(createdAt)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Last Updated</p>
                  <p className="text-slate-800">{formatDate(updatedAt)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Student ID</p>
                  <p className="text-slate-800 font-mono text-sm">{id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;