'use client'
import React from 'react'
import { useEffect, useState} from 'react';

interface Blog { // Define the interface for Blog.
  title: string;
  body: string;
}

export default function BlogID({ params }: { params: { blogID: string } }) { 
  const { blogID } = params; // destructure the blogID property
   const getBlogPosts = async () => {   // Asynchronous function to fetch blog posts from an external API.
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogID}`); // Fetch data from API
    const data = await response.json(); // Parse the JSON response
    setBlog(data); // Update the state with the fetched data.
  } 
  useEffect(() => { // useEffect hook to fetch blog posts when the component mounts.
  getBlogPosts();  // Call the getBlogPosts function.
  },);

  const [blog, setBlog]=useState<Blog | null>(null); // State variable to store the blog posts data.  Initialized as null.
 
return (
  <div className='flex flex-wrap justify-center'>
    <h1 className='text-2xl font-bold'>{blog?.title}</h1>   {/* '?' is used for if blog has title */}
    <br />
    <p className='text-xl text-center'>{blog?.body}</p>
   
  </div>
)
}
