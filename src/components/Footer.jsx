import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#0A192F] text-[#CCD6F6] py-6">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">

                {/* Quick Navigation Links */}
                <nav className="mb-4">
                    <ul className="flex space-x-6 text-sm sm:text-base">
                        <li><Link to="/about" className="hover:text-[#64FFDA]">About</Link></li>
                        <li><Link to="/projects" className="hover:text-[#64FFDA]">Projects</Link></li>
                        <li><Link to="/contact" className="hover:text-[#64FFDA]">Contact</Link></li>
                    </ul>
                </nav>

                {/* Social Media Icons */}
                <div className="flex space-x-6 mb-4">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-xl hover:text-[#64FFDA] transition-all" />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-xl hover:text-[#64FFDA] transition-all" />
                    </a>
                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-xl hover:text-[#64FFDA] transition-all" />
                    </a>
                    <a href="mailto:your-email@example.com">
                        <FaEnvelope className="text-xl hover:text-[#64FFDA] transition-all" />
                    </a>
                </div>

                {/* Copyright Text */}
                <p className="text-sm">&copy; {new Date().getFullYear()} Swapnil fuse. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
