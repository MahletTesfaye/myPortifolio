import React, { useState, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
// import { Image } from "react-bootstrap";
import client from "../lib/appwrite";
import { Databases } from "appwrite";
import { motion } from 'framer-motion';

const database = new Databases(client);
const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const res = await database.listDocuments(
                    "662d22e1001dddbf3529",
                    "66412684001038a68a07"
                );
                setData(res.documents);
            } catch (error) {
                console.error(error);
                return "Unable to fetch data";
            }
        };

        fetchResume();
    }, []);

    return (
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-10">
            <motion.div className='my-auto sm:w-1/2 pl-[5%]' initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} >
                <div className="text-black text-center">
                    <div className="bold text-2xl hover:after:content-['_😎']">
                        Hi, I'm <b className="text-[var(--primary-medium)]">MAHLET TESFAYE</b>
                    </div>
                    <div className="text-lg mt-1">FULL-STACK DEVELOPER</div>
                    <div>UI/UX Designer | Wordpress Developer | Frontend Developer | Backend Developer</div>
                </div>
                <div className="flex justify-center">
                    {
                        data.map((item) => (
                            <a
                                key={item.$id}
                                className="button"
                                target="_blank"
                                href={item.resume_paper}
                                rel="noreferrer"
                            >
                                <div className="flex gap-1">
                                    Resume <IoMdDownload className="mt-0.5" size={20} />
                                </div>
                            </a>
                        ))
                    }
                </div>
            </motion.div>
            <motion.img src="/my_photo.svg" alt="My Photo" className='mt-5 sm:w-1/2' initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} />
        </div>
    );
};

export default Home;