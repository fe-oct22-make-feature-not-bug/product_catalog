import React, { memo } from "react";
import { Link } from "react-router-dom";
import chevronUp from "../../assets/icons/chevron-up.svg";
import { Logo } from "../Logo";
import "./Footer.scss";

const navLinksLabel = ["github", "contacts", "rights"];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const Footer: React.FC = memo(() => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className="footer__navigation">
          <ul className="footer__list">
            {navLinksLabel.map((navLink) => (
              <li className="footer__list-item text-uppercase" key={navLink}>
                <Link
                  to="https://github.com/fe-oct22-make-feature-not-bug"
                  className="footer__link"
                  target="_blank"
                >
                  {navLink}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__toTop">
          <p className="footer__toTop-label text-small">Back to top</p>
          <button
            type="submit"
            className="footer__toTop-button"
            onClick={scrollToTop}
          >
            <img
              className="footer__toTop-icon"
              src={chevronUp}
              alt="back to top"
            />
          </button>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
