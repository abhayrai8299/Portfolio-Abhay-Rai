type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  wins: string[];
  stack: string[];
};

const experience: Experience[] = [
  {
    role: "Associate Tech Lead",
    company: "Paxcom",
    period: "JUL 06, 2026 — PRESENT",
    summary: "Leading technical execution and product engineering as Associate Tech Lead, bringing full-stack architecture, performance, delivery, and team-level engineering experience to Paxcom.",
    wins: ["Joined Paxcom as Associate Tech Lead on 6 July 2026.", "Driving technical execution across scalable, production-grade product development."],
    stack: ["Technical Leadership", "Full-Stack Engineering", "System Design", "Product Delivery"],
  },
  {
    role: "Senior Engineer",
    company: "Nagarro",
    period: "APR 2024 — JUL 03, 2026",
    summary: "Building enterprise-grade React, Next.js, Node.js, and GraphQL products while improving the systems that ship and operate them.",
    wins: ["Improved initial load speed by 40% through memoization, lazy loading, and code splitting.", "Cut deployment time by 50% with Jenkins, Docker, and Kubernetes pipelines.", "Reduced MTTR by 30% with ELK Stack and Grafana observability."],
    stack: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL", "Kubernetes", "Kafka"],
  },
  {
    role: "Software Engineer II",
    company: "Equipped Analytical Intelligence",
    period: "JUN 2023 — APR 2024",
    summary: "Created real-time financial analytics experiences backed by secure, asynchronous services and a reusable component system.",
    wins: ["Delivered real-time dashboards with React and Zustand.", "Secured integrations with JWT, OAuth2, and role-based access.", "Reduced build times by 40% through GitHub Actions and Azure DevOps."],
    stack: ["React", "Node.js", "PostgreSQL", "Azure", "Zustand", "Storybook"],
  },
  {
    role: "Software Engineer",
    company: "Cod4Solutions",
    period: "JAN 2021 — JUN 2023",
    summary: "Built and scaled an e-commerce SPA serving 50K+ users, from reusable interfaces to secure backend services and optimized data models.",
    wins: ["Improved backend performance by 25% using Node.js, Express, and MongoDB.", "Implemented secure full-stack JWT authentication.", "Enhanced discoverability through metadata, structured data, and LCP improvements."],
    stack: ["React", "Redux", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section experience-section">
    <div className="container">
      <div className="section-heading">
        <div><p className="eyebrow">EXPERIENCE</p><h2>Built in production.<br />Proven at scale.</h2></div>
        <p>Six-plus years of shipping measurable improvements across technical leadership, product engineering, performance, cloud delivery, security, and observability.</p>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="experience-row" key={item.company}>
            <div className="timeline-marker"><span>0{index + 1}</span></div>
            <div className="experience-meta"><p>{item.period}</p><h3>{item.role}</h3><a>{item.company}</a></div>
            <div className="experience-detail">
              <p className="experience-summary">{item.summary}</p>
              <ul>{item.wins.map(win => <li key={win}>{win}</li>)}</ul>
              <div className="tags">{item.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
