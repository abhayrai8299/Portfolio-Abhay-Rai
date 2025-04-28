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

const App = () => {
    // Splash screen
    window.addEventListener("load", () => {
        // Set the delay time in milliseconds (1000ms = 1 seconds)
        const splashDelay = 1000;

        setTimeout(() => {
            // Fade out the splash screen by reducing its opacity
            const splash = document.getElementById("splash-screen");
            if (splash) splash.style.opacity = "0";

            // After the opacity transition, remove splash screen and show main content
            if (splash) {
                splash.addEventListener("transitionend", () => {
                    splash.style.display = "none";
                    const mainContent = document.getElementById("main-content");
                    if (mainContent) mainContent.style.display = "block";
                });
            }
        }, splashDelay);
    });

    return (
        <>
            <div id="splash-screen">
                <img src={sign} alt="My Logo" />
            </div>
            <div id="main-content" className="hidden">
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
        </>
    );
};

export default App;
