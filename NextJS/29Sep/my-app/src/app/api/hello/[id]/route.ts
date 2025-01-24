// Import necessary Next.js server components for handling API requests and responses
import { NextRequest, NextResponse } from "next/server";

// Mock database: Array of book objects representing a simple in-memory data store
const books = [
  {
    id: 1,
    Name: "Book1",
  },
  {
    id: 2,
    Name: "Book2",
  },
];

// GET endpoint handler for fetching a specific book by ID
// This is a dynamic route handler where [id] is passed as a URL parameter
export async function GET(
  req: NextRequest, // Request object containing incoming request details
  {
    params, // Destructured params object containing route parameters
  }: {
    params: {
      id: number; // Type definition for the id parameter
    };
  }
) {
  // Log the received ID parameter for debugging purposes
  console.log("🚀 ~ GET ~ params:", params.id);

  // Find the book in our mock database that matches the requested ID
  const currentBook = books.find((book) => book.id == params.id);

  // Return a JSON response containing:
  // 1. A message indicating the server response
  // 2. The found book data (or undefined if no book matches)
  return NextResponse.json({
    message: "Hello from server, say hello to dynamic route",
    currentBook,
  });
}