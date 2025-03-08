import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#0A192F] text-[#CCD6F6] px-6 md:px-16">

            {/* Hero Section */}
            <div className="text-center">
                <motion.img
                    src="./profile2.jpeg"
                    alt="Profile.jpeg"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-[#64FFDA] mx-auto shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />

                <h1 className="text-3xl sm:text-5xl font-bold text-[#64FFDA] mt-6">
                    Hi, I'm Swapnil Fuse
                </h1>

                <h2 className="text-lg sm:text-2xl text-gray-400 mt-2">
                    Frontend Web Developer
                </h2>

                <p className="text-sm sm:text-lg text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed">
                    Passionate about creating interactive and responsive web experiences.
                    Skilled in <span className="text-[#64FFDA] font-semibold">HTML, CSS, JavaScript, React, and TailwindCSS.</span>
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex space-x-4">
                <Link
                    to="/projects"
                    className="px-6 py-3 bg-[#64FFDA] text-[#0A192F] font-semibold rounded-md shadow-md hover:bg-[#52e6c2] transition-all"
                >
                    View Projects
                </Link>

                <Link
                    to="/contact"
                    className="px-6 py-3 border border-[#64FFDA] text-[#64FFDA] font-semibold rounded-md shadow-md hover:bg-[#112240] transition-all"
                >
                    Connect with Me
                </Link>
            </div>

            {/* Background Animation for Mobile */}
            <div className="absolute inset-0 z-[-1] flex justify-center items-center opacity-10">
                <motion.div
                    className="w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-[#64FFDA] blur-3xl opacity-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                />
            </div>
        </div>
    );
};

export default Home;
