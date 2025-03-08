import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#0A192F] text-[#CCD6F6] p-5 fixed w-full top-0 shadow-md z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-[#64FFDA]">
                    PORTFOLIO
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link to="/" className="hover:text-[#64FFDA] transition">Home</Link></li>
                    <li><Link to="/about" className="hover:text-[#64FFDA] transition">About</Link></li>
                    <li><Link to="/projects" className="hover:text-[#64FFDA] transition">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-[#64FFDA] transition">Contact</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center bg-[#0A192F] py-5 space-y-4">
                    <li><Link to="/" className="hover:text-[#64FFDA]" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className="hover:text-[#64FFDA]" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/projects" className="hover:text-[#64FFDA]" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-[#64FFDA]" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
