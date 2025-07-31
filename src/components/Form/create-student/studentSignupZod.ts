import z from "zod";

export const studentSignUFormSchema = z.object({
  // User fields
  email: z.string().email("Invalid email address"),
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
  nationality: z.string().min(1, "Permanent address is required"),
  religion: z.string().min(1, "Permanent address is required"),
  // //   // Professional Information


  department: z.enum(["ELECTRONIC", "ELECTROMADICAL", "COMPUTER", "POWER", "MECHANICAL", "ELECTRICAL", "CIVIL"]),

  // //   // Documents
  registrationNo: z.string().optional(),
  startEducationYear: z.number().min(3, "Start Year is required"),
  rollNo: z.string().optional(),
  // passingYear: z.number().optional(),
  // regularStudent: z.boolean().default(true),
  shift: z.enum(["MORNING", "EVENING"]),
  semester: z.enum(["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "END"]),
  group: z.enum(["A_GROUP", "B_GROUP"]).optional(),

  // //   // Additional fields
  photoUrl: z.string().optional(),


  // //  ✅ Class 10 (SSC) Info
  classTenSchoolName: z.string().min(1, "Permanent address is required"),
  classTenBoard: z.string().min(1, "Permanent address is required"),
  classTenGroup: z.string().min(1, "Permanent address is required"),
  classTenRollNo: z.string().min(1, "Permanent address is required"),
  classTenRegistrationNo: z.string().min(1, "Permanent address is required"),
  classTenGPA: z.string().min(1, "Permanent address is required").max(5),
  classTenPassingYear: z.number().min(1, "Permanent address is required"),
})

