import { profile } from "../../data/profile";
import "../../css/Footer.css";

function Footer() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a className="footer__top" href="#home" onClick={scrollToTop}>
          맨 위로 ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
