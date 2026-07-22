const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8">
            <div className="hero-badge" data-aos="fade-down">
              <i className="fa-solid fa-circle-check"></i> Available for work
            </div>
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              Vaishnavi <span>Mugale</span>
            </h1>
            <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              Frontend Engineer
            </h2>
            <p className="hero-desc" data-aos="fade-up" data-aos-delay="300">
              Frontend Engineer with 2+ years building enterprise-scale SPAs using
              React.js, TypeScript, and Tailwind CSS. Specialized in multi-tenant admin
              portals, API-driven UI systems, and real-time dashboards.
            </p>
            <div className="hero-meta" data-aos="fade-up" data-aos-delay="400">
              <span><i className="fa-solid fa-location-dot"></i> Manjari, Pune</span>
              <span><i className="fa-solid fa-envelope"></i> vaishnavimugale70@gmail.com</span>
              <span><i className="fa-solid fa-phone"></i> 7499971098</span>
            </div>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="500">
              <a href="#contact" className="btn-primary-solid">
                <i className="fa-solid fa-paper-plane"></i> Get In Touch
              </a>
              <a href="#projects" className="btn-primary-outline">
                <i className="fa-solid fa-folder-open"></i> View Projects
              </a>
              <a
                href="https://linkedin.com/in/vaishnavi-mugale-5055a220b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/vaishnavim70"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center d-none d-lg-block" data-aos="fade-left" data-delay="300">
            <div className="hero-image-wrap">
              <img src="/profile-photo.jpeg" alt="Vaishnavi Mugale" className="hero-image" />
              <div className="hero-image-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
