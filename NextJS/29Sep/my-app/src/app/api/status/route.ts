// Available HTTP Methods in Next.js API Routes:
// GET    - Retrieve data
// POST   - Create new data
// PUT    - Update entire resource
// PATCH  - Partial resource update
// DELETE - Remove data

// Note: Each HTTP method should be exported as an async function
// Example: export async function GET(), POST(), etc.

// Reference documentation for Next.js API routes:
// https://nextjs.org/docs/api-routes/introduction

// Import NextResponse utility for standardized API responses
import { NextResponse } from "next/server";

// Define GET endpoint handler for status checks
// This endpoint provides a health check or status verification
export async function GET() {
   // Alternative basic response method:
   // return new Response("Hello, Next.js!");
   
   // Return a JSON response with:
   // - status: indicating service status
   // - message: friendly greeting message
   return NextResponse.json({ status: "OK", message: "Hello, Next.js!" });
}