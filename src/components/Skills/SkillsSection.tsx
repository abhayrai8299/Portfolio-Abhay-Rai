interface Skill {
    name: string;
    icon: string;
    color: string;
    bgColor: string;
    delay: string;
}

interface SkillCategory {
    title: string;
    icon: string;
    color: string;
    bgColor: string;
    skills: Skill[];
}

const SkillItem = ({ skill }: { skill: Skill }) => {
    return (
        <div className="flex items-center">
            <div
                className={`w-2 h-2 rounded-full ${skill.bgColor} mr-2 animate-pulse`}
                style={{ animationDelay: skill.delay }}
            ></div>
            <span className="text-sm text-gray-400">{skill.name}</span>
        </div>
    );
};

const SkillCategoryCard = ({ category }: { category: SkillCategory }) => {
    return (
        <div className="project-card rounded-xl p-6 animate-fade delay-200">
            <div className="flex items-center mb-4">
                <div
                    className={`w-10 h-10 rounded-full ${category.bgColor} flex items-center justify-center mr-3 glow`}
                >
                    <i
                        className={`fas fa-${category.icon} ${category.color}`}
                    ></i>
                </div>
                <h3 className="font-bold">{category.title}</h3>
            </div>
            <div className="space-y-3">
                {category.skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

const SkillsSection = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Frontend",
            icon: "code",
            color: "text-cyan-400",
            bgColor: "bg-cyan-900/30",
            skills: [
                {
                    name: "React",
                    icon: "react",
                    color: "text-cyan-400",
                    bgColor: "bg-cyan-500",
                    delay: "0s",
                },
                {
                    name: "TypeScript",
                    icon: "code",
                    color: "text-cyan-400",
                    bgColor: "bg-cyan-500",
                    delay: "0.2s",
                },
                {
                    name: "HTML",
                    icon: "html5",
                    color: "text-cyan-400",
                    bgColor: "bg-cyan-500",
                    delay: "0.4s",
                },
                {
                    name: "Tailwind",
                    icon: "wind",
                    color: "text-cyan-400",
                    bgColor: "bg-cyan-500",
                    delay: "0.6s",
                },
            ],
        },
        {
            title: "Mobile",
            icon: "mobile-alt",
            color: "text-blue-400",
            bgColor: "bg-blue-900/30",
            skills: [
                {
                    name: "React Native",
                    icon: "react",
                    color: "text-blue-400",
                    bgColor: "bg-blue-500",
                    delay: "0s",
                },
                {
                    name: "Redux",
                    icon: "redux",
                    color: "text-blue-400",
                    bgColor: "bg-blue-500",
                    delay: "0.2s",
                },
                {
                    name: "SwiftUI & Kotlin",
                    icon: "apple",
                    color: "text-blue-400",
                    bgColor: "bg-blue-500",
                    delay: "0.4s",
                },
            ],
        },
        {
            title: "Backend",
            icon: "server",
            color: "text-purple-400",
            bgColor: "bg-purple-900/30",
            skills: [
                {
                    name: "Node.js",
                    icon: "node",
                    color: "text-purple-400",
                    bgColor: "bg-purple-500",
                    delay: "0s",
                },
                {
                    name: "Java",
                    icon: "java",
                    color: "text-purple-400",
                    bgColor: "bg-purple-500",
                    delay: "0.4s",
                },
                {
                    name: "Firebase",
                    icon: "fire",
                    color: "text-purple-400",
                    bgColor: "bg-purple-500",
                    delay: "0.6s",
                },
            ],
        },
        {
            title: "Tools",
            icon: "tools",
            color: "text-green-400",
            bgColor: "bg-green-900/30",
            skills: [
                {
                    name: "Git & Gitlab",
                    icon: "git",
                    color: "text-green-400",
                    bgColor: "bg-green-500",
                    delay: "0s",
                },
                {
                    name: "Figma",
                    icon: "pen",
                    color: "text-green-400",
                    bgColor: "bg-green-500",
                    delay: "0.2s",
                },
                {
                    name: "Docker",
                    icon: "docker",
                    color: "text-green-400",
                    bgColor: "bg-green-500",
                    delay: "0.4s",
                },
                {
                    name: "AWS",
                    icon: "aws",
                    color: "text-green-400",
                    bgColor: "bg-green-500",
                    delay: "0.6s",
                },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="py-20 px-6 md:px-12 bg-gray-900/30 relative"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade">
                        <span className="gradient-text glow-text">
                            Technical Expertise
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto animate-fade delay-100">
                        The tools and technologies I use to create exceptional
                        digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCategoryCard key={index} category={category} />
                    ))}
                </div>

                {/* Background Elements */}
                <div
                    className="floating-circle w-64 h-64 bg-cyan-500/10 top-20 left-10 animate-float"
                    style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                    className="floating-circle w-96 h-96 bg-blue-500/10 bottom-20 right-20 animate-float"
                    style={{ animationDelay: "1.2s" }}
                ></div>
            </div>
        </section>
    );
};

export default SkillsSection;
