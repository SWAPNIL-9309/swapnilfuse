import React from "react";
const About = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#0A192F] text-[#CCD6F6] px-6 md:px-12 lg:px-20 py-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
                <img
                    src='./profile.jpeg'// Replace with your image
                    alt="Your Name"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
                />
            </div>

            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#64FFDA]">
                    About Me
                </h2>
                <p className="text-[#8892B0] mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
                    I am a passionate <span className="text-[#64FFDA]">Frontend Web Developer</span> with a strong foundation in
                    <span className="text-[#64FFDA]"> HTML, CSS, JavaScript, React, and Tailwind CSS</span>.
                </p>

                <h3 className="text-2xl font-semibold mt-6 text-[#64FFDA]">Education</h3>
                <p className="text-[#8892B0] text-sm sm:text-base md:text-lg leading-relaxed">
                    I am pursuing pursued my education in Information Technology from International Institute of Information Technology , where I developed a solid understanding of
                    <span className="text-[#64FFDA]"> Data Structures, Algorithms, and Software Development</span>.
                    My academic background helps me build efficient, scalable, and user-friendly web applications.
                </p>

                <h3 className="text-2xl font-semibold mt-6 text-[#64FFDA]">Passion for Coding</h3>
                <p className="text-[#8892B0] text-sm sm:text-base md:text-lg leading-relaxed">
                    I love solving complex problems through code and creating engaging web experiences.
                    Whether it's designing responsive UI or optimizing performance, I strive to build
                    <span className="text-[#64FFDA]"> clean, maintainable, and high-quality software solutions</span>.
                </p>
            </div>
        </div>
    );
};

export default About;
