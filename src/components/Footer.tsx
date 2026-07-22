const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="logo-text">V</span>M
          </div>
          <div className="footer-links">
            <a href="https://linkedin.com/in/vaishnavi-mugale-5055a220b/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/vaishnavim70" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:vaishnavimugale70@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:+917499971098">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
          <p className="footer-copy">&copy; 2024 Vaishnavi Mugale. Built with React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
