const Navbar = () => {
    return (
        <nav className="fixed w-full py-6 px-6 md:px-12 z-50 backdrop-blur-md bg-opacity-80 bg-gray-900/50 border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a
                    href="#home"
                    className="text-2xl font-bold gradient-text glow-text animate-fade"
                >
                    VR
                </a>
                <div className="hidden md:flex md:items-center space-x-8">
                    <a
                        href="#home"
                        className="nav-link text-gray-300 hover:text-white transition animate-fade delay-100"
                    >
                        Home
                    </a>
                    <a
                        href="#projects"
                        className="nav-link text-gray-300 hover:text-white transition animate-fade delay-200"
                    >
                        Projects
                    </a>
                    <a
                        href="#experience"
                        className="nav-link text-gray-300 hover:text-white transition animate-fade delay-300"
                    >
                        Experience
                    </a>
                    <a
                        href="#skills"
                        className="nav-link text-gray-300 hover:text-white transition animate-fade delay-400"
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="nav-link text-gray-300 hover:text-white transition animate-fade delay-500"
                    >
                        Contact
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/drive/folders/1NxG_LrwUine5Ae9hhlFunhN5h-ZEdvyM"
                        className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-small transition glow animate-fade delay-700"
                    >
                        Resume
                    </a>
                </div>
                <button className="md:hidden text-gray-300 hover:text-white animate-fade delay-100">
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
