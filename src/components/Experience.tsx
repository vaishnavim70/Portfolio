const experiences = [
  {
    role: "Software Engineer",
    company: "Lockated.com",
    location: "Pune",
    period: "Sep 2024 – Present",
    type: "Full-time",
    highlights: [
      "Delivered 100+ API integrations across 3 enterprise products, supporting 500+ concurrent users with robust error handling and state management.",
      "Built reusable component architecture including dynamic SLA-based Escalation Matrix and Analytics dashboards, reducing UI customization time by 25% and improving overall UI development efficiency by 25%.",
      "Wrote unit and component tests using Jest and React Testing Library to validate critical UI flows and form logic.",
    ],
  },
  {
    role: "Full Stack Trainee",
    company: "Adhayayan Institute",
    location: "Pune",
    period: "Dec 2023 – Mar 2024",
    type: "Internship/Training",
    highlights: [
      "Implemented responsive React UIs with HTML/CSS/Tailwind, Git workflows, and REST APIs for CRUD apps during 4-month intensive program.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Career Path</span>
          <h2 className="section-title">Work Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">{exp.company} &middot; {exp.location}</span>
                  </div>
                  <div className="exp-right">
                    <span className="exp-type">{exp.type}</span>
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

export default Experience;
