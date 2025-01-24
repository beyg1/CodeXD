// Enable client-side rendering for this component
"use client";

// Import UI components and form-related utilities
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the form validation schema using Zod
// This ensures type safety and form validation
const formSchema = z.object({
  email: z.string().email(), // Must be a valid email format
  password: z.string().min(6), // Password must be at least 6 characters
  role: z.string().min(4), // Role must be at least 4 characters
});

// Main Register component
export default function Register() {
  // Initialize form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // Use zod for form validation
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Send registration data to the API endpoint
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        cache: "no-store", // Disable caching for this request
      });
    } catch (err) {
      // Log any errors during submission
      console.log("🚀 ~ onSubmit ~ err:", err);
    }
  };

  // Render the registration form
  return (
    // Main container with responsive grid layout
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Form container with styling */}
      <div className="border p-5 min-w-96 bg-slate-50 rounded-md">
        {/* Form title */}
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-center">
          Register
        </h1>
        {/* Form component with form context */}
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
                      placeholder="Email"
                      type="email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage /> {/* Display validation errors */}
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
                      placeholder="Password"
                      type="password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage /> {/* Display validation errors */}
                </FormItem>
              )}
            />
            {/* Role selection field */}
            <FormField
              name="role"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        {/* Available role options */}
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="super-admin">Super Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage /> {/* Display validation errors */}
                </FormItem>
              )}
            />
            {/* Submit button */}
            <Button type="submit">Register</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}