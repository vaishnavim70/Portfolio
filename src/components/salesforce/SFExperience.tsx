const sfExperiences = [
  {
    role: "Salesforce QA Engineer",
    company: "Haven Infoline Pvt Ltd",
    location: "Pune",
    period: "Feb 2026 – Present",
    type: "Full-time",
    project: "Warehouse and Inventory Repository",
    highlights: [
      "Tested Salesforce applications end to end, including Sales Cloud.",
      "Analyzed business requirements and created functional and non-functional test cases.",
      "Executed functional, regression, smoke, sanity, exploratory, and UI testing.",
      "Tested standard Salesforce objects including Accounts, Contacts, Leads, Opportunities, Reports, and Dashboards.",
      "Validated data with SOQL queries and checked consistency between source and target systems.",
      "Participated in Agile ceremonies and created test strategies, test plans, and detailed test cases.",
      "Validated Profiles, Roles, Object-Level Security, and Field-Level Security against business rules.",
    ],
  },
  {
    role: "Salesforce QA Engineer",
    company: "Haven Infoline Pvt Ltd",
    location: "Pune",
    period: "Jan 2025 – Feb 2026",
    type: "Full-time",
    project: "Telecom Industry Testing Platform (Salesforce)",
    highlights: [
      "Involved in end-to-end testing of Salesforce applications, including Sales Cloud and Service Cloud.",
      "Gathered business requirements and translated them into functional and non-functional test cases.",
      "Executed functional, regression, sanity, and UI testing to ensure the application met business requirements and user expectations.",
      "Worked with Salesforce objects such as Accounts, Contacts, Leads, Opportunities, Reports, and Dashboards.",
      "Performed data validation testing using SOQL queries and compared source-to-target data.",
      "Participated in Agile Scrum ceremonies and contributed to improving testing processes.",
      "Created test strategies, test plans, and detailed test cases based on business requirements.",
      "Configured Profiles, Roles, and security settings, including Field-Level and Object-Level Security.",
    ],
  },
  {
    role: "Salesforce QA Engineer",
    company: "Code Icons Technology",
    location: "Pune",
    period: "Oct 2023 – Dec 2024",
    type: "Full-time",
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
            Key Achievement: Best Employee of the Month (October 2025)
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
