// Import necessary types from Next.js server components
import { NextRequest, NextResponse } from "next/server";

// GET endpoint handler - Processes GET requests to this API route
export async function GET(request: NextRequest) {
    // Extract query parameters from the request URL
    const searchParams = request.nextUrl.searchParams;
    
    // Check if 'name' parameter exists in the URL query
    if(searchParams.has('name')){
        // If name exists, retrieve it from the query parameters
        const name = searchParams.get('name');
        // Return a JSON response with a personalized greeting
        return NextResponse.json({message: `Hello, ${name}`});
    }
    else{
        // If name is missing, return a 400 Bad Request status with an error message
        return NextResponse.json({message: 'Hello, Name is missing'}, {status: 400});
    }
}

// POST endpoint handler - Processes POST requests to this API route
export async function POST(request: NextRequest) {
    // Parse the JSON body from the request
    const body = await request.json();
    // Return a JSON response using the name from the request body
    return NextResponse.json({message: `Hello, ${body.name}`});
}