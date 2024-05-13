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
                <Link to="Home" className="flex cursor-pointer my-2.5">
                    <div>
                        <img src="/M_logo.svg" alt="Logo" className="animate-bounce" />
                        <hr className="w-9 h-1 bg-[var(--primary-dark)]" />
                    </div>
                    <b className="mt-auto text-[var(--primary-medium)]">MahiT</b>
                </Link>
                <nav className="nav__container__actions">
                    <ul className="flex my-3 items-center">
                        <li><Link to='Home' className="nav_link">Home</Link></li>
                        <li><Link to='Aboutme' className="nav_link">Aboutme</Link></li>
                        <li><Link to='Projects' className="nav_link">Projects</Link></li>
                        <li><Link to='Blog' className="nav_link">Blog</Link></li>
                        <li><Link to='Contactme' className=" cursor-pointer button2 hidden md:block">Contactme</Link></li>
                        {
                            nav ? <MdOutlineClear onClick={handleNav} className=" md:hidden size-5 cursor-pointer" /> : <FaBars onClick={handleNav} className=" md:hidden size-4 cursor-pointer" />
                        }
                    </ul>
                </nav>
            </div>
            <ul className={`md:hidden bg-white border-y-2 py-3 ${nav ? "flex flex-col shadow items-center " : 'hidden'}`}>
                <li><Link to='Home' className="nav_link2">Home</Link></li>
                <li><Link to='Aboutme' className="nav_link2">Aboutme</Link></li>
                <li><Link to='Projects' className="nav_link2">Projects</Link></li>
                <li><Link to='Blog' className="nav_link2">Blog</Link></li>
                <li><Link to='Contactme' className=" button2">Contactme</Link></li>
            </ul>
        </div>
    );
}

export default TopBar;