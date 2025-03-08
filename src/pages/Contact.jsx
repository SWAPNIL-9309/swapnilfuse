import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter a valid email!");
            return;
        }

        const serviceId = "service_14tj7nw";
        const templateId = "template_oaocce8";
        const publicKey = "s9uGB7IK0cDD2AWSS";

        const templateParams = {
            visitor_email: email,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
                setMessage("Thanks for connecting! I'll reach out soon.");
                setEmail("");
            })
            .catch(() => setMessage("Something went wrong. Try again!"));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A192F] text-[#CCD6F6] px-6 md:px-12 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#64FFDA] mb-8">Contact Me</h2>

            {/* Social Media Links */}
            <div className="flex space-x-6 mb-8">
                <a href="https://github.com/SWAPNIL-9309" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl hover:text-[#64FFDA] transition-all" />
                </a>
                <a href="https://www.linkedin.com/in/swapnil-fuse-839b6725a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl hover:text-[#64FFDA] transition-all" />
                </a>
                <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-3xl hover:text-[#64FFDA] transition-all" />
                </a>

            </div>

            {/* Connect Me Section */}
            <div className="bg-[#112240] p-6 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-xl font-semibold text-[#64FFDA] text-center mb-4">Connect with Me</h3>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="p-3 w-full rounded-md bg-[#0A192F] text-white border border-[#64FFDA] focus:ring-2 focus:ring-[#64FFDA] outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-[#64FFDA] text-[#0A192F] px-6 py-2 rounded-md font-semibold hover:bg-[#52e6c2] transition-all"
                    >
                        Connect
                    </button>
                </form>
                {message && <p className="text-center text-[#64FFDA] mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default Contact;
