const projects = [
  {
    name: "FM Matrix",
    subtitle: "Enterprise Facility Management Platform",
    repo: "helloakshay27/fm-matrix-revamp",
    url: "https://github.com/helloakshay27/fm-matrix-revamp",
    commits: 6,
    tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Recharts"],
    highlights: [
      "Built the frontend of a large-scale multi-tenant admin platform supporting enterprise facility operations.",
      "Delivered core modules (Ticketing, Parking, Visitors, Utilities, Dashboards, Analytics) with full CRUD, search/filter, and paginated data tables.",
      "Dynamic form-schema engine to render UI from API configs, reducing development effort for new modules.",
      "Optimized performance using lazy loading, code-splitting, and memoization, improving load time by 30%.",
    ],
  },
  {
    name: "Hi Society",
    subtitle: "Resident & Society Management Platform",
    repo: "helloakshay27/hi-society-repo",
    url: "https://github.com/helloakshay27/hi-society-repo",
    commits: 7,
    tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "WebSockets"],
    highlights: [
      "Built end-to-end frontend for multiple modules including Helpdesk, SmartSecure, Fitout, Notifications, and Escalation Matrix.",
      "Developed a real-time visitor management system using WebSockets for live gate-entry tracking.",
      "Implemented a dynamic Escalation Matrix with multi-level SLA rules using an API-driven nested structure.",
      "Managed complete ticket lifecycle flows with escalation, status tracking, and notifications.",
    ],
  },
  {
    name: "Real Estate Admin CMS",
    subtitle: "Multi-client Platform",
    repo: null,
    url: null,
    commits: 0,
    tech: ["React.js", "Tailwind CSS", "REST APIs", "Context API"],
    highlights: [
      "Developed a multi-client CMS platform supporting multiple real estate brands using a single shared codebase.",
      "Built dynamic reusable components with client-specific theming using base-URL driven logic.",
      "Implemented modules for project listings, media uploads, and lead management workflows.",
      "Developed role-based UI rendering using Context API to control access across user types.",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Enterprise-scale applications I've built and contributed to
          </p>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-icon">
                    <i className="fa-solid fa-folder"></i>
                  </div>
                  {/* <div className="project-links">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                  </div> */}
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <ul className="project-highlights">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                {/* {project.commits > 0 && (
                  <div className="project-commits">
                    <i className="fa-solid fa-code-commit"></i> {project.commits} commits
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
