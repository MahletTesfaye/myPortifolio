import React, { useEffect, useState } from "react";
import { Databases } from "appwrite";
import client from "../lib/appwrite";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

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
        <div className="flex flex-col lg:flex-row text-[14px] m-[5%] gap-x-16 gap-y-5 ">
            <div className="lg:w-1/2 my-auto">
                <div className="text-[24px] mb-[3%] font-bold">OVER<span className="text-[var(--primary-medium)]">VIEW</span></div>
                <div>
                    I am a software and information system technology (SITE) (Software stream) student  in AAiT, Addis Ababa, Ethiopia.
                </div>
                <div>
                    After in depth understanding of the course and department, I am getting more interested and excited about computer software, new technologies and the team work.
                </div>
                <div>
                    <div className="mt-5 font-bold sm:text-lg text-[var(--primary-medium)] ">
                        <button
                            className="focus:outline-none w-full border flex justify-between px-7 rounded-lg items-center shadow"
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
                                <li>AAiT, Addis Ababa</li>
                                <li>Software Information and Technology Engineering (SITE), Software stream</li>
                                <li>Expected Graduation Year: 2025 GC</li>
                                <li>GPA: 3.5</li>
                            </ol>
                        </div>
                    )}

                    <div className="mt-5 font-bold sm:text-lg text-[var(--primary-medium)]">
                        <button
                            className="focus:outline-none w-full text-start border flex justify-between px-7 rounded-lg items-center shadow"
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
                                <li>I was tutoring grade 4, 8 and 10 students in Addis Ababa in 2015 EC.</li>
                                <li>Participating and developing team leadership in 'Gbi Gubae' (activities in orthodox church through the university collaborating with ‘Mahibere Kidusan').</li>
                            </ol>
                        </div>
                    )}
                </div>
            </div>

            <div className="lg:w-1/2">
                <div className="text-[24px] mb-[3%] font-bold">SK<span className="text-[var(--primary-medium)]">ILL</span></div>
                {data && data.map((item) => (
                    <div key={item.$id} className="relative border p-3 overflow-hidden rounded-xl shadow-lg my-2">
                        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#962BAC_20deg,transparent_120deg)]"></div>
                        <div className="grid sm:grid-cols-3 gap-2 bg-white p-2 relative -m-2.5 rounded-lg ">
                            <div className="relative sm:col-span-1">
                                <b>{item.Topic}</b>
                            </div>
                            <div className="sm:col-span-2 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 w-full gap-1.5">
                                {item.List_of_skills.map((skill) => (
                                    <div key={skill} className="py-1.5 text-center shadow-lg border rounded-lg hover:-rotate-3 cursor-pointer h-fit">
                                        <div className="font-semibold text-[var(--primary-medium)]">{skill}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;
