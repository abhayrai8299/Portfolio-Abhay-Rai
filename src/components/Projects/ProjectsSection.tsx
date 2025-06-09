import { useState } from "react";
import { playSound, SoundButton } from "react-sounds";
import { DraggableBottomSheet } from "../ui/draggable-bottom-sheet";

interface Project {
    icon: string;
    title: string;
    description: string;
    technologies: string[];
    demoLink?: string;
    codeLink?: string;
    bgColor: string;
    iconColor: string;
    image?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="project-card rounded-xl p-6 animate-fade delay-200">
            <div className="flex items-center mb-4">
                <div
                    className={`w-12 h-12 rounded-full ${project.bgColor} flex items-center justify-center mr-4 glow`}
                >
                    <i
                        className={`fas fa-${project.icon} text-xl ${project.iconColor}`}
                    ></i>
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-cyan-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            {(project.demoLink || project.codeLink) && (
                <div className="flex justify-between items-center">
                    {project.demoLink && (
                        <SoundButton
                            sound="ui/tab_open"
                            soundOptions={{ volume: 1.0, rate: 0.8 }}
                            onSoundError={(error) =>
                                console.error("Sound error:", error)
                            }
                        >
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 transition flex items-center"
                            >
                                <i className="fas fa-external-link-alt mr-2"></i>{" "}
                                Demo
                            </a>
                        </SoundButton>
                    )}
                    {project.image && (
                        <button
                            onClick={() => {
                                playSound("notification/info");
                                setOpen(true);
                            }}
                            className="p-2 bg-cyan-900 rounded-lg hover:bg-cyan-800"
                        >
                            <i className="fas fa-info-circle text-cyan-300" />
                        </button>
                    )}
                    {project.codeLink && (
                        <SoundButton
                            sound="ui/tab_open"
                            soundOptions={{ volume: 1.0, rate: 0.8 }}
                            onSoundError={(error) =>
                                console.error("Sound error:", error)
                            }
                        >
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-all flex items-center"
                            >
                                <i className="fab fa-github mr-2"></i> View Code
                            </a>
                        </SoundButton>
                    )}
                </div>
            )}
            {project.image && (
                <DraggableBottomSheet
                    open={open}
                    onClose={() => {
                        playSound("notification/completed");
                        setOpen(false);
                    }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-[50%] object-cover rounded-t-lg"
                    />
                </DraggableBottomSheet>
            )}
        </div>
    );
};

const ProjectsSection = () => {
    const projects: Project[] = [
        {
            icon: "globe",
            title: "IMPS Framework",
            description:
                "Created responsive UI components with Micro Front end Architecture, using React.js, TypeScript and Vite and developed 20+ reusable components, PWA, and created few backend APIs using Python. Collaborated with teams to deliver features for a hybrid mobile app on iOS and Android using React Native, Redux, JavaScript, Webpack.",
            technologies: [
                "React",
                "TypeScript",
                "Vite",
                "React Native",
                "Redux",
                "Javascript",
                "Firebase",
                "Application Security",
                "Postgres SQL",
                "Python",
            ],
            demoLink: "https://www.youtube.com/watch?v=ov0tbAevOks",
            bgColor: "bg-blue-900/50",
            iconColor: "text-blue-300",
            image: "imps.png",
        },
        {
            icon: "gears",
            title: "Narrative Forge",
            description:
                "An innovative, full-stack application empowering writers and creators to build intricate fictional worlds and narratives collaboratively with generative AI. Leveraged a modern web stack to provide an intuitive interface for creating, iterating on, and managing dynamic lore. An ultimate tool for storytellers with AI-driven content generation.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Generative AI",
                "Node JS",
                "GraphQL",
                "Express",
                "PostgreSQL",
                "Tailwind CSS",
                "Shadcn UI",
            ],
            bgColor: "bg-green-900/50",
            iconColor: "text-cyan-300",
            demoLink: "https://narrative-forge.vercel.app/",
            codeLink: "https://github.com/varunrobust/narrative_forge_frontend",
            image: "narrative-forge.png",
        },
        {
            icon: "laptop",
            title: "Agile Idea Management Platform",
            description:
                "Full-stack web app for agile teams to pitch ideas, discuss them in threaded comments, and up- or down-vote. Role-based access lets admins approve or reject submissions, keeping the backlog clean and transparent. Audit logs track all changes, ensuring accountability. Built with React.js, JavaScript, and Node JS.",
            technologies: [
                "React",
                "JavaScript",
                "Node JS",
                "PostgreSQL",
                "Express",
                "Tailwind CSS",
                "Vite",
            ],
            bgColor: "bg-cyan-900/50",
            iconColor: "text-cyan-300",
            demoLink: "https://idea-mgmt.vercel.app/",
            codeLink: "https://github.com/varunrobust/idea_management_frontend",
            image: "idea-mgmt.png",
        },
        {
            icon: "cloud",
            title: "Weather App",
            description:
                "A weather app that provides real-time weather updates and forecasts. Built with React.js, Javascript, and Vite, it fetches data from a weather API and displays it in a user-friendly interface. The app is responsive and works seamlessly on both desktop and mobile devices.",
            technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
            bgColor: "bg-purple-900/50",
            iconColor: "text-purple-300",
            codeLink: "https://github.com/varunrobust/weather_app",
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade">
                        <span className="gradient-text glow-text">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto animate-fade delay-100">
                        Selected works that demonstrate my expertise in frontend
                        and mobile development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        return (
                            <div key={index}>
                                <ProjectCard project={project} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
