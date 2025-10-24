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
            icon: "shop",
            title: "Cartify",
            description:
                "Cartify is a robust, full-featured e-commerce platform built with a micro front-end architecture and a modern tech stack. Designed for both web and mobile, it delivers a seamless shopping experience and powerful admin capabilities.",
            technologies: [
                "React",
                "TypeScript",
                "Redux",
                "Javascript",
                "Firebase",
                "Application Security",
                "Postgres SQL",
                "Node JS"
            ],
            demoLink: "https://cartify-7mav.onrender.com/",
            bgColor: "bg-blue-900/50",
            iconColor: "text-blue-300",
            codeLink: "https://github.com/abhayrai8299/Cartify",
            image: "imps.png",
        },
        {
            icon: "laptop",
            title: "Foodigo",
            description:
            "Foodigo is a full-stack, responsive food ordering application designed with performance, scalability, and user experience in mind. Built using a micro front-end architecture, the platform supports both web and hybrid mobile app users.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Node JS",
                "GraphQL",
                "Express",
                "PostgreSQL",
                "Tailwind CSS",
            ],
            bgColor: "bg-green-900/50",
            iconColor: "text-cyan-300",
            demoLink: "https://abhayrai8299.github.io/meal_order/",
            codeLink: "https://github.com/abhayrai8299/meal_order",
            image: "narrative-forge.png",
        },
        {
            icon: "laptop",
            title: "Expenditure Tracker",
            description:
                "A full-stack personal finance management web app built with React.js, Node.js, Express, and MongoDB. It allows users to track expenses, analyze spending trends, and visualize data using Chart.js. Designed with responsive UI, efficient state management, and secure CRUD operations. Deployed on Railway App for reliable cloud hosting.",
            technologies: [
                "React", "Node", "Express", "MongoDB","Railway App", "Chart.js", "CSS", "JavaScript"
            ],
            bgColor: "bg-cyan-900/50",
            iconColor: "text-cyan-300",
            demoLink: "https://idea-mgmt.vercel.app/",
            codeLink: "https://github.com/varunrobust/idea_management_frontend",
            image: "idea-mgmt.png",
        },
        {
            icon: "cloud",
            title: "Mploi",
            description:
                "A modern job portal platform developed using React.js, Node.js, Express.js, MongoDB, and Redux. Features include real-time job listings, role-based authentication using JWT, and advanced search filters for both recruiters and job seekers. Built with React Native support for mobile responsiveness and optimized using lazy loading for enhanced performance.",
            technologies: ["React", "Redux", "React Native", "Node", "Express", "MongoDB", "JWT", "REST API", "CSS", "JavaScript"],
            bgColor: "bg-purple-900/50",
            demoLink:"https://mploi.com/",
            iconColor: "text-purple-300",
        },
        {
            icon: "laptop",
            title: "Calm Air Airline",
            description:
                "A responsive airline booking web platform designed for seamless flight search, booking, and management. Built with React.js, TypeScript, and Tailwind CSS, it delivers a modern, performance-optimized user experience. Integrated with real-time APIs for up-to-date flight information and follows accessibility and performance best practices.",
            technologies: ["React", "JavaScript", "Tailwind CSS", "Node"],
            bgColor: "bg-purple-900/50",
            demoLink:"https://www.calmair.com/",
            iconColor: "text-purple-300",
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
