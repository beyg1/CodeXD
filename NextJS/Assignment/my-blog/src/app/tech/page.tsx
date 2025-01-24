import Link from "next/link"; //
import Image from "next/image"; // Import the Image component from Next.js
import { type SanityDocument } from "next-sanity"; //
import  client  from "../../sanity/lib/client"; // Import the Sanity client
import imageUrlBuilder from '@sanity/image-url'; // Import the image URL builder
import { SanityImageSource } from "@sanity/image-url/lib/types/types"; // Import the SanityImageSource type


const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && "Tech" in categories[]->title
]|order(publishedAt desc)[0...12]{_id, title, slug, "publishedAt": publishedAt, mainImage, "authorName": author->name}`;

const options = { next: { revalidate: 30 } };

// Create a URL builder instance
const builder = imageUrlBuilder(client); // Pass in the Sanity client

function urlFor(source: SanityImageSource) { // Define the urlFor function
  return builder.image(source); // Return the image URL
}

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options); // Fetch posts

  return (
    <main className="mx-auto bg-[#c6b291] min-h-screen p-10">
      <ul className="flex flex-wrap gap-6 justify-center">
        {posts.map((post) => (
          <li key={post._id} className="w-full sm:w-[450px] flex-shrink-0">
            <Link href={`/${post.slug.current}`}>
              <div className="flex flex-col justify-between h-full border bg-[#e5eef0] border-black rounded-lg overflow-hidden">
                <h2 className="text-xl font-semibold p-4">{post.title}</h2>
                {post.mainImage && (
                  <div className="h-[250px] overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).url()} // Use the URL builder to get the image URL
                      alt={post.title}
                      width={500} // Match the width of the container
                      height={250} // Set a fixed height
                      className="object-cover w-full h-full" // Ensure the image covers the container without distortion
                    />
                  </div>
                )}
                <div className="flex justify-between p-4">
                  <p>
                    {post.publishedAt 
                      ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                      : 'Date not available'}
                  </p>
                  <p className="text-right">
                    {post.authorName || 'Author not available'}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
