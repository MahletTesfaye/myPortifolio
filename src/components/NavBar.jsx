import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { MdOutlineClear } from "react-icons/md";

const TopBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="sticky top-0 z-10 w-full">
            <div className="flex justify-between shadow-md bg-white items-center px-[5%] nav">
                <Link to="Home" offset={-70} className="flex cursor-pointer my-2.5">
                    <div>
                        <img src="/M_logo.svg" alt="Logo" className="animate-bounce" />
                        <hr className="w-9 h-1 bg-[var(--primary-dark)]" />
                    </div>
                    <b className="mt-auto text-[var(--primary-medium)]">MahiT</b>
                </Link>
                <nav className="nav__container__actions">
                    <ul className="flex my-3 items-center">
                        <li><Link to='Home' className="nav_link" offset={-70} >Home</Link></li>
                        <li><Link to='Aboutme' className="nav_link" offset={-70}>Aboutme</Link></li>
                        <li><Link to='Projects' className="nav_link" offset={-70}>Projects</Link></li>
                        <li><Link to='Blog' className="nav_link" offset={-70}>Blog</Link></li>
                        <li><Link to='Contactme' className="cursor-pointer button2 hidden md:block" offset={-70}>Contactme</Link></li>
                        {
                            nav ? <MdOutlineClear onClick={handleNav} className=" md:hidden size-4 cursor-pointer" /> : <FaBars onClick={handleNav} className=" md:hidden size-4 cursor-pointer" />
                        }
                    </ul>
                </nav>
            </div>
            <ul className={`md:hidden bg-gradient-to-r from-[var(--primary-light)] via-white to-[var(--primary-light)] border-y-2 py-3 ${nav ? "flex flex-col shadow items-center " : 'hidden'}`}>
                <li><Link to='Home' className="nav_link2" offset={-70} onClick={handleNav}>Home</Link></li>
                <li><Link to='Aboutme' className="nav_link2" offset={-70} onClick={handleNav}>Aboutme</Link></li>
                <li><Link to='Projects' className="nav_link2" offset={-70} onClick={handleNav}>Projects</Link></li>
                <li><Link to='Blog' className="nav_link2" offset={-70} onClick={handleNav}>Blog</Link></li>
                <li><Link to='Contactme' className=" button2" offset={-70} onClick={handleNav}>Contactme</Link></li>
            </ul>
        </div>
    );
}

export default TopBar;