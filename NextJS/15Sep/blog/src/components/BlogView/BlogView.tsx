// Import necessary modules from React and Next.js
import React from 'react';
import Image from 'next/image';

// Define the interface for BlogViewProps, specifying the types of title and body.
interface BlogViewProps {
  id: number;
  title: string; // Title of the blog post (string)
  body: string;   // Body content of the blog post (string)
  dataset: { id: number; title: string; body: string };
}

// Functional component BlogView that takes BlogViewProps as input.
export default function BlogView({ title, body }: BlogViewProps) {
  // JSX to render the blog post.
  return (
    <div> {/* Outer container div */}
      <div className="flex"> {/* Flex container for layout */}
        <div className="max-w-lg rounded shadow-lg bg-white m-4"> {/* Card styling */}
          {/* Image component to display a placeholder image */}
          <Image
            className="w-full" // Full width image
            src="https://via.placeholder.com/400x200" // Placeholder image URL
            alt="Blog Image" // Alt text for accessibility
            width={400} // Image width
            height={200} // Image height
          />

          {/* Div for blog post content */}
          <div className="px-6 py-4"> {/* Padding */}
            <div className="font-bold text-xl mb-2"> {/* Title styling */}
              Title: {title} {/* Display the title */}
            </div>
            <p className="text-gray-700 text-base"> {/* Body text styling */}
              Blog Body: {body} {/* Display the blog body */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
