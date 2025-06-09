import React from "react";
import Marquee from "react-fast-marquee";
import { playSound } from "react-sounds";

interface Skill {
    name: string;
    icon: string | React.ReactNode;
    iconColor: string;
    skillColor: string;
    delay?: string;
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
        <div
            key={skill.name}
            className="p-3 rounded-xl bg-slate-800 text-white flex items-center justify-center transition-transform hover:[transform:perspective(1000px)_translateY(-5px)] skill-item"
            onMouseEnter={() => playSound("ui/button_soft")}
        >
            {typeof skill.icon != "string" ? (
                skill.icon
            ) : (
                <i
                    className={`${skill.icon} text-[${skill.iconColor}] text-xl mr-4`}
                />
            )}
            <h3>{skill.name}</h3>
        </div>
    );
};

const SkillCategoryCard = ({ category }: { category: SkillCategory }) => {
    return (
        <div
            className={`project-card rounded-xl p-6 animate-fade delay-200 w-96 mx-12`}
        >
            <div className="flex items-center justify-center mb-8">
                <div
                    className={`w-10 h-10 rounded-full ${category.bgColor} flex items-center justify-center mr-3 glow`}
                >
                    <i
                        className={`fas fa-${category.icon} ${category.color}`}
                    ></i>
                </div>
                <h3 className="font-bold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap justify-center w-full gap-4">
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
                    icon: "fab fa-react",
                    iconColor: "#61DBFB",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Next.js",
                    icon: <img src="/next.png" className="w-7 h-7 mr-3" />,
                    iconColor: "#61DBFB",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Redux",
                    icon: <img src="/redux.png" className="w-6 h-6 mr-4" />,
                    iconColor: "#764abc",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Redux Toolkit",
                    icon: <img src="/redux.png" className="w-6 h-6 mr-4" />,
                    iconColor: "#764abc",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "TypeScript",
                    icon: <img src="/ts.png" className="w-6 h-6 mr-4" />,
                    iconColor: "#3178c6",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "JavaScript",
                    icon: "fab fa-js",
                    iconColor: "#F7DF1E",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "HTML",
                    icon: "fab fa-html5",
                    iconColor: "#f97316",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "CSS",
                    icon: "fab fa-css3-alt",
                    iconColor: "#ef4444",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Vite",
                    icon: <img src="/vite.svg" className="w-6 h-6 mr-4" />,
                    iconColor: "#facc15",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Webpack",
                    icon: <img src="/webpack.svg" className="w-6 h-6 mr-4" />,
                    iconColor: "#facc15",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Material UI",
                    icon: <img src="/mui.png" className="w-6 h-6 mr-4" />,
                    iconColor: "#4dabf7",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Tailwind CSS",
                    icon: <img src="/tailwind.svg" className="w-6 h-6 mr-4" />,
                    iconColor: "#38bdf8",
                    skillColor: "#0d1b2a",
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
                    icon: "fab fa-node",
                    iconColor: "#80ef80",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Express",
                    icon: (
                        <img
                            src="/express.png"
                            className="w-5 h-5 mr-3 filter invert"
                        />
                    ),
                    iconColor: "white",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Firebase",
                    icon: "fas fa-fire",
                    iconColor: "#f97316",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Python",
                    icon: "fab fa-python",
                    iconColor: "#a855f7",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "SQL",
                    icon: "fas fa-database",
                    iconColor: "#3b82f6",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "PostgreSQL",
                    icon: "fas fa-database",
                    iconColor: "#3b82f6",
                    skillColor: "#0d1b2a",
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
                    icon: "fab fa-react",
                    iconColor: "#FFD700",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Redux Toolkit",
                    icon: <img src="/redux.png" className="w-6 h-6 mr-4" />,
                    iconColor: "#764abc",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "SwiftUI",
                    icon: "fab fa-apple",
                    iconColor: "white",
                    skillColor: "white",
                },
                {
                    name: "Kotlin",
                    icon: "fab fa-android",
                    iconColor: "#80ef00",
                    skillColor: "#0d1b2a",
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
                    name: "Docker",
                    icon: "fab fa-docker",
                    iconColor: "#38bdf8",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Git",
                    icon: "fab fa-git-alt",
                    iconColor: "#f97316",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Figma",
                    icon: "fab fa-figma",
                    iconColor: "#80ef80",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "Postman",
                    icon: "fas fa-paper-plane",
                    iconColor: "#f97316",
                    skillColor: "#0d1b2a",
                },
                {
                    name: "AWS",
                    icon: "fab fa-aws",
                    iconColor: "#FFD700",
                    skillColor: "bg-green-500",
                },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900/30 relative">
            <div className="flex flex-col items-center">
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

                <Marquee
                    pauseOnHover
                    speed={100}
                    gradient={false}
                    className="w-full"
                >
                    {skillCategories.map((category, index) => (
                        <SkillCategoryCard key={index} category={category} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default SkillsSection;
