interface FooterLink {
    name: string;
    href: string;
}

const Footer = () => {
    const navigationLinks: FooterLink[] = [
        { name: "Home", href: "#home" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="py-12 px-6 md:px-12 bg-gray-900 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
                {/* Upper Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Tagline */}
                    <div className="mb-6 md:mb-0">
                        <a
                            href="#"
                            className="text-2xl font-bold gradient-text glow-text"
                        >
                            VR
                        </a>
                        <p className="text-gray-400 mt-2">
                            Building the future, one line of code at a time.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        {navigationLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800/50 mt-8 pt-8">
                    {/* Lower Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Varun Raj Neyyila. All
                            rights reserved.
                        </p>
                    </div>
                </div>

                {/* Background Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </div>
        </footer>
    );
};

export default Footer;
