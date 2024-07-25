import React, { useState } from "react";
import { Link } from 'react-scroll';
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const TopBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between shadow-md bg-white items-center px-[5%] sticky top-0 z-10 w-full">
            <Link to="Home" offset={-70} className="flex cursor-pointer my-2.5">
                <div>
                    <img src="/M_logo.svg" alt="Logo" className="animate-bounce" />
                    <hr className="w-9 h-1 bg-[var(--primary-dark)]" />
                </div>
                <b className="mt-auto text-[var(--primary-medium)]">MahiT</b>
            </Link>
            <nav>
                <div className="block lg:hidden" onClick={handleNav}>
                    {nav ? <IoClose /> : <RxHamburgerMenu />}
                </div>
                <ul className={`absolute top-full py-5 right-0 w-full bg-white z-10 flex flex-col items-center lg:static lg:flex lg:flex-row gap-5 border-t-2 lg:border-0 lg:items-center ${nav ? 'block' : 'hidden'}`}>
                    <li><Link to='Home' className="nav_link" offset={-70} onClick={handleNav} >Home</Link></li>
                    <li><Link to='Aboutme' className="nav_link" offset={-70} onClick={handleNav} >Aboutme</Link></li>
                    <li><Link to='Projects' className="nav_link" offset={-70} onClick={handleNav} >Projects</Link></li>
                    <li><Link to='Blog' className="nav_link" offset={-70} onClick={handleNav} >Blog</Link></li>
                    <li><Link to='Contactme' className="cursor-pointer button2" offset={-70} onClick={handleNav} >Contactme</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default TopBar;