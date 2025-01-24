import { NextRequest, NextResponse } from "next/server";

const users = [
    {
        name: "John",
        id: 1
    },
    {
        name: "Jane",
        id: 2
    }
]
export async function GET() { // GET method 
    return NextResponse.json(users); // Return the users data through api
}
export async function POST(req: NextRequest) {// POST method sends a request which is passed in params
    const data = await req.json();// Get the data from the request
    users.push(data);
    return NextResponse.json(data);// Return the users data through api
    
}