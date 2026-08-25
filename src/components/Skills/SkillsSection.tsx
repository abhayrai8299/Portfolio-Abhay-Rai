const categories = [
  { icon: "fa-brain", title: "AI & Product", text: "AI-assisted experiences, recommendation UX, prompt-driven workflows, product thinking" },
  { icon: "fa-laptop-code", title: "Frontend Systems", text: "React, Next.js, TypeScript, React Native, Redux Toolkit, Zustand, Tailwind CSS" },
  { icon: "fa-server", title: "Backend & Data", text: "Node.js, Express, GraphQL, REST, WebSockets, MongoDB, PostgreSQL, Redis, Kafka" },
  { icon: "fa-cloud", title: "Cloud & Delivery", text: "AWS ECS/EKS, Azure, Docker, Kubernetes, Jenkins, GitHub Actions, Firebase" },
  { icon: "fa-gauge-high", title: "Quality & Performance", text: "Jest, Cypress, React Testing Library, Lighthouse, WebPageTest, Core Web Vitals" },
  { icon: "fa-cubes", title: "Architecture", text: "Microservices, SSR/SSG, ISR, API design, CI/CD, accessibility, system design" },
];

const marquee = ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Kafka"];

const SkillsSection = () => (
  <section id="skills" className="section container">
    <div className="section-heading">
      <div><p className="eyebrow">CAPABILITIES</p><h2>From idea to<br />reliable system.</h2></div>
      <p>I work across the product stack—shaping the experience, engineering the platform, and building the delivery path that keeps it dependable.</p>
    </div>
    <div className="capability-grid">
      {categories.map(category => (
        <article className="capability-card" key={category.title}>
          <i className={`fas ${category.icon}`} />
          <h3>{category.title}</h3>
          <p>{category.text}</p>
        </article>
      ))}
    </div>
    <div className="tech-marquee" aria-label="Core technologies">
      <div>{[...marquee, ...marquee].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div>
    </div>
  </section>
);

export default SkillsSection;
