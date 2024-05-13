import React, { useEffect } from "react";
import { Databases } from "appwrite";
import client from "../lib/appwrite";
import { Image } from "react-bootstrap";

const database = new Databases(client)

const Blog = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await database.listDocuments('662d22e1001dddbf3529', '662d231c002c59397c3d');
        setData(res.documents);
      } catch (error) {
        console.error(error);
        return 'Unable to fetch data';
      }
    }
    fetchBlog();
  })
  return (
    <>
      {
        data && data.map((item) => (
          <div key={item.$id} className='flex flex-col md:flex-row m-[5%] p-[2%] border shadow-md rounded-xl  justify-around items-center align-middle'>
            <div><Image src={item.Image} className="h-[15rem] w-auto object-contain" /></div>
            <div className="md:w-1/2">
              <b className="text-xl">{item.Title}</b>
              <p >{item.Description}</p>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Blog
