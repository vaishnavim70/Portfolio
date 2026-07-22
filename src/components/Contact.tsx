const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-desc">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="contact-grid">
              <a href="mailto:vaishnavimugale70@gmail.com" className="contact-card">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span className="contact-label">Email</span>
                <span className="contact-value">vaishnavimugale70@gmail.com</span>
              </a>
              <a href="tel:+917499971098" className="contact-card">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span className="contact-label">Phone</span>
                <span className="contact-value">+91 74999 71098</span>
              </a>
              <a
                href="https://linkedin.com/in/vaishnavi-mugale-5055a220b/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Vaishnavi Mugale</span>
              </a>
              <a
                href="https://github.com/vaishnavim70"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <span className="contact-label">GitHub</span>
                <span className="contact-value">vaishnavim70</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
