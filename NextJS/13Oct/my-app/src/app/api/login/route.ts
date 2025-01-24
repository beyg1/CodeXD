// Import required Next.js server utilities for handling HTTP requests and responses
import { NextRequest, NextResponse } from "next/server";

// Define an asynchronous POST handler for the login endpoint
// This function processes incoming login requests
export async function POST(
  req: NextRequest // Parameter to access the incoming request data
) {
  // Parse the JSON data from the request body
  // This typically contains user credentials (e.g., username/password)
  const body = await req.json();

  // Log the received request body for debugging purposes
  console.log("🚀 ~ POST ~ body:", body);

  // Return a JSON response
  // Currently returns a simple message, but in a real application,
  // this would typically return authentication tokens or user data
  return NextResponse.json({ message: "User Login Api" });
}