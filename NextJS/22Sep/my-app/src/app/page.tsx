import { client } from "../sanity/lib/client"
import { urlForImage } from "../sanity/lib/image"
import  Image  from "next/image"

const getBlogPosts = async () => {
  return client.fetch('*[_type == "blog"]')
}

interface blogType {
  _id: string;
  Title: string;
  Description: string;
  Image: string;
}

export default async function Home() {
  const blogs = await getBlogPosts()
  return ( 
    <main>
    <div className="flex justify-center items-center p-5">
      <h1 className="font-bold text-3xl">Sanity Class</h1>
    </div>
    <div className="flex gap-5">
      {blogs.map((blog: blogType )=>(
        <div key={blog._id} className="border rounded-md shadow-lg p-5">
          
            <h1 className="text-2xl font-semibold">{blog.Title}</h1>
            <br />
            <p>{blog.Description}</p>
            <br />
            <Image src={urlForImage(blog.Image).url()} alt={blog.Title} height={300} width={500} className="p-5" />
            
        </div>
      ))}
      </div>
    </main>  
  );
}
