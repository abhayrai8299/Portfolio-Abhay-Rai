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

const App = () => {
    return (
        <>
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
        </>
    );
};

export default App;
