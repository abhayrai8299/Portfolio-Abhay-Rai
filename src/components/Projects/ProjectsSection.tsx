interface Project {
    icon: string;
    title: string;
    description: string;
    technologies: string[];
    demoLink?: string;
    codeLink?: string;
    bgColor: string;
    iconColor: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
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
                <div className="flex space-x-4">
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 transition flex items-center"
                        >
                            <i className="fas fa-external-link-alt mr-2"></i>{" "}
                            Demo
                        </a>
                    )}
                    {project.codeLink && (
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition flex items-center"
                        >
                            <i className="fab fa-github mr-2"></i> View Code
                        </a>
                    )}
                </div>
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
            demoLink: "https://www.youtube.com/watch?v=V0tR-Lx-mYY",
            bgColor: "bg-blue-900/50",
            iconColor: "text-blue-300",
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
                "Sqlite",
                "Express",
                "Tailwind CSS",
                "Vite",
            ],
            bgColor: "bg-cyan-900/50",
            iconColor: "text-cyan-300",
        },
        {
            icon: "cloud",
            title: "Weather App",
            description:
                "A weather app that provides real-time weather updates and forecasts. Built with React.js, Javascript, and Vite, it fetches data from a weather API and displays it in a user-friendly interface. The app is responsive and works seamlessly on both desktop and mobile devices.",
            technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
            bgColor: "bg-purple-900/50",
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
                    {projects.map((project, index, arr) => {
                        const isLastAndOdd =
                            arr.length % 2 !== 0 && index === arr.length - 1;
                        return (
                            <div
                                key={index}
                                className={
                                    isLastAndOdd
                                        ? "md:col-span-2 md:justify-self-center"
                                        : ""
                                }
                            >
                                <ProjectCard project={project} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Background Elements */}
            <div
                className="floating-circle w-64 h-64 bg-blue-500/10 top-20 left-10 animate-float"
                style={{ animationDelay: "0s" }}
            ></div>
            <div
                className="floating-circle w-96 h-96 bg-cyan-500/10 bottom-40 right-20 animate-float"
                style={{ animationDelay: "2s" }}
            ></div>
        </section>
    );
};

export default ProjectsSection;
