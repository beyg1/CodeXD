two type of data fetching: serverside fetching & client-side fetching
schema folder made in schemaTypes folder
custom schema's made in schema folder are then imported in index.ts of schemaTypes
how to write schemas? check sanity documentation
groq querry language for sanity to develop web hooks

to show the blogs on nextjs page go to page.tsx and import client form lib
fetch blogs through groq querry
for images import urlForImage
=> import Image

in nextconfig.mjs add =>  images: {
    remotePatterns: [
      {
       
        hostname: 'cdn.sanity.io',
       
      },
    ],
  },
                                            detailed Steps
1. Create nextjs proj, then create new proj in sanity account. intitialize your next proj with command given in sanity proj.
2. page.tsx in studio, sanity folder, lib folder, env.ts & struct.ts in sanity folder will be automatically created.
3. Creating schema: make schemaTypes folder in sanity with index.ts file. in schemaTypes create schema folder to create
   different schemas. downlod schema code from sanity.io/learn
4. Import the created schema to index.ts file of schemaTypes, formerly schema.ts.
5. Upuntil now your headless cms backend is setup and now youre uploading data to your db, which is sanity. NOW, to           
   return data from sanity to your front-end page.tsx, you will have to right querry for sanity which is in 
   groq. (cheat sheet available on sanity website for groq querry)
            like this block of code in main page.tsx :
               const getBlogPosts = async () => {
               return client.fetch('*[_type == "blog"]')
             } you will go in vision section of sanity studio, write querry "*[_type=="blog"]" and hit fetch to see if working.
6. Then map the blogs in a div with a unique key, usually _id made by sanity itself and voila!
                          