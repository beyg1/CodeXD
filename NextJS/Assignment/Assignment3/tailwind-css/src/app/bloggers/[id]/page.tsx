import React from "react";
import { bloggersID } from "@/bloggersID";

type blogProps = {
    params:{
      id:string;
    };
  };

  const findBlogsDetail = (id:number) => {
    return bloggersID.find((item)=>{
      return item.id==id;
    });
   
    };

    function blogDetail({params}:blogProps) {
        const blog = findBlogsDetail(Number(params.id));
        return (
          <div className="font-bold p-48 ">Blog Detail:
            <div className='py-5 text-xl'><h1>Name: {blog?.name}</h1>
                 <h2>Age: {blog?.age}</h2>
                 <h2>ID: {blog?.id}</h2>
            </div>
          </div>
        )
      }
      
      export default blogDetail