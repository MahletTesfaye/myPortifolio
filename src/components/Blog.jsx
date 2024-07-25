import React, { useEffect } from "react";
import { Databases, Query } from "appwrite";
import client from "../lib/appwrite";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";

const database = new Databases(client)

const Blog = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await database.listDocuments('662d22e1001dddbf3529', '662d231c002c59397c3d', [Query.orderDesc('$createdAt')]);
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
          <motion.div key={item.$id} className='flex flex-col md:flex-row m-[5%] p-[3%] border shadow-md rounded-xl gap-5 justify-around items-center align-middle'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}>
            <div><Image src={item.Image} className="h-[15rem] w-auto object-contain" /></div>
            <div className="md:w-1/2">
              <b className="text-xl">{item.Title}</b>
              <p >{item.Description}</p>
            </div>
          </motion.div>
        ))
      }
    </>
  )
}

export default Blog
