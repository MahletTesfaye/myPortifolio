import React, { useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { Image } from "react-bootstrap";
import client from "../lib/appwrite";
import { Databases } from "appwrite";

const database = new Databases(client);
const Home = () => {
    const [data, setData] = React.useState([]);
    const [isScreenActive, setIsScreenActive] = React.useState(true);

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
        const handleScreenActive = () => {
            setIsScreenActive(true);
        };

        const handleScreenInactive = () => {
            setIsScreenActive(false);
        };

        window.addEventListener('focus', handleScreenActive);
        window.addEventListener('blur', handleScreenInactive);

        return () => {
            window.removeEventListener('focus', handleScreenActive);
            window.removeEventListener('blur', handleScreenInactive);
        };
    }, []);

    return (
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-y-5">
            <div className={`my-auto sm:w-1/2 ${isScreenActive ? 'slide-in-left' : 'hidden'}`}>
                <div className="text-black text-center px-10">
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
            </div>
            <Image src="/my_photo.svg" className={`mt-5 sm:w-1/2 ${isScreenActive ? 'slide-in-right' : 'hidden'}`} alt="My Photo" />
        </div>
    );
};

export default Home;