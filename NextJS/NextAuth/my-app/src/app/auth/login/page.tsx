'use client';
import React from 'react'
// Import necessary components and utilities
import { Button } from "@/components/ui/button"; // Import custom Button component
import { Input } from "@/components/ui/input"; // Import custom Input component
import { useForm } from "react-hook-form"; // Import React Hook Form for form handling
import * as z from "zod"; // Import Zod for form validation
import { zodResolver } from "@hookform/resolvers/zod"; // Import Zod resolver for React Hook Form
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Import form-related components
import { formSchema } from "@/lib/schemas";  // import the form validation schema using Zod



export default function Home() {
// Initialize form with React Hook Form and Zod validation
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema), // Connect Zod validation schema
  defaultValues: {
    email: "", // Initialize email field as empty
    password: "", // Initialize password field as empty
  },
});

// Handle form submission
const onSubmit = async (data: z.infer<typeof formSchema>) => {
  try {
    // Replace the fetch with signIn
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/" // Redirect to home page after login
    });
    
    if (result?.error) {
      console.log(result.error);
    }
  } catch (err) {
    console.log("🚀 ~ onSubmit ~ err:", err);
  }
};

  return (
    // Main container with responsive grid layout     
     <div className="grid items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 ">      
      {/* Login form container with styling */}
      <div className="border p-5 min-w-96 bg-neutral-200 rounded-md">
        {/* Login heading */}
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-center">
          Login
        </h1>
        {/* Form component from shadcn/ui */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-5 w-full flex-col py-5"
          >
            {/* Email field */}
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Email"
                      type="email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage /> {/* Display validation errors for email */}
                </FormItem>
              )}
            />
            {/* Password field */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Set Password"
                      type="password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage /> {/* Display validation errors for password */}
                </FormItem>
              )}
            />
            {/* Submit button */}
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
// Import the signIn function from next-auth
import { signIn as nextAuthSignIn } from "next-auth/react";

// Implement the signIn function using next-auth
async function signIn(provider: string, credentials: {
  email: string;
  password: string;
  redirect: boolean;
  callbackUrl: string;
}) {
  return nextAuthSignIn(provider, {
    ...credentials,
    redirect: credentials.redirect,
    callbackUrl: credentials.callbackUrl,
  });
}
