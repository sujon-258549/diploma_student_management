

"use server"

export const createTeacher = async (teacherData: any) => {
  console.log(teacherData);
  try {
    const res = await fetch("http://localhost:5000/register/create-teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ✅ Content-Type সেট করো
      },
      body: JSON.stringify(teacherData),     // ✅ Object কে JSON string বানাও
    });

    return await res.json(); // ✅ রেসপন্স রিটার্ন
  } catch (err) {
    console.error("Fetch error:", err);
    return { success: false, message: "Network error", err };
  }
};
export const createStudent = async (studentData: any) => {
  console.log(studentData);
  try {
    const res = await fetch("http://localhost:5000/register/create-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ✅ Content-Type সেট করো
      },
      body: JSON.stringify(studentData),     // ✅ Object কে JSON string বানাও
    });

    return await res.json(); // ✅ রেসপন্স রিটার্ন
  } catch (err) {
    console.error("Fetch error:", err);
    return { success: false, message: "Network error", err };
  }
};
