const SFHero = () => {
  return (
    <section id="home" className="hero sf-hero">
      <div className="hero-bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8">
            <div className="hero-badge sf-badge" data-aos="fade-down">
              <i className="fa-solid fa-cloud"></i> Salesforce Certified Professional
            </div>
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              Vaishnavi <span className="sf-gradient">Mugale</span>
            </h1>
            <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              Salesforce QA Tester
            </h2>
            <p className="hero-desc" data-aos="fade-up" data-aos-delay="300">
              Result-driven Salesforce Automation Engineer with 3+ years of experience
              in Salesforce Testing (Functional, Manual, UI) and expertise in Salesforce
              CRM, including Sales Cloud and Service Cloud. Proficient in manual testing,
              defect management, and ensuring high-quality user experience for
              Salesforce applications.
            </p>
            <div className="hero-meta" data-aos="fade-up" data-aos-delay="400">
              <span><i className="fa-solid fa-location-dot"></i> Manjari, Pune</span>
              <span><i className="fa-solid fa-envelope"></i> vaishnavimugale70@gmail.com</span>
              <span><i className="fa-solid fa-phone"></i> 7499971098</span>
            </div>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="500">
              <a href="#contact" className="btn-primary-solid sf-btn">
                <i className="fa-solid fa-paper-plane"></i> Get In Touch
              </a>
              <a href="#experience" className="btn-primary-outline sf-btn-outline">
                <i className="fa-solid fa-briefcase"></i> View Experience
              </a>
              <a
                href="https://linkedin.com/in/vaishnavi-mugale-5055a220b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon sf-icon-btn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center d-none d-lg-block" data-aos="fade-left" data-delay="300">
            <div className="hero-image-wrap">
              <img src="/profile-photo.png" alt="Vaishnavi Mugale" className="hero-image sf-hero-image" />
              <div className="hero-image-ring sf-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SFHero;
