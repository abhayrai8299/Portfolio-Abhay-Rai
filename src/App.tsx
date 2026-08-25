import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Layout/Navbar";
import HeroSection from "./components/Home/HeroSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import SkillsSection from "./components/Skills/SkillsSection";
import Achievements from "./components/Achievements/Achievements";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Layout/Footer";

const App = () => (
  <div className="site-shell">
    <div className="noise" aria-hidden="true" />
    <Navbar />
    <main>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <Achievements />
      <ContactSection />
    </main>
    <Footer />
    <Analytics />
    <SpeedInsights />
  </div>
);

export default App;
