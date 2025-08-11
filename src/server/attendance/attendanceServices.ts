"use server"

export const createAttendance = async (attendanceData: any) => {
    try {
        const res = await fetch("http://localhost:5000/attendance/create-attendance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // ✅ Content-Type সেট করো
            },
            body: JSON.stringify(attendanceData),

        });

        return await res.json();
    } catch (err) {
        console.error("Fetch error:", err);
        return { success: false, message: "Network error", err };
    }
};
export const getAttendance = async () => {
    try {
        const res = await fetch("http://localhost:5000/attendance", {
            method: "GET",
    
        });

        return await res.json();
    } catch (err) {
        console.error("Fetch error:", err);
        return { success: false, message: "Network error", err };
    }
};