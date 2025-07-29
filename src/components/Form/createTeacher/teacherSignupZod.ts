import z from "zod";

export const teacherSignup = z.object({
  // User fields
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
//   role: z.literal("FACULTY"),

  // Personal Information
  name: z.string().min(1, "Name is required"),
  fatherName: z.string().min(1, "Father's name is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  dateOfBirth: z.date("Date of birth is required"),
  bloodGroup: z.enum([
    "A_POS", "A_NEG", "B_POS", "B_NEG",
    "AB_POS", "AB_NEG", "O_POS", "O_NEG"
  ]).optional(),
  phoneNumber: z.string().min(11, "Phone number must be at least 11 digits"),
  emergencyContact: z.string().optional(),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),

//   // Professional Information
  teacherId: z.string().min(1, "Teacher ID is required"),
  designation: z.enum([
    "LECTURER", "INSTRUCTOR", "SENIOR_INSTRUCTOR",
    "HEAD_OF_DEPARTMENT", "VICE_PRINCIPAL", "PRINCIPAL"
  ]),
  department: z.string().min(1, "Department is required"),
  joiningDate: z.date( "Joining date is required",),
  teachingSubject: z.string().optional(),
  trainingCompleted: z.boolean().optional(),

//   // Documents
  nidNumber: z.string().optional(),
  birthCertificateNo: z.string().optional(),
  nationality: z.string().min(1, "Nationality is required"),
  religion: z.string().min(1, "Religion is required"),
  maritalStatus: z.enum(["MARRIED", "UNMARRIED", "DIVORCED", "WIDOWED"]),
  group: z.enum(["A_GROUP", "B_GROUP", "C_GROUP", "D_GROUP"]).optional(),

//   // Additional fields
  photoUrl: z.string().optional(),
  signatureUrl: z.string().optional(),

}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})