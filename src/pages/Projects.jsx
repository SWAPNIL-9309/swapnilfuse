import React from "react";
import image from "../assets/LOGO.jpeg"
const Projects = () => {
    return (
        <div className="min-h-screen bg-[#0A192F] text-[#CCD6F6] px-6 md:px-12 lg:px-20 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#64FFDA] text-center mb-12">
                My Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Project 1: Daily Dose of Engineering */}
                <div className="relative bg-[#112240]/80 backdrop-blur-md p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                    <img
                        src={image}// Replace with your logo
                        alt="Daily Dose of Engineering"
                        className="w-24 h-24 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-[#64FFDA] text-center">
                        Daily Dose of Engineering
                    </h3>
                    <p className="text-[#8892B0] mt-4 text-center">
                        A web app providing short notes for engineering students, covering DBMS, OOP, DSA, and more.
                        Useful for IT professionals and students.
                    </p>
                    <div className="flex justify-center mt-6">
                        <a
                            href="https://daily-dose-of-enginn-4pq9.glide.page/" // Replace with actual link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#64FFDA] text-[#0A192F] px-6 py-2 rounded-md font-semibold hover:bg-[#52e6c2] transition-all"
                        >
                            View Project
                        </a>
                    </div>
                </div>

                {/* Project 2: Portfolio Website */}
                <div className="relative bg-[#112240]/80 backdrop-blur-md p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                    <img
                        src='' // Your portfolio logo image
                        alt="Portfolio Website"
                        className="w-24 h-24 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-[#64FFDA] text-center">
                        Portfolio Website
                    </h3>
                    <p className="text-[#8892B0] mt-4 text-center">
                        A personal portfolio showcasing skills, projects, and contact details with a modern, responsive design.
                        Built with React & Tailwind CSS.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
