import { NextRequest, NextResponse } from "next/server";

const posts = [
    {
        title: 1,
        post: "Post 1",
    },
    {
        title: 2,
        post: "Post 2",
    },
    {
        title: 3,
        post: "Post 3",
    },
]
export async function GET() {
    return  NextResponse.json(posts);    
}
export async function POST( req: NextRequest) {
    const data = await req.json() // Get the data from the request
    posts.push(data)
    return  NextResponse.json(data);// Return the users data through api
}