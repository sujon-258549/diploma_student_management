"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"

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

// Schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("Form Submitted:", values)
      // Replace this with your login API logic (e.g. axios.post('/api/login', values))
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <div className="flex justify-center w-full items-center min-h-screen bg-gray-900 px-4">
      <div className="sm:max-w-[425px] w-full bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {/* Header */}
          <div className="h-20 bg-cyan-500 flex items-end px-6 pb-4">
            <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          </div>

          {/* Form */}
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                          className="focus-visible:ring-2 focus-visible:ring-cyan-500 border-cyan-300 text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm text-white">Password</FormLabel>
                        <Link href="/forgot-password" className="text-xs text-cyan-600 hover:text-cyan-800">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...field}
                            className="focus-visible:ring-2 text-white focus-visible:ring-cyan-500 border-cyan-300 pr-10"
                          />
                        </FormControl>
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-cyan-700"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <IoMdEyeOff className="h-5 w-5" />
                          ) : (
                            <IoMdEye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-400">
                    Remember me
                  </label>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Sign In
                </Button>
              </form>
            </Form>

           
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login
