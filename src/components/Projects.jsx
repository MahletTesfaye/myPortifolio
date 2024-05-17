import React, { useEffect, useState } from "react";
import client from "../lib/appwrite";
import { CCard, CCardBody, CCardTitle, CCardText, CButton } from "@coreui/react";
import { Databases, Query } from "appwrite";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const database = new Databases(client);

const fetchProjects = async () => {
    try {
        const response = await database.listDocuments("662d22e1001dddbf3529", "662d23010039fc4962a6", [Query.orderDesc("$createdAt")]);
        return response.documents;
    } catch (error) {
        console.error(error);
    }
}

const Projects = () => {
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProjects();
            setProjects(data)
        }
        fetchData();
    }, [])
    const toggleLoadMore = () => {
        setIsLoadMore((previous) => !previous);
    };
    return (
        <div className="bg-[var(--primary-dark)] text-white">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 p-[5%] gap-10 items-start">
                {
                    projects?.slice(0, isLoadMore ? projects.length : (window.innerWidth >= 1024 ? 3 : 2)).map((item) => (
                        <div key={item.$id} className="relative group hover:scale-105 transition-all duration-300 h-full">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-300 to-violet-300 rounded-lg blur opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 h-full"></div>

                            <CCard className="relative bg-[var(--primary-dark)] shadow shadow-white rounded-xl p-[3%] w-full h-full transition-opacity duration-300">
                                <div
                                    className="CCardImage"
                                    style={{
                                        backgroundImage: `url(${item.Image_src})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        height: '12rem',
                                        width: 'auto',
                                    }}
                                ></div>
                                <CCardBody className="py-[3%] text-center">
                                    <CCardTitle><b>{item.title}</b></CCardTitle>
                                    <div className="text-start mb-3">
                                        <CCardText>&#8226; {item.description}</CCardText>
                                        <CCardText>&#8226; {item.language.join(', ')}</CCardText>
                                    </div>
                                    <CButton className="button3" href={item.link} target="_blank">Github Link</CButton>
                                </CCardBody>
                                {
                                    item.view_site && <a href={item.view_site} target="_blank" rel="noreferrer" className="absolute top-2.5 right-2.5 flex items-center gap-1 justify-center px-1 rounded cursor-pointer text-white text-lg font-bold bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View <FaArrowUpRightFromSquare size={13} />
                                    </a>
                                }
                            </CCard>

                        </div>
                    ))
                }
            </div>
            <div className="font-bold flex justify-center w-full items-center pb-4 cursor-pointer" onClick={toggleLoadMore} >
                {
                    isLoadMore ? <>Show less <MdExpandLess className="hover:animate-bounce" /></> : <>Load more <MdExpandMore className="hover:animate-bounce" /></>
                }
            </div>
        </div>
    )
}

export default Projects;