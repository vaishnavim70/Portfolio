const SFEducation = () => {
  return (
    <section id="education" className="section education-section sf-education-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag sf-tag">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="education-card sf-edu-card">
              <div className="edu-icon sf-edu-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="edu-content">
                <h3>BE in Computer Science</h3>
                <span className="edu-school sf-school">Sinhgad Institute of Technology</span>
                <div className="edu-meta">
                  <span className="edu-cgpa sf-cgpa">
                    <i className="fa-solid fa-star"></i> CGPA: 8.74 / 10.0
                  </span>
                  <span className="edu-period">Aug 2020 – Sept 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SFEducation;
