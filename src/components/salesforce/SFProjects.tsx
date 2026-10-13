const sfProjects = [
  {
    name: "Warehouse and Inventory Repository",
    subtitle: "Salesforce Sales Cloud",
    highlights: [
      "Tested Salesforce Sales Cloud end to end across functional, regression, smoke, sanity, exploratory, and UI scenarios.",
      "Converted business requirements into functional and non-functional test cases.",
      "Validated Salesforce records with SOQL and checked source-to-target data consistency.",
      "Verified standard objects, reports, dashboards, and role-based object and field security.",
    ],
    tech: ["Sales Cloud", "SOQL", "Functional Testing", "Security Testing"],
  },
  {
    name: "Telecom Testing Platform",
    subtitle: "Salesforce Applications (Sales & Service Cloud)",
    highlights: [
      "Conducted end-to-end testing of Salesforce Sales Cloud and Service Cloud applications.",
      "Translated business requirements into functional and non-functional test cases.",
      "Executed functional, regression, sanity, and UI testing and validated data using SOQL queries.",
      "Tested standard Salesforce objects and configured Profiles, Roles, Field-Level Security, and Object-Level Security.",
    ],
    tech: ["Sales Cloud", "Service Cloud", "SOQL", "Security Testing"],
  },
  {
    name: "Recruitment Agency CRM",
    subtitle: "Salesforce – Domain: Recruitment",
    highlights: [
      "Supported client onboarding and data capture across various objects and fields.",
      "Contributed to background processes for real-time system organization.",
      "Gained exposure to Integration and Data Migration processes.",
      "Owned user stories post-development through testing to closure.",
    ],
    tech: ["Salesforce", "Data Migration", "Integration Testing"],
  },
];

const SFProjects = () => {
  return (
    <section id="projects" className="section projects-section sf-projects-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag sf-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Salesforce testing projects delivered with quality and precision
          </p>
        </div>
        <div className="row">
          {sfProjects.map((project, index) => (
            <div className="col-lg-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-card sf-project-card">
                <div className="project-card-header">
                  <div className="project-icon sf-project-icon">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag sf-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SFProjects;
