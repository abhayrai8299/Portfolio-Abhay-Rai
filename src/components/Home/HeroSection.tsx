import { SoundButton } from "react-sounds";
import ghibliPhoto from "../../assets/ghibli_photo.png";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="md:min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold animate-fade">
                        Hi, I'm{" "}
                        <span className="gradient-text glow-text">
                            Varun Raj
                        </span>
                    </h1>
                    <h2 className="text-xl font-medium text-gray-300 sm:animate-fade typewriter delay-100">
                        Frontend Engineer & Mobile Developer
                    </h2>
                    <p className="text-gray-400 max-w-lg animate-fade delay-200">
                        Skilled React JS and React Native developer with a focus
                        on cross-platform development. Combining expertise in
                        mobile and web application development, excels in
                        crafting seamless user experiences. Proficient in
                        JavaScript and TypeScript, bringing strong typing and
                        enhanced tooling to projects. Dedicated to delivering
                        robust solutions, whether creating responsive web
                        interfaces or building apps for iOS and Android
                        platforms.
                    </p>
                    <div className="flex space-x-4 animate-fade delay-300">
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
                                className="block md:hidden px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-small transition glow"
                            >
                                <i className="fas fa-file-arrow-down mr-2 animate-bounce" />
                                <span>Resume</span>
                            </a>
                        </SoundButton>
                        <SoundButton
                            sound="ui/panel_expand"
                            soundOptions={{ volume: 1.0, rate: 0.8 }}
                            onSoundError={(error) =>
                                console.error("Sound error:", error)
                            }
                        >
                            <a
                                href="#projects"
                                className="hidden md:block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:opacity-90 transition glow"
                            >
                                View My Work
                            </a>
                        </SoundButton>
                        <SoundButton
                            sound="ui/panel_expand"
                            soundOptions={{ volume: 1.0, rate: 0.8 }}
                            onSoundError={(error) =>
                                console.error("Sound error:", error)
                            }
                        >
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-gray-600 rounded-full font-medium hover:bg-gray-800/50 transition"
                            >
                                Contact Me
                            </a>
                        </SoundButton>
                    </div>
                    <SocialLinks />
                </div>
                <ExperienceCircle />
            </div>
            <div className="absolute bottom-2 md:bottom-10 left-1/2 animate-bounce">
                <SoundButton
                    sound="ui/panel_expand"
                    soundOptions={{ volume: 1.0, rate: 0.8 }}
                    onSoundError={(error) =>
                        console.error("Sound error:", error)
                    }
                >
                    <a href="#projects" className="text-primary-500 text-2xl">
                        <i className="fas fa-chevron-down" />
                    </a>
                </SoundButton>
            </div>
        </section>
    );
};

const SocialLinks = () => {
    return (
        <div className="flex space-x-4 pt-4 animate-fade delay-400">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/varunrobust"
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-500 transition"
            >
                <i className="fab fa-github"></i>
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/varun-raj-neyyila/"
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition"
            >
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/%40varunrobust"
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-400 transition"
            >
                <i className="fab fa-medium"></i>
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://topmate.io/varunrobust"
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition"
            >
                <i className="fas fa-laptop"></i>
            </a>
        </div>
    );
};

const ExperienceCircle = () => {
    return (
        <div className="relative hidden md:block">
            <div className="w-8/12 h-8/12 rounded-full absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                <div className="w-full h-full overflow-hidden">
                    <img
                        src={ghibliPhoto}
                        alt="Varun Raj Neyyila"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="w-64 h-64 rounded-full border-2 border-cyan-400/30 flex items-center justify-center relative animate-float">
                <div
                    className="w-full h-full rounded-full border-2 border-cyan-400/20 absolute animate-spin-slow"
                    style={{ animationDuration: "20s" }}
                ></div>
                <div
                    className="w-3/4 h-3/4 rounded-full border-2 border-cyan-400/15 absolute animate-spin-slow"
                    style={{
                        animationDuration: "15s",
                        animationDirection: "reverse",
                    }}
                ></div>
                <div
                    className="w-1/2 h-1/2 rounded-full border-2 border-cyan-400/10 absolute animate-spin-slow"
                    style={{ animationDuration: "10s" }}
                ></div>
                <div className="text-center z-10">
                    <div className="text-5xl font-bold gradient-text mb-2">
                        3+
                    </div>
                    <div className="text-gray-300">
                        Years of
                        <br />
                        Experience
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
