import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import  client  from "../../sanity/lib/client";
import Image from "next/image";


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(720).height(720).url()
    : null;

  return (    
    <main className="mx-auto gap-5 bg-[#c6b291] min-h-screen flex flex-col">
      {postImageUrl && (
        <Image
        src={postImageUrl}
        alt={post.title}
        width={600} // Explicitly set the width
        height={480} // Explicitly set the height
        className="mx-auto my-4 rounded-3xl"
        style={{ width: '600px', height: '480px' }} // Optional: keep for styling if needed
      />
      
      )}
      <h1 className="text-4xl p-4 gap-4 mx-auto font-bold mb-8">{post.title}</h1>
      <div className="mx-4 md:mx-28 text-justify text-2xl">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        <br />
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
