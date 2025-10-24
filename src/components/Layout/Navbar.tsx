import { useState } from "react";
import { SoundButton } from "react-sounds";

interface NavbarItem {
    name: string;
    href: string;
    extraStyle: string;
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigationItems: NavbarItem[] = [
        { name: "Home", href: "#home", extraStyle: "delay-100" },
        { name: "Projects", href: "#projects", extraStyle: "delay-200" },
        { name: "Honours", href: "#achievements", extraStyle: "delay-300" },
        { name: "Experience", href: "#experience", extraStyle: "delay-400" },
        { name: "Skills", href: "#skills", extraStyle: "delay-500" },
        { name: "Contact", href: "#contact", extraStyle: "delay-600" },
    ];

    return (
        <nav className="fixed w-full py-6 px-6 md:px-12 z-50 backdrop-blur-md bg-opacity-80 bg-gray-900/50 border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <SoundButton
                    sound="ui/panel_expand"
                    soundOptions={{ volume: 1.0, rate: 0.8 }}
                    onSoundError={(error) =>
                        console.error("Sound error:", error)
                    }
                >
                    <a
                        href="#home"
                        className="text-2xl font-bold gradient-text glow-text animate-fade"
                    >
                        {`<AR />`}
                    </a>
                </SoundButton>
                <div className="hidden md:flex md:items-center space-x-8">
                    {navigationItems.map((item, index) => (
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
                                href={item.href}
                                className={`nav-link text-gray-300 hover:text-white transition animate-fade ${item.extraStyle}`}
                            >
                                {item.name}
                            </a>
                        </SoundButton>
                    ))}
                    <SoundButton
                        sound="ui/tab_open"
                        soundOptions={{ volume: 1.0, rate: 0.8 }}
                        onSoundError={(error) =>
                            console.error("Sound error:", error)
                        }
                    >
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1NxG_LrwUine5Ae9hhlFunhN5h-ZEdvyM"
                            className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-small transition glow animate-fade delay-700"
                        >
                            <i className="fas fa-file-arrow-down mr-2 animate-bounce" />
                            <span>Resume</span>
                        </a>
                    </SoundButton>
                </div>
                <button
                    className="md:hidden text-gray-300 hover:text-white animate-fade delay-100"
                    onClick={toggleMenu}
                >
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-gray-900/90 border-t border-gray-800/50">
                    {navigationItems.map((item, index) => (
                        <SoundButton
                            key={index.toString()}
                            sound="ui/panel_expand"
                            soundOptions={{ volume: 1.0, rate: 0.8 }}
                            onSoundError={(error) =>
                                console.error("Sound error:", error)
                            }
                            className={`block py-2 px-4 text-gray-300 hover:text-white transition`}
                        >
                            <a
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        </SoundButton>
                    ))}
                    <SoundButton
                        sound="ui/panel_expand"
                        soundOptions={{ volume: 1.0, rate: 0.8 }}
                        onSoundError={(error) =>
                            console.error("Sound error:", error)
                        }
                    >
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1NxG_LrwUine5Ae9hhlFunhN5h-ZEdvyM"
                            className="block py-2 px-4 text-gray-300 hover:text-white transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </SoundButton>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
