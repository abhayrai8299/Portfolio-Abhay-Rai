interface Project {
    icon: string;
    title: string;
    description: string;
    technologies: string[];
    demoLink: string;
    codeLink: string;
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
        </div>
    );
};

const ProjectsSection = () => {
    const projects: Project[] = [
        {
            icon: "laptop",
            title: "Scrum Idea Board",
            description:
                "Full-stack web app for agile teams to pitch ideas, discuss them in threaded comments, and up- or down-vote. Role-based access lets admins approve or reject submissions, keeping the backlog clean and transparent. Audit logs track all changes, ensuring accountability. Built with React.js, TypeScript, and Node JS.",
            technologies: [
                "React",
                "JavaScript",
                "Node JS",
                "Sqlite",
                "Express",
                "Tailwind CSS",
                "Vite",
            ],
            demoLink: "#",
            codeLink: "#",
            bgColor: "bg-cyan-900/50",
            iconColor: "text-cyan-300",
        },
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
            demoLink: "#",
            codeLink: "#",
            bgColor: "bg-blue-900/50",
            iconColor: "text-blue-300",
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
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
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
