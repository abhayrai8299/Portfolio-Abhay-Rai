import React from "react";

interface ContactInfo {
    icon: string;
    title: string;
    content: string | React.ReactNode;
    bgColor: string;
    iconColor: string;
}

interface SocialLink {
    icon: string;
    href: string;
    hoverColor: string;
    name: string;
}

const ContactInfoCard = ({ info }: { info: ContactInfo }) => {
    return (
        <div className="flex items-start">
            <div
                className={`w-10 h-10 rounded-full ${info.bgColor} flex items-center justify-center mr-4 mt-1 glow`}
            >
                <i className={`${info.icon} ${info.iconColor}`}></i>
            </div>
            <div>
                <h4 className="font-medium text-gray-300 mb-1">{info.title}</h4>
                {typeof info.content === "string" ? (
                    <p className="text-gray-400">{info.content}</p>
                ) : (
                    info.content
                )}
            </div>
        </div>
    );
};

const SocialLinks = ({ links }: { links: SocialLink[] }) => {
    return (
        <div className="flex-col space-y-3">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div key={index} className="flex items-center mb-4">
                        <div
                            key={index}
                            className={`w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white ${link.hoverColor} transition glow`}
                        >
                            <i className={link.icon}></i>
                        </div>
                        <span className="ml-4 text-gray-400">{link.name}</span>
                    </div>
                </a>
            ))}
        </div>
    );
};

const ContactForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none"
                    required
                />
            </div>
            <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none"
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className="text-gray-300 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:opacity-90 transition mt-4 glow"
            >
                Send Message
            </button>
        </form>
    );
};

const ContactSection = () => {
    const contactInfo: ContactInfo[] = [
        {
            icon: "fas fa-envelope",
            title: "Email",
            content: (
                <a
                    href="mailto:neyyilavarunraj123@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                >
                    neyyilavarunraj123@gmail.com
                </a>
            ),
            bgColor: "bg-cyan-900/30",
            iconColor: "text-cyan-400",
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Location",
            content: "Pune, India",
            bgColor: "bg-blue-900/30",
            iconColor: "text-blue-400",
        },
        {
            icon: "fas fa-phone",
            title: "Phone",
            content: (
                <a
                    href="tel:+917997151432"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                >
                    +91 79971 51432
                </a>
            ),
            bgColor: "bg-purple-900/30",
            iconColor: "text-purple-400",
        },
        {
            icon: "fab fa-whatsapp",
            title: "WhatsApp",
            content: (
                <a
                    href="https://wa.me/917997151432"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                >
                    +91 79971 51432
                </a>
            ),
            bgColor: "bg-green-900/30",
            iconColor: "text-green-400",
        },
    ];

    const socialLinks: SocialLink[] = [
        {
            icon: "fa-brands fa-github",
            href: "https://github.com/varunrobust",
            hoverColor: "hover:bg-cyan-500",
            name: "GitHub",
        },
        {
            icon: "fa-brands fa-linkedin-in",
            href: "https://www.linkedin.com/in/varun-raj-neyyila/",
            hoverColor: "hover:bg-blue-600",
            name: "LinkedIn",
        },
        {
            icon: "fa-brands fa-medium",
            href: "https://medium.com/%40varunrobust",
            hoverColor: "hover:bg-blue-400",
            name: "Medium",
        },
        {
            icon: "fa-brands fa-instagram",
            href: "https://www.instagram.com/varunrobust/",
            hoverColor: "hover:bg-purple-600",
            name: "Instagram",
        },
        {
            icon: "fa-regular fa-address-card",
            href: "https://topmate.io/varunrobust",
            hoverColor: "hover:bg-green-600",
            name: "Topmate",
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 px-6 md:px-12 bg-gray-900/50 relative"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade">
                        <span className="gradient-text glow-text">
                            Let's Connect
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto animate-fade delay-100">
                        Interested in working together or have a project in
                        mind? Get in touch!
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="animate-fade delay-200">
                        {/* Responsive Design: Stack elements on small screens */}
                        <div className="project-card flex flex-col md:flex-row rounded-xl p-8 h-full">
                            {/* Contact Info Section */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-xl font-bold mb-4">
                                    Contact Info
                                </h3>
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <ContactInfoCard
                                            key={index}
                                            info={info}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Social Links Section */}
                            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
                                <div className="ml-0 md:ml-4 md:pl-8 md:border-l border-gray-800">
                                    <h3 className="text-xl font-bold mb-4">
                                        Find Me Online
                                    </h3>
                                    <SocialLinks links={socialLinks} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div
                    className="floating-circle w-72 h-72 bg-cyan-500/10 top-20 right-10 animate-float"
                    style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                    className="floating-circle w-96 h-96 bg-blue-500/10 bottom-20 left-20 animate-float"
                    style={{ animationDelay: "1.5s" }}
                ></div>
            </div>
        </section>
    );
};

export default ContactSection;
