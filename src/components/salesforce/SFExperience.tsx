const sfExperiences = [
  {
    role: "Salesforce Tester",
    company: "Lockated",
    location: "Pune",
    period: "Jul 2024 – Present",
    type: "Full-time",
    project: "Telecom Industry CRM Transformation Project",
    highlights: [
      "Led testing efforts for a large-scale CRM transformation initiative for a telecom company, focusing on Salesforce Sales Cloud and Service Cloud.",
      "Conducted diverse testing types including end-to-end, integration, smoke, sanity, functional, non-functional, GUI, bulk data upload validation, SOQL-based data verification, and data migration testing.",
      "Collaborated with cross-functional teams including Business, Solution Design, Developers, Integration, Data Migration, and QA Testing teams to ensure seamless delivery aligned with business goals.",
      "Developed and executed detailed test plans and test cases based on business requirements and user stories.",
      "Ensured high-quality deliverables through meticulous defect tracking and resolution using JIRA and ServiceNow.",
      "Performed Salesforce-to-external system integration testing, ensuring data consistency between CRM, billing, and order management systems.",
    ],
  },
  {
    role: "Salesforce QA",
    company: "Lockated",
    location: "Pune",
    period: "Jul 2024",
    type: "Full-time",
    project: "Telecom Industry Testing Platform (Salesforce)",
    highlights: [
      "Involved in end-to-end testing of Salesforce applications, including Sales Cloud and Service Cloud.",
      "Gathered business requirements and translated them into functional and non-functional test cases.",
      "Executed functional, regression, sanity, and UI testing, ensuring the application met business requirements.",
      "Worked with Salesforce objects such as Accounts, Contacts, Leads, Opportunities, Reports, and Dashboards.",
      "Performed data validation testing using SOQL queries and compared source-to-target data.",
      "Configured Profiles, Roles, and Security Settings (Field-Level Security, Object-Level Security).",
    ],
  },
  {
    role: "Intern – Salesforce QA",
    company: "Code Icons Technology",
    location: "Pune",
    period: "Apr 2023 – Jun 2024",
    type: "Internship",
    project: "Recruitment Agency (Salesforce)",
    highlights: [
      "Supported onboarding of clients and capture of required information across various objects and fields within the system.",
      "Contributed to background processes that kept the system organized and informative in real time.",
      "Worked collaboratively across teams, gaining exposure to Integration and Data Migration processes.",
      "Took ownership of user stories post-development and deployment, handling testing through to closure.",
    ],
  },
];

const SFExperience = () => {
  return (
    <section id="experience" className="section experience-section sf-experience-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag sf-tag">Career Path</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">
            Key Achievements: Best Employee of the Month (October 2024) &amp; Best Employee of the Quarter (April–June 2024)
          </p>
        </div>
        <div className="timeline sf-timeline">
          {sfExperiences.map((exp, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="timeline-dot sf-dot"></div>
              <div className="timeline-content sf-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company sf-company">{exp.company} &middot; {exp.location}</span>
                    <p className="sf-project-name"><i className="fa-solid fa-diagram-project"></i> {exp.project}</p>
                  </div>
                  <div className="exp-right">
                    <span className="exp-type sf-type">{exp.type}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SFExperience;
