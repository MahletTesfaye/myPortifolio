import React, { useEffect, useState } from "react";
import { Databases } from "appwrite";
import client from "../lib/appwrite";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { motion } from "framer-motion";

const database = new Databases(client);

const About = () => {
    const [data, setData] = React.useState([]);
    const [isEducationExpanded, setIsEducationExpanded] = useState(false);
    const [isActivityExpanded, setIsActivityExpanded] = useState(false);

    const toggleEducation = () => {
        setIsEducationExpanded(!isEducationExpanded);
    };

    const toggleActivity = () => {
        setIsActivityExpanded(!isActivityExpanded);
    };
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await database.listDocuments("662d22e1001dddbf3529", "662d230f001ccba7f67e");
                setData(res.documents);
            } catch (error) {
                console.error(error);
                return "Unable to fetch data";
            }
        }
        fetchSkills();
    })

    return (
        <div className="flex flex-col md:flex-row text-[14px] m-[5%] gap-x-16 gap-y-5">
            <div className="md:w-1/2 rounded-xl before:rounded-xl bg-gradient-to-r from-[var(--primary-dark)] to-white lg:-rotate-3 my-auto py-16 before:-skew-y-3 before:bg-gradient-to-r before:from-[var(--primary-medium)] before:to-white backdrop-blur-lg before:-ml-[10%] before:absolute before:inset-1">
                <motion.div className="relative pr-[10%]"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>
                    <div className="text-[24px] mb-[3%] font-bold">OVER<span className="text-[var(--primary-medium)]">VIEW</span></div>
                    <div>
                    I am an experienced Full-Stack Developer with a strong foundation in building visually appealing, user-centered applications across multiple platforms. With expertise in front-end frameworks like React and Next.js, cross-platform mobile development in Flutter, and UI/UX design in Figma, I bring a comprehensive approach to creating engaging digital experiences. My skill set enables me to manage the full development lifecycle.
                    </div>
                    <div>
                        <div className="mt-5 font-bold sm:text-lg text-[var(--primary-dark)] ">
                            <button
                                className="focus:outline-none w-full flex justify-between px-7 rounded-lg items-center shadow-lg border"
                                onClick={toggleEducation}
                            >
                                Education
                                {
                                    isEducationExpanded ? <TiArrowSortedUp /> : <TiArrowSortedDown />
                                }
                            </button>
                        </div>
                        {isEducationExpanded && (
                            <div className="mt-2 px-7 border rounded-lg shadow">
                                <ol className="list-disc list-inside">
                                    <li>Bachelor's degree, Software Engineering</li>
                                    <li>AAiT, Addis Ababa University</li>
                                    <li>CGPA: 3.5</li>
                                </ol>
                            </div>
                        )}

                        <div className="mt-5 font-bold sm:text-lg text-[var(--primary-dark)]">
                            <button
                                className="focus:outline-none w-full text-start border flex justify-between px-7 rounded-lg items-center shadow-lg"
                                onClick={toggleActivity}
                            >
                                Extracurricular Activity
                                {
                                    isActivityExpanded ? <TiArrowSortedUp /> : <TiArrowSortedDown />
                                }
                            </button>
                        </div>
                        {isActivityExpanded && (
                            <div className="mt-2 px-7 border rounded-lg shadow">
                                <ol className="list-disc list-inside">
                                    <li>Drawing</li>
                                    <li>Giving tutor for grade 4, 8, 10 and 11 students in Addis Ababa.</li>
                                </ol>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            <motion.div className="md:w-1/2"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>
                <div className="text-[24px] mb-[3%] font-bold">SK<span className="text-[var(--primary-medium)]">ILL</span></div>
                {data && data.map((item) => (
                    <div key={item.$id} className="relative border p-3 overflow-hidden rounded-xl shadow-lg my-2">
                        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#962BAC_20deg,transparent_120deg)]"></div>
                        <div className="grid sm:grid-cols-3 gap-2 bg-white p-2 relative -m-2.5 rounded-lg ">
                            <div className="relative sm:col-span-1">
                                <b>{item.Topic}</b>
                            </div>
                            <div className="sm:col-span-2 flex flex-wrap w-full gap-1.5">
                                {item.List_of_skills.map((skill) => (
                                    <div key={skill} className="py-1.5 px-2.5 text-center shadow-lg border rounded-lg hover:-rotate-3 cursor-pointer h-fit">
                                        <div className="font-semibold text-[var(--primary-medium)]">{skill}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default About;
