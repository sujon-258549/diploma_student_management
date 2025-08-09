"use server"

export const studentData = async () => {
    try {
        const res = await fetch("http://localhost:5000/student", {
            method: "GET",

        });

        return await res.json();
    } catch (err) {
        console.error("Fetch error:", err);
        return { success: false, message: "Network error", err };
    }
};