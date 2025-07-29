"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, User, Lock, Contact, Briefcase, FileText, Check } from "lucide-react"
import { useState } from "react"
import { teacherSignup } from "./teacherSignupZod"
import { toast } from "sonner"
import { createTeacher } from "@/server/registration/registrationServices"
import { useRouter } from "next/navigation"



export default function TeacherSignupForm() {
  const router = useRouter()
  const [photoPreview, setPhotoPreview] = useState("")
  const [signaturePreview, setSignaturePreview] = useState("")
  const form = useForm<z.infer<typeof teacherSignup>>({
    resolver: zodResolver(teacherSignup),
    defaultValues: {
      trainingCompleted: false
    }
  })

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
        form.setValue("photoUrl", reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const [showPassword, setShowPassword] = useState<boolean>(false)


  const handleSignatureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSignaturePreview(reader.result as string)
        form.setValue("signatureUrl", reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }


  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("Updating blog post...");
    try {
  
          const updatedValues = {
            ...values,
            dateOfBirth: values.dateOfBirth
              ? new Date(values.dateOfBirth).toISOString().split("T")[0]
              : null,
            joiningDate: values.joiningDate
              ? new Date(values.joiningDate).toISOString().split("T")[0]
              : null,
            photoUrl: values.photoUrl || null,
            signatureUrl: values.signatureUrl || null,
            name: values.name,
            email: values.email,
            fatherName: values.fatherName,
            motherName: values.motherName,
            gender: values.gender,
            role: "FACULTY",
            bloodGroup: values.bloodGroup,
            phoneNumber: values.phoneNumber,
            emergencyContact: values.emergencyContact,
            presentAddress: values.presentAddress,
            permanentAddress: values.permanentAddress,
            teacherId: values.teacherId,
            status: values.status,
            designation: values.designation,
            department: values.department,
            trainingCompleted: values.trainingCompleted,
            teachingSubject: values.teachingSubject,
            nidNumber: values.nidNumber,
            birthCertificateNo: values.birthCertificateNo,
            nationality: values.nationality,
            religion: values.religion,
            maritalStatus: values.maritalStatus,
            group: values.group,
            password: values.password
          }
     


 
      console.log(updatedValues)
      const result = await createTeacher(updatedValues)
      console.log(result)
      if (result?.success) {
        toast.success(result.message || "Blog post updated successfully", {
          id: toastId,
        });
        router.push("/");

      } else {
        toast.error(result?.message || "Failed to update blog post", {
          id: toastId,
        });
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mx-4">
      <div className="max-w-4xl mx-auto p-3 md:p-8  bg-gray-700  rounded-lg shadow-lg">
        <div className="bg-cyan-600  text-white p-6 rounded-t-lg mb-6">
          <div className="flex items-center justify-center space-x-3">
            <User className="h-8 w-8" />
            <h1 className="text-3xl font-bold text-center">Teacher Registration</h1>
          </div>
          <p className="text-center text-cyan-100 mt-2">
            Please fill in all required fields to complete your registration
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Account Information Section */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-cyan-100">
              <div className="flex items-center mb-4">
                <Lock className="h-5 w-5 mr-2 text-cyan-600" />
                <h2 className="text-xl font-semibold text-cyan-800">Account Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="teacher@example.com" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Password</FormLabel>
                      <FormControl>
                        <Input type={showPassword ? "password" : "text"} placeholder="••••••••" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Confirm Password</FormLabel>
                      <FormControl>
                        <Input type={showPassword ? "password" : "text"} placeholder="••••••••" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2 items-center mt-5">
                <Checkbox onClick={() => setShowPassword(!showPassword)} className="border-cyan-700" /> <p>{showPassword ? "Show Password" : "Hide Password"}</p>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-cyan-100">
              <div className="flex items-center mb-4">
                <Contact className="h-5 w-5 mr-2 text-cyan-600" />
                <h2 className="text-xl font-semibold text-cyan-800">Personal Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fatherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Father's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Father's name" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="motherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Mother's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Mother's name" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teacherId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Teacher ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Teacher ID" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Gender</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-cyan-500 w-full">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="MALE">Male</SelectItem>
                          <SelectItem value="FEMALE">Female</SelectItem>
                          <SelectItem value="OTHER">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-cyan-800">Date of Birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left bg-white font-normal focus:ring-cyan-500",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bloodGroup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Blood Group</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-cyan-500 w-full">
                            <SelectValue placeholder="Select blood group" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="A_POS">A+</SelectItem>
                          <SelectItem value="A_NEG">A-</SelectItem>
                          <SelectItem value="B_POS">B+</SelectItem>
                          <SelectItem value="B_NEG">B-</SelectItem>
                          <SelectItem value="AB_POS">AB+</SelectItem>
                          <SelectItem value="AB_NEG">AB-</SelectItem>
                          <SelectItem value="O_POS">O+</SelectItem>
                          <SelectItem value="O_NEG">O-</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="01XXXXXXXXX" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emergencyContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Emergency Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="Emergency contact number" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="presentAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Present Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Full present address"
                          {...field}
                          className="focus:ring-cyan-500 min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Permanent Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Full permanent address"
                          {...field}
                          className="focus:ring-cyan-500 min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-cyan-100">
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 mr-2 text-cyan-600" />
                <h2 className="text-xl font-semibold text-cyan-800">Professional Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Designation</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-cyan-500 w-full">
                            <SelectValue placeholder="Select designation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="LECTURER">Lecturer</SelectItem>
                          <SelectItem value="INSTRUCTOR">Instructor</SelectItem>
                          <SelectItem value="SENIOR_INSTRUCTOR">Senior Instructor</SelectItem>
                          <SelectItem value="HEAD_OF_DEPARTMENT">Head of Department</SelectItem>
                          <SelectItem value="VICE_PRINCIPAL">Vice Principal</SelectItem>
                          <SelectItem value="PRINCIPAL">Principal</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="department" // ✅ Correct field name
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Department</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-cyan-500 w-full">
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ELECTRONIC">Electronic</SelectItem>
                          <SelectItem value="ELECTROMADICAL">Electromedical</SelectItem>
                          <SelectItem value="COMPUTER">Computer</SelectItem>
                          <SelectItem value="POWER">Power</SelectItem>
                          <SelectItem value="MECHANICAL">Mechanical</SelectItem>
                          <SelectItem value="ELECTRICAL">Electrical</SelectItem>
                          <SelectItem value="CIVIL">Civil</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="joiningDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col ">
                      <FormLabel className="text-cyan-800">Joining Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal bg-white focus:ring-cyan-500",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teachingSubject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Teaching Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject name" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="trainingCompleted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-cyan-600 data-[state=checked]:bg-cyan-600"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-cyan-800">
                          Training Completed
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Documents and Additional Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-cyan-100">
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 mr-2 text-cyan-600" />
                <h2 className="text-xl font-semibold text-cyan-800">Documents & Additional Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nidNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">NID Number</FormLabel>
                      <FormControl>
                        <Input placeholder="National ID number" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthCertificateNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Birth Certificate No</FormLabel>
                      <FormControl>
                        <Input placeholder="Birth certificate number" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Nationality</FormLabel>
                      <FormControl>
                        <Input placeholder="Nationality" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="religion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Religion</FormLabel>
                      <FormControl>
                        <Input placeholder="Religion" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <FormField
                  control={form.control}
                  name="photoUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Photo</FormLabel>
                      <FormControl>
                        <div>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="focus:ring-cyan-500"
                          />
                          {photoPreview && (
                            <div className="mt-2">
                              <img
                                src={photoPreview}
                                alt="Preview"
                                className="h-20 w-20 object-cover rounded border border-cyan-200"
                              />
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="signatureUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Signature</FormLabel>
                      <FormControl>
                        <div>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={handleSignatureUpload}
                            className="focus:ring-cyan-500"
                          />
                          {signaturePreview && (
                            <div className="mt-2">
                              <img
                                src={signaturePreview}
                                alt="Preview"
                                className="h-20 w-20 object-cover rounded border border-cyan-200"
                              />
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="maritalStatus"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-cyan-800 mt-5">Marital Status</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="md:flex  space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="MARRIED" className="text-cyan-600 border-cyan-600" />
                          </FormControl>
                          <FormLabel className="font-normal text-cyan-800">Married</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="UNMARRIED" className="text-cyan-600 border-cyan-600" />
                          </FormControl>
                          <FormLabel className="font-normal text-cyan-800">Unmarried</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="DIVORCED" className="text-cyan-600 border-cyan-600" />
                          </FormControl>
                          <FormLabel className="font-normal text-cyan-800">Divorced</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="WIDOWED" className="text-cyan-600 border-cyan-600" />
                          </FormControl>
                          <FormLabel className="font-normal text-cyan-800">Widowed</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>


            <Button
              type="submit"
              className="w-full bg-cyan-700 hover:bg-cyan-800 text-white py-6 text-lg"
            >
              <Check className="mr-2 h-5 w-5" />
              Complete Registration
            </Button>
          </form>
        </Form>

      </div>
    </div>
  )
}