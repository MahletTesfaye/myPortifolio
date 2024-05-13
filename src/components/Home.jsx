import React, { useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { Image } from "react-bootstrap";
import client from "../lib/appwrite";
import { Databases } from "appwrite";

const database = new Databases(client);
const Home = () => {
    const [data, setData] = React.useState([]);

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
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-y-5">
            <div className="text-center flex flex-col justify-center items-center sm:w-1/2 text-black">
                <div className="bold text-2xl">
                    Hi, I'm <b className="text-[var(--primary-medium)]">MAHLET TESFAYE</b>
                </div>
                <div>Software Information and Technology Engineering (SITE),</div>
                <div>software stream student, AAiT</div>
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
            <Image src="/my_photo.svg" className="mt-5 sm:w-1/2" alt="My Photo" />
        </div>
    );
};

export default Home;