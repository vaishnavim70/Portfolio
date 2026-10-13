const sfSkillGroups = [
  {
    title: "Salesforce Testing",
    icon: "fa-solid fa-vial",
    skills: ["Functional Testing", "Non-Functional Testing", "Sanity", "Regression", "UI", "Compatibility", "Cross-Browser Testing"],
  },
  {
    title: "Salesforce Skills",
    icon: "fa-solid fa-cloud",
    skills: ["Data Modeling", "Custom Objects", "Page Layouts", "Record Types", "Flows", "Workflow Rules", "Validation Rules", "Reports & Dashboards"],
  },
  {
    title: "Security & Access",
    icon: "fa-solid fa-shield-halved",
    skills: ["Field-Level Security", "Object-Level Security", "Profiles", "Roles", "Permission Sets", "Security Settings"],
  },
  {
    title: "Salesforce Clouds",
    icon: "fa-solid fa-cloud-bolt",
    skills: ["Sales Cloud", "Service Cloud", "CPQ", "Leads", "Opportunities", "Accounts", "Contacts"],
  },
  {
    title: "Tools & Platforms",
    icon: "fa-solid fa-wrench",
    skills: ["JIRA", "ServiceNow", "BrowserStack", "Postman", "Provar", "ACCELQ", "MS Office"],
  },
  {
    title: "API & Data Testing",
    icon: "fa-solid fa-plug",
    skills: ["REST APIs", "SOQL Queries", "Data Validation", "Data Migration", "Integration Testing", "Source-to-Target Comparison"],
  },
  {
    title: "Methodologies",
    icon: "fa-solid fa-arrows-rotate",
    skills: ["Agile (Scrum)", "Sprint Planning", "Daily Stand-ups", "Sprint Review", "Retrospective", "SDLC", "STLC"],
  },
  {
    title: "Other Skills",
    icon: "fa-solid fa-star",
    skills: ["Bug Reporting", "Business Process Analysis", "Globalization Testing", "Defect Tracking", "Test Strategy", "Test Plans"],
  },
];

const SFSkills = () => {
  return (
    <section id="skills" className="section skills-section sf-skills-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag sf-tag">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="row">
          {sfSkillGroups.map((group, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 60}>
              <div className="skill-group-card sf-skill-card">
                <div className="skill-group-header">
                  <div className="skill-group-icon sf-skill-icon">
                    <i className={group.icon}></i>
                  </div>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="skill-tag sf-skill-tag">{skill}</span>
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

export default SFSkills;
