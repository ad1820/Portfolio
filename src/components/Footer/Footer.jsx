import "./Footer.css";

const Footer = () => {
  return (
    <footer className="anime-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Aditya Patidar. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/1aditya/" target="_blank">LinkedIn</a>
          <a href="https://github.com/ad1820" target="_blank">GitHub</a>
          <a href="https://www.reddit.com/u/Expensive-Ad7919/s/1Q4zpIhX0p" target="_blank">Reddit</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
