const skillGroups = [
  {
    title: "Frontend",
    icon: "fa-solid fa-code",
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "State Management",
    icon: "fa-solid fa-layer-group",
    skills: ["Redux", "Redux Toolkit", "Context API", "React Hooks", "React Router"],
  },
  {
    title: "API Integration",
    icon: "fa-solid fa-plug",
    skills: ["RESTful APIs", "Axios", "JSON Handling", "CRUD Operations", "Async/Await", "WebSockets"],
  },
  {
    title: "Data Visualization",
    icon: "fa-solid fa-chart-line",
    skills: ["Recharts", "Chart.js", "Bar, Line, Pie Charts", "Heat Maps", "KPI Dashboards"],
  },
  {
    title: "Architecture & Performance",
    icon: "fa-solid fa-bolt",
    skills: ["Component-Based Design", "Lazy Loading", "Code Splitting", "Reusable Component Libraries"],
  },
  {
    title: "Tools & Workflow",
    icon: "fa-solid fa-wrench",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Agile/Scrum", "CI/CD (GitHub Actions)", "Jira", "Figma"],
  },
  {
    title: "Testing & Debugging",
    icon: "fa-solid fa-vial",
    skills: ["Jest", "React Testing Library", "API Testing", "UI Debugging", "Component Testing"],
  },
  {
    title: "AI & Productivity",
    icon: "fa-solid fa-robot",
    skills: ["GitHub Copilot", "Claude AI", "ChatGPT", "Codeium"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="row">
          {skillGroups.map((group, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 60}>
              <div className="skill-group-card">
                <div className="skill-group-header">
                  <div className="skill-group-icon">
                    <i className={group.icon}></i>
                  </div>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
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

export default Skills;
