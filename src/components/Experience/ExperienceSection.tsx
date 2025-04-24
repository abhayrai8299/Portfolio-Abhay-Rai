interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
    bgColor: string;
    textColor: string;
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <div className="timeline-item animate-fade delay-200">
            <div className="project-card rounded-xl p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <span
                        className={`px-3 py-1 ${experience.bgColor} ${experience.textColor} rounded-full text-sm`}
                    >
                        {experience.period}
                    </span>
                </div>
                <h4 className={experience.textColor + " mb-4"}>
                    {experience.company}
                </h4>
                <p className="text-gray-400 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-cyan-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ExperienceSection = () => {
    const experiences: Experience[] = [
        {
            title: "Frontend Engineer and Mobile App Developer",
            company: "Capgemini - IMPS Framework",
            period: "2024 - Present",
            description:
                "Developing and maintaining the IMPS framework. Leading a team of developers, focusing on performance optimization and code quality.",
            skills: [
                "React",
                "TypeScript",
                "React Native",
                "Firebase",
                "Python",
                "Application Security",
                "Leadership",
            ],
            bgColor: "bg-cyan-900/30",
            textColor: "text-cyan-400",
        },
        {
            title: "Associate Frontend Engineer and Mobile App Developer",
            company: "Capgemini - IMPS Framework",
            period: "2022 - 2024",
            description:
                "Worked on the IMPS framework, focusing on frontend development and mobile app development. Collaborated with cross-functional teams to deliver high-quality applications.",
            skills: ["React", "React Native", "Redux", "JavaScript"],
            bgColor: "bg-purple-900/30",
            textColor: "text-purple-400",
        },
        {
            title: "Java Backend Developer Intern",
            company: "Capgemini - Mulesoft Team",
            period: "2022",
            description:
                "Worked on integration projects, focusing on backend development and API management. Gained experience in Java and spring boot technologies.",
            skills: ["Java", "Spring Boot"],
            bgColor: "bg-blue-900/30",
            textColor: "text-blue-400",
        },
    ];

    return (
        <section
            id="experience"
            className="py-20 px-6 md:px-12 bg-gray-900/50 relative"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade">
                        <span className="gradient-text glow-text">
                            Professional Journey
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto animate-fade delay-100">
                        My career path and the valuable experiences I've gained
                        along the way.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>

                {/* Background Elements */}
                <div
                    className="floating-circle w-72 h-72 bg-cyan-500/10 top-20 right-10 animate-float"
                    style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                    className="floating-circle w-96 h-96 bg-blue-500/10 bottom-20 left-20 animate-float"
                    style={{ animationDelay: "1.5s" }}
                ></div>
            </div>
        </section>
    );
};

export default ExperienceSection;
