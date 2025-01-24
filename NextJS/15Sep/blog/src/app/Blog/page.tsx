'use client' // This indicates that the component should be rendered on the client-side.
import BlogView from '@/components/BlogView/BlogView'; 
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Blog() {  // Functional component Blog that fetches and displays blog posts.
  // State variable to store the blog posts data.  Initialized as an empty array.
  const [blog, setBlog] = useState<{ id: number; title: string; body: string }[]>([]);

  useEffect(() => { // useEffect hook to fetch blog posts when the component mounts.
  getBlogPosts(); 
  }, []);// Empty dependency array ensures the effect only runs once.

   const getBlogPosts = async () => {   // Asynchronous function to fetch blog posts from an external API.
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetch data from API
    const data = await response.json(); // convert the response to JSON
    // Map the API response to a format suitable for the BlogView component.
    const blogData = data.map((item: { id: number; title: string; body: string }) => ({
      id: item.id,
      title: item.title,
      body: item.body,
    }));
    setBlog(blogData); // Update the state with the fetched data.
  };
  
  return (  // JSX to render the blog posts using the BlogView component.
    <div className='flex flex-wrap justify-center'> {/* Main container */}      
        {blog.map((item) => (
           <Link key={item.id} href={`/Blog/${item.id}`}><BlogView key={item.id} id={item.id} title={item.title} body={item.body} dataset={item} /></Link>
           // Map through blog posts and render each one.
        ))}    
    </div>
  );
}     
