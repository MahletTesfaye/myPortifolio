import React from "react";
import { MdEmail } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { BiUpArrowCircle } from "react-icons/bi";
import { Link } from "react-scroll";

function Footer() {
    return (
        <div className="w-full font-bold pt-7 text-[14px] flex justify-around text-white h-14 sticky bottom-0 bg-gradient-to-t from-[var(--primary-dark)] to-transparent ">
            <FaHandPointRight size={25} className='absolute bottom-0.5 left-0.5 -rotate-12' />
            <FaHandPointLeft size={25} className='absolute bottom-0.5 right-0.5 rotate-12' />
            <Link to="Home" className="absolute bottom-10 right-6 hover:animate-bounce cursor-pointer"><BiUpArrowCircle size={25} color="#962BAC" /></Link>
            <a href="https://mail.google.com/mail/u/0/?ogbl#inbox" target="_blank" rel="noreferrer" className="flex">
                <MdEmail />
                <div className="hidden md:block md:ml-2">mahlettenayeah94@gmail.com</div>
            </a>
            <a href="https://github.com/MahletTesfaye" target="_blank" rel="noreferrer" className="flex">
                <VscGithubInverted />
                <div className="hidden md:block md:ml-2">Github</div>
            </a>
            <a href="https://www.linkedin.com/in/mahit94" target="_blank" rel="noreferrer" className="flex">
                <FaLinkedin />
                <div className="hidden md:block md:ml-2">Linkedin</div>
            </a>
            <a href="tel:+251984031038" className="flex">
                <BsTelephone />
                <div className="hidden md:block md:ml-2"> +251-98-403-1038</div>
            </a>
        </div>
    )
}

export default Footer;