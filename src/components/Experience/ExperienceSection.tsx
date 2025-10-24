import {
    DraggableCardBody,
    DraggableCardContainer,
} from "../ui/draggable-card";

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
            title: "Senior Engineer-Full Stack",
            company: "Nagarro",
            period: "April,2024 - Present",
            description:
                "Contributing to enterprise-grade full-stack solutions using React.js, TypeScript, Node.js, and GraphQL. Led performance optimization efforts improving app load speed by 40%, built CI/CD pipelines with Jenkins, Docker & Kubernetes, and integrated monitoring with ELK Stack & Grafana, reducing MTTR by 30%. Mentored junior developers and enforced clean, scalable architecture standards.",
                skills: [
                "React",
                "TypeScript",
                "Redux",
                "TypeScript",
                "Express",
                "GraphQL",
                "Docker",
                "Kubernetes",
                "Jenkins",
                "Tailwind CSS",
                "Redis",
                "Kafka"
            ],
            bgColor: "bg-cyan-900/30",
            textColor: "text-cyan-400",
        },
        {
            title: "Software Engineer-II (MERN Stack)",
            company: "Equipped Analytical Intelligence",
            period: "June,2023 - April,2024",
            description:
                "Engineered real-time financial analytics dashboards using React, Zustand, and Node.js, ensuring secure integrations with JWT & OAuth2. Streamlined CI/CD pipelines with GitHub Actions & Azure, cutting build times by 40%, and achieved 90%+ test coverage with Jest & React Testing Library. Enhanced UI consistency through Storybook-driven development.",
            skills: ["React", "Node JS", "Redux", "JavaScript","PostgreSQL","Azure","Zustand","JWT","OAuth","Jest"],
            bgColor: "bg-purple-900/30",
            textColor: "text-purple-400",
        },
        {
            title: "Software Engineer-MERN Stack",
            company: "Cod4 Solution",
            period: "January,2021 - June,2023",
            description:
                "Developed a scalable e-commerce SPA serving 50K+ users using React.js, Redux, and Node.js. Optimized backend APIs with MongoDB, improving response performance by 25%, and implemented secure JWT-based authentication. Automated regression testing with Mocha & Cypress, reducing production bugs by 30% and ensuring stable releases.",
            skills: ["React", "Redux", "Node", "MongoDB", "Express", "JWT", "Ant Design", "Tailwind CSS", "Mocha"],
            bgColor: "bg-blue-900/30",
            textColor: "text-blue-400",
        },
    ];

    return (
        <section id="experience" className="py-20 bg-gray-900/50 relative">
            <div>
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
                <h2 className="absolute z-0 text-gray-800 text-5xl md:text-5xl font-bold text-center w-[40%] ml-[30%] mt-24">
                    ⚡ Oops! A Nexus Event Detected! <br />
                    The Time Variance Authority is monitoring the timeline.
                    <br />
                    Stay on the destined path, or risk a visit from the TVA
                    Minutemen.
                    <br />
                    <span className="text-cyan-800">
                        Tip: Refresh to reset the timeline!
                    </span>
                </h2>

                <DraggableCardContainer className="w-full flex flex-col items-center justify-center space-y-8 z-50">
                    {experiences.map((experience, index) => (
                        <DraggableCardBody key={index}>
                            <ExperienceCard
                                key={index}
                                experience={experience}
                            />
                        </DraggableCardBody>
                    ))}
                </DraggableCardContainer>
            </div>
        </section>
    );
};

export default ExperienceSection;
