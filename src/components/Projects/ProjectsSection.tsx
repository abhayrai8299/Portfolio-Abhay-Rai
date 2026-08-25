type Project = {
  title: string;
  label: string;
  description: string;
  tags: string[];
  live: string;
  source?: string;
  image?: string;
  icon: string;
};

const projects: Project[] = [
  {
    title: "ReelMatch",
    label: "AI MOVIE ASSISTANT",
    description: "A personal movie compass that checks the facts, learns a viewer’s taste, and explains whether a film is worth their time—moving beyond generic ratings to transparent, personalized recommendations.",
    tags: ["Generative AI", "Taste profiling", "Recommendation UX", "JavaScript"],
    live: "https://reelmatch-movie-assistant-git-main-abhayrai8299-4122s-projects.vercel.app/index.html",
    source: "https://github.com/abhayrai8299/reelmatch-movie-assistant",
    image: "/reelmatch.png",
    icon: "fa-wand-magic-sparkles",
  },
  {
    title: "Ekart",
    label: "FULL-STACK COMMERCE",
    description: "A secure e-commerce experience with Firebase authentication, JWT role protection, and dynamic product, cart, and order workflows across a responsive interface.",
    tags: ["React", "Node.js", "Express", "Firebase", "JWT"],
    live: "https://ekart-28b23.web.app/dashboard/",
    icon: "fa-bag-shopping",
  },
  {
    title: "Jobify",
    label: "JOB PLATFORM",
    description: "A job discovery platform with dynamic filters, profile workflows, real-time alerts, secure APIs, and a mobile-friendly experience for candidates and recruiters.",
    tags: ["React", "Redux", "Node.js", "MongoDB", "React Native"],
    live: "https://mploi.com",
    icon: "fa-briefcase",
  },
  {
    title: "Expenditure Tracker",
    label: "FINTECH TOOL",
    description: "A personal finance web app with complete expense CRUD, category filters, persistent data, and clear Chart.js visualizations for understanding spending patterns.",
    tags: ["React", "Express", "MongoDB", "Chart.js"],
    live: "https://abhayrai8299.github.io/Expendituretracker/",
    icon: "fa-chart-line",
  },
];

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="project-links">
    <a href={project.live} target="_blank" rel="noreferrer">Live project <i className="fas fa-arrow-up-right-from-square" /></a>
    {project.source && <a href={project.source} target="_blank" rel="noreferrer"><i className="fab fa-github" /> Source</a>}
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="section container">
    <div className="section-heading">
      <div><p className="eyebrow">SELECTED WORK</p><h2>Products with purpose,<br />built to perform.</h2></div>
      <p>A selection of AI and full-stack products where product thinking, architecture, performance, and polished UX meet.</p>
    </div>
    <article className="featured-project project-card">
      <div className="featured-copy">
        <div className="project-number">01 <span>Featured</span></div>
        <p className="project-label"><i className={`fas ${projects[0].icon}`} /> {projects[0].label}</p>
        <h3>{projects[0].title}</h3>
        <p>{projects[0].description}</p>
        <div className="tags">{projects[0].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <ProjectLinks project={projects[0]} />
      </div>
      <a className="project-preview" href={projects[0].live} target="_blank" rel="noreferrer" aria-label="Open ReelMatch live project">
        <img src={projects[0].image} alt="ReelMatch AI movie assistant interface" />
        <span>Open experience <i className="fas fa-arrow-up-right-from-square" /></span>
      </a>
    </article>
    <div className="project-grid">
      {projects.slice(1).map((project, index) => (
        <article className="project-card compact-project" key={project.title}>
          <div className="project-number">0{index + 2}</div>
          <div className="project-icon"><i className={`fas ${project.icon}`} /></div>
          <p className="project-label">{project.label}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <ProjectLinks project={project} />
        </article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
