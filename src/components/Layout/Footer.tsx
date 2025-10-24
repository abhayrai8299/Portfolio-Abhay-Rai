import { SoundButton } from "react-sounds";
import sign from "../../assets/sign.png";

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
                <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
                    {/* Logo and Tagline */}
                    <div className="mb-6 md:mb-0 flex flex-col items-center md:block">
                        <a
                            href="#home"
                            className="text-2xl font-bold gradient-text glow-text"
                        >
                            {`<> AR </>`}
                        </a>
                        <h4 className="text-gray-400 mt-2">
                            {`const { A, R } = Dev ;`}
                        </h4>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex md:space-x-6 space-x-2">
                        {navigationLinks.map((link, index) => (
                            <SoundButton
                                key={index.toString()}
                                sound="ui/panel_expand"
                                soundOptions={{ volume: 1.0, rate: 0.8 }}
                                onSoundError={(error) =>
                                    console.error("Sound error:", error)
                                }
                            >
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white transition underline underline-offset-8 md:no-underline hover:underline"
                                >
                                    {link.name}
                                </a>
                            </SoundButton>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800/50 mt-8 pt-4">
                    {/* Lower Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Abhay Rai. All
                            rights reserved.
                        </p>
                        <div className="w-1/2 md:w-2/12 overflow-hidden">
                            <img src={sign} className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
