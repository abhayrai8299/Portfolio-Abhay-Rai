import React, { useState } from "react";

// PlaceholderIcon component to handle missing images
const PlaceholderIcon = ( letter:any ) => (
    <div className="w-6 h-6 flex items-center justify-center bg-gray-500 text-white rounded-full">
        {letter}
    </div>
);
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
const SkillIcon = ({ src, alt }: { src: string; alt: string }) => {
    const [error, setError] = useState(false);
    if (error)
        return (
            <div className="w-6 h-6 mr-3 flex items-center justify-center rounded-full bg-gray-700 text-cyan-400 font-bold text-xs">
                {alt[0].toUpperCase()}
            </div>
        );
    return (
        <img
            src={src}
            alt={alt}
            onError={() => setError(true)}
            className="w-6 h-6 mr-3"
        />
    );
};

const SkillsSection = () => {
    const skillCategories: SkillCategory[] = [
        // 🧠 Frontend
        {
            title: "Frontend",
            icon: "code",
            color: "text-cyan-400",
            bgColor: "bg-cyan-900/30",
            skills: [
                { name: "HTML5", icon: "fab fa-html5", iconColor: "#f97316", skillColor: "#0d1b2a" },
                { name: "CSS3", icon: "fab fa-css3-alt", iconColor: "#38bdf8", skillColor: "#0d1b2a" },
                { name: "JavaScript (ES6+)", icon: "fab fa-js", iconColor: "#F7DF1E", skillColor: "#0d1b2a" },
                { name: "TypeScript", icon: <SkillIcon src="/ts.png" alt="TypeScript" />, iconColor: "#3178c6", skillColor: "#0d1b2a" },
                { name: "React.js", icon: "fab fa-react", iconColor: "#61DBFB", skillColor: "#0d1b2a" },
                { name: "Next.js", icon: <SkillIcon src="/next.png" alt="Next.js" />, iconColor: "#61DBFB", skillColor: "#0d1b2a" },
                { name: "React Native", icon: "fab fa-react", iconColor: "#61DBFB", skillColor: "#0d1b2a" },
                { name: "Redux", icon: <SkillIcon src="/redux.png" alt="Redux" />, iconColor: "#764abc", skillColor: "#0d1b2a" },
                { name: "Redux Toolkit", icon: <SkillIcon src="/redux.png" alt="Redux Toolkit" />, iconColor: "#764abc", skillColor: "#0d1b2a" },
                { name: "Redux Saga", icon: <SkillIcon src="/redux.png" alt="Saga" />, iconColor: "#764abc", skillColor: "#0d1b2a" },
               ],
        },
        {
            title: "Frontend",
            icon: "code",
            color: "text-cyan-400",
            bgColor: "bg-cyan-900/30",
            skills: [
                { name: "Redux Thunk", icon: <SkillIcon src="/redux.png" alt="Thunk" />, iconColor: "#764abc", skillColor: "#0d1b2a" },
                { name: "Recoil", icon: <SkillIcon src="/recoil.png" alt="Recoil" />, iconColor: "#61DBFB", skillColor: "#0d1b2a" },
                { name: "Zustand", icon: <SkillIcon src="/zustand.png" alt="Zustand" />, iconColor: "#22c55e", skillColor: "#0d1b2a" },
                { name: "Tailwind CSS", icon: <SkillIcon src="/tailwind.svg" alt="Tailwind" />, iconColor: "#38bdf8", skillColor: "#0d1b2a" },
                { name: "Bootstrap", icon: "fab fa-bootstrap", iconColor: "#7952B3", skillColor: "#0d1b2a" },
                { name: "Material UI", icon: <SkillIcon src="/mui.png" alt="Material UI" />, iconColor: "#4dabf7", skillColor: "#0d1b2a" },
                { name: "Ant Design", icon: <SkillIcon src="/ant.png" alt="Ant Design" />, iconColor: "#1890ff", skillColor: "#0d1b2a" },
                { name: "Styled Components", icon: <SkillIcon src="/styled.png" alt="Styled Components" />, iconColor: "#f472b6", skillColor: "#0d1b2a" },
                { name: "SSR", icon: <SkillIcon src="/ssr.png" alt="SSR" />, iconColor: "#eab308", skillColor: "#0d1b2a" },
                { name: "React Testing Library", icon: <SkillIcon src="/rtl.png" alt="RTL" />, iconColor: "#ef4444", skillColor: "#0d1b2a" },
            ],
        },
        // ⚙️ Backend
        {
            title: "Backend",
            icon: "server",
            color: "text-purple-400",
            bgColor: "bg-purple-900/30",
            skills: [
                { name: "Node.js", icon: "fab fa-node", iconColor: "#68A063", skillColor: "#0d1b2a" },
                { name: "Express.js", icon: <SkillIcon src="/express.png" alt="Express" />, iconColor: "white", skillColor: "#0d1b2a" },
                { name: "GraphQL", icon: <SkillIcon src="/graphql.png" alt="GraphQL" />, iconColor: "#e535ab", skillColor: "#0d1b2a" },
                { name: "RESTful APIs", icon: "fas fa-plug", iconColor: "#22d3ee", skillColor: "#0d1b2a" },
                { name: "WebSocket", icon: "fas fa-exchange-alt", iconColor: "#22c55e", skillColor: "#0d1b2a" },
            ],
        },
        // 🗄️ Database
        {
            title: "Database",
            icon: "database",
            color: "text-amber-400",
            bgColor: "bg-amber-900/30",
            skills: [
                { name: "MongoDB", icon: <SkillIcon src="/mongo.png" alt="MongoDB" />, iconColor: "#4caf50", skillColor: "#0d1b2a" },
                { name: "PostgreSQL", icon: <SkillIcon src="/postgres.png" alt="PostgreSQL" />, iconColor: "#3b82f6", skillColor: "#0d1b2a" },
                { name: "MySQL", icon: <SkillIcon src="/mysql.png" alt="MySQL" />, iconColor: "#00758F", skillColor: "#0d1b2a" },
                { name: "Redis", icon: <SkillIcon src="/redis.png" alt="Redis" />, iconColor: "#ef4444", skillColor: "#0d1b2a" },
                { name: "Apache Kafka", icon: <SkillIcon src="/kafka.png" alt="Kafka" />, iconColor: "#facc15", skillColor: "#0d1b2a" },
            ],
        },
        // ☁️ DevOps
        {
            title: "DevOps & Cloud",
            icon: "cloud",
            color: "text-blue-400",
            bgColor: "bg-blue-900/30",
            skills: [
                { name: "AWS (ECS, EKS)", icon: "fab fa-aws", iconColor: "#FF9900", skillColor: "#0d1b2a" },
                { name: "Azure", icon: <SkillIcon src="/azure.png" alt="Azure" />, iconColor: "#0078D7", skillColor: "#0d1b2a" },
                { name: "Firebase", icon: "fas fa-fire", iconColor: "#f97316", skillColor: "#0d1b2a" },
                { name: "Docker", icon: "fab fa-docker", iconColor: "#38bdf8", skillColor: "#0d1b2a" },
                { name: "Kubernetes", icon: <SkillIcon src="/k8s.png" alt="Kubernetes" />, iconColor: "#3b82f6", skillColor: "#0d1b2a" },
                { name: "Jenkins", icon: <SkillIcon src="/jenkins.png" alt="Jenkins" />, iconColor: "#f43f5e", skillColor: "#0d1b2a" },
                { name: "GitHub Actions", icon: <SkillIcon src="/github.png" alt="GitHub Actions" />, iconColor: "#ffffff", skillColor: "#0d1b2a" },
                { name: "Railway App", icon: <SkillIcon src="/railway.png" alt="Railway" />, iconColor: "#22d3ee", skillColor: "#0d1b2a" },
            ],
        },
        // 🧰 Tools
        {
            title: "Tools & Collaboration",
            icon: "tools",
            color: "text-green-400",
            bgColor: "bg-green-900/30",
            skills: [
                { name: "Git", icon: "fab fa-git-alt", iconColor: "#f97316", skillColor: "#0d1b2a" },
                { name: "GitHub", icon: "fab fa-github", iconColor: "white", skillColor: "#0d1b2a" },
                { name: "GitLab", icon: <SkillIcon src="/gitlab.png" alt="GitLab" />, iconColor: "#fc6d26", skillColor: "#0d1b2a" },
                { name: "Jira", icon: <SkillIcon src="/jira.png" alt="Jira" />, iconColor: "#2684FF", skillColor: "#0d1b2a" },
                { name: "Confluence", icon: <SkillIcon src="/confluence.png" alt="Confluence" />, iconColor: "#0052CC", skillColor: "#0d1b2a" },
                { name: "Postman", icon: <SkillIcon src="/postman.png" alt="Postman" />, iconColor: "#f97316", skillColor: "#0d1b2a" },
                { name: "Swagger", icon: <SkillIcon src="/swagger.png" alt="Swagger" />, iconColor: "#22c55e", skillColor: "#0d1b2a" },
                { name: "Storybook", icon: <SkillIcon src="/storybook.png" alt="Storybook" />, iconColor: "#e11d48", skillColor: "#0d1b2a" },
                { name: "Webpack", icon: <SkillIcon src="/webpack.svg" alt="Webpack" />, iconColor: "#61dafb", skillColor: "#0d1b2a" },
                { name: "Vite", icon: <SkillIcon src="/vite.svg" alt="Vite" />, iconColor: "#facc15", skillColor: "#0d1b2a" },
                { name: "Figma", icon: "fab fa-figma", iconColor: "#a855f7", skillColor: "#0d1b2a" },
            ],
        },
        // 🧪 Testing
        {
            title: "Testing & Monitoring",
            icon: "vial",
            color: "text-pink-400",
            bgColor: "bg-pink-900/30",
            skills: [
                { name: "Jest", icon: <SkillIcon src="/jest.png" alt="Jest" />, iconColor: "#ef4444", skillColor: "#0d1b2a" },
                { name: "Mocha", icon: <SkillIcon src="/mocha.png" alt="Mocha" />, iconColor: "#d97706", skillColor: "#0d1b2a" },
                { name: "Cypress", icon: <SkillIcon src="/cypress.png" alt="Cypress" />, iconColor: "#22d3ee", skillColor: "#0d1b2a" },
                { name: "ELK Stack", icon: <SkillIcon src="/elk.png" alt="ELK Stack" />, iconColor: "#facc15", skillColor: "#0d1b2a" },
                { name: "Grafana", icon: <SkillIcon src="/grafana.png" alt="Grafana" />, iconColor: "#f97316", skillColor: "#0d1b2a" },
                { name: "Sentry", icon: <SkillIcon src="/sentry.png" alt="Sentry" />, iconColor: "#ef4444", skillColor: "#0d1b2a" },
            ],
        },
        // 💡 Others
        {
            title: "System Design & Others",
            icon: "lightbulb",
            color: "text-yellow-400",
            bgColor: "bg-yellow-900/30",
            skills: [
                { name: "Frontend System Design", icon: "fas fa-layer-group", iconColor: "#facc15", skillColor: "#0d1b2a" },
                { name: "Microservice Architecture", icon: "fas fa-network-wired", iconColor: "#22c55e", skillColor: "#0d1b2a" },
                { name: "CI/CD", icon: "fas fa-sync-alt", iconColor: "#3b82f6", skillColor: "#0d1b2a" },
                { name: "Agile & Scrum", icon: "fas fa-tasks", iconColor: "#a855f7", skillColor: "#0d1b2a" },
                { name: "Accessibility (WCAG)", icon: "fas fa-universal-access", iconColor: "#22d3ee", skillColor: "#0d1b2a" },
                { name: "Problem Solving", icon: "fas fa-brain", iconColor: "#f43f5e", skillColor: "#0d1b2a" },
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
