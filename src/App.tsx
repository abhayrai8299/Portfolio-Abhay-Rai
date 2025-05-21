import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Layout/Navbar";
import HeroSection from "./components/Home/HeroSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import SkillsSection from "./components/Skills/SkillsSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Layout/Footer";
import CustomCursor from "./components/Layout/CustomCursor";
import sign from "./assets/sign.png";
import { Sound, SoundProvider } from "react-sounds";

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            setShowSplash(false);
        }, 2000);

        return () => clearTimeout(splashTimeout);
    }, []);

    return (
        <SoundProvider
            preload={["system/boot_up", "ui/panel_expand", "ui/tab_open"]}
        >
            <>
                {showSplash ? (
                    <Sound
                        name="system/boot_up"
                        trigger="mount"
                        options={{ volume: 1.0 }}
                        onLoad={() => console.log("Sound loaded")}
                        onPlay={() => console.log("Sound playing")}
                        onStop={() => console.log("Sound stopped")}
                        onError={(error) =>
                            console.error("Sound error:", error)
                        }
                    >
                        <div id="splash-screen">
                            <img src={sign} alt="My Logo" />
                            <div className="absolute bottom-30 md:bottom-10 left-5/12 text-xs text-white code-fira-font">
                                {`>_ devTip: Use Big Screens 🚀`}
                            </div>
                        </div>
                    </Sound>
                ) : (
                    <div id="main-content">
                        {/* floating circles – pure decoration */}
                        <div
                            className="floating-circle w-64 h-64 bg-blue-500 top-20 left-10 animate-float"
                            style={{ animationDelay: "0s" }}
                        />
                        <div
                            className="floating-circle w-96 h-96 bg-cyan-500 bottom-40 right-20 animate-float"
                            style={{ animationDelay: "2s" }}
                        />
                        <CustomCursor />
                        <Navbar />
                        <HeroSection />
                        <ProjectsSection />
                        <ExperienceSection />
                        <SkillsSection />
                        <ContactSection />
                        <Footer />
                        <Analytics />
                        <SpeedInsights />
                    </div>
                )}
            </>
        </SoundProvider>
    );
};

export default App;
