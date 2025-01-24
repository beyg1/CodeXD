import { Raleway, Roboto_Mono } from 'next/font/google';
import Link from "next/link"; 
import Image from "next/image"; 
import { type SanityDocument } from "next-sanity"; 
import  client  from "../../sanity/lib/client"; 
import imageUrlBuilder from '@sanity/image-url'; 
import { SanityImageSource } from "@sanity/image-url/lib/types/types"; 

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)  
]|order(publishedAt desc)[0...3]{_id, title, slug, "publishedAt": publishedAt, mainImage, "authorName": author->name}`;

const options = { next: { revalidate: 30 } };

const builder = imageUrlBuilder(client); 

function urlFor(source: SanityImageSource) { 
  return builder.image(source); 
}

const fontA = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
const fontB = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options); 
  return (
    <main className="bg-[#c6b291] min-h-screen mt-8">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Use grid for better responsiveness */}
        {posts.map((recentPost) => ( 
          <li key={recentPost._id} className="border bg-[#e5eef0] border-black rounded-lg p-4">
            <Link href={`/${recentPost.slug.current}`}>
              <div className="flex flex-col">
                <h2 className={`text-xl font-semibold p-2 ${fontA.className}`}>{recentPost.title}</h2>
                {recentPost.mainImage && (
                  <div className="relative h-[200px] md:h-[250px] overflow-hidden"> {/* Use relative and overflow-hidden */}
                    <Image
                      src={urlFor(recentPost.mainImage).url()} 
                      alt={recentPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className={`flex flex-col md:flex-row justify-between p-2 ${fontB.className}`}>
                  <p className="text-center md:text-left">
                    {recentPost.publishedAt 
                      ? new Date(recentPost.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                      : 'Date not available'}
                  </p>
                  <p className="text-center md:text-right">
                    {recentPost.authorName || 'Author not available'}
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
