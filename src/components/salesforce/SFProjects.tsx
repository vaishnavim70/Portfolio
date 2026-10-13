const sfProjects = [
  {
    name: "Telecom CRM Transformation",
    subtitle: "Salesforce Sales Cloud & Service Cloud",
    highlights: [
      "Led end-to-end testing for large-scale CRM transformation for a telecom company.",
      "Executed functional, regression, integration, smoke, sanity, GUI, and data migration testing.",
      "Validated Salesforce-to-external system data consistency across CRM, billing, and order management.",
      "Collaborated with cross-functional teams to ensure seamless delivery aligned with business goals.",
    ],
    tech: ["Sales Cloud", "Service Cloud", "SOQL", "JIRA", "ServiceNow"],
  },
  {
    name: "Telecom Testing Platform",
    subtitle: "Salesforce Applications (Sales & Service Cloud)",
    highlights: [
      "Conducted end-to-end testing of Salesforce applications including Sales Cloud and Service Cloud.",
      "Translated business requirements into functional and non-functional test cases.",
      "Performed data validation using SOQL queries and source-to-target comparison.",
      "Configured Profiles, Roles, and Security Settings including FLS and OLS.",
    ],
    tech: ["Sales Cloud", "Service Cloud", "SOQL", "REST APIs", "BrowserStack"],
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
    tech: ["Salesforce", "Data Migration", "Integration Testing", "Provar"],
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
