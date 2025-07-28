"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { CalendarIcon, User, Lock, Contact, BookOpen, FileText, Check } from "lucide-react"
import { useState } from "react"
import { studentSignUFormSchema } from "./studentSignupZod"

export default function StudentSignupForm() {
  const [photoPreview, setPhotoPreview] = useState("")
  const [photo, srtPhoto] = useState<any>()
  const form = useForm<z.infer<typeof studentSignUFormSchema>>({
    resolver: zodResolver(studentSignUFormSchema)
  })

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    srtPhoto(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
        form.setValue("photoUrl", reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }


  async function onSubmit(values: z.infer<typeof studentSignUFormSchema>) {
    console.log(values, photo)
  }

  return (
    <div className="mx-4">
      <div className="max-w-4xl mx-auto p-3 md:p-8 bg-gray-700 rounded-lg shadow-lg">
        <div className="bg-cyan-600 text-white p-6 rounded-t-lg mb-6">
          <div className="flex items-center justify-center space-x-3">
            <User className="h-8 w-8" />
            <h1 className="text-3xl font-bold text-center">Student Registration</h1>
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
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="student@example.com" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Nationality</FormLabel>
                      <FormControl>
                        <Input placeholder="Your nationality" {...field} className="focus:ring-cyan-500" />
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
                        <Input placeholder="Your religion" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
            </div>

            {/* Academic Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-cyan-100">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
                <h2 className="text-xl font-semibold text-cyan-800">Academic Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="registrationNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Registration No</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Registration number"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          className="focus:ring-cyan-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rollNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Roll No</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Roll number"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          className="focus:ring-cyan-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startEducationYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Start Education Year</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Start Education Year" {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))} className="focus:ring-cyan-500" />
                      </FormControl>
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
                  name="shift"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Shift</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-cyan-500 w-full">
                            <SelectValue placeholder="Select shift" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="MORNING">Morning</SelectItem>
                          <SelectItem value="EVENING">Evening</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="semester"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Semester</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-cyan-500 w-full">
                            <SelectValue placeholder="Select semester" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ONE">1st</SelectItem>
                          <SelectItem value="TWO">2nd</SelectItem>
                          <SelectItem value="THREE">3rd</SelectItem>
                          <SelectItem value="FOUR">4th</SelectItem>
                          <SelectItem value="FIVE">5th</SelectItem>
                          <SelectItem value="SIX">6th</SelectItem>
                          <SelectItem value="SEVEN">7th</SelectItem>
                          <SelectItem value="EIGHT">8th</SelectItem>
                          <SelectItem value="END">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="group"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Group</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-cyan-500 w-full">
                            <SelectValue placeholder="Select group" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="A_GROUP">A Group</SelectItem>
                          <SelectItem value="B_GROUP">B Group</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
            </div>

            {/* SSC Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-cyan-100">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
                <h2 className="text-xl font-semibold text-cyan-800">SSC (Class 10) Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="classTenSchoolName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">School Name</FormLabel>
                      <FormControl>
                        <Input placeholder="School name" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="classTenBoard"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Board</FormLabel>
                      <FormControl>
                        <Input placeholder="Education board" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="classTenGroup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Group</FormLabel>
                      <FormControl>
                        <Input placeholder="Group/Stream" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="classTenRollNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Roll No</FormLabel>
                      <FormControl>
                        <Input placeholder="Roll number" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="classTenRegistrationNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Registration No</FormLabel>
                      <FormControl>
                        <Input placeholder="Registration number" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="classTenGPA"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">GPA</FormLabel>
                      <FormControl>
                        <Input placeholder="Your GPA" {...field} className="focus:ring-cyan-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="classTenExamYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cyan-800">Exam Year</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Exam year"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          className="focus:ring-cyan-500"
                        />
                      </FormControl>
                      <FormMessage />
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

              </div>
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