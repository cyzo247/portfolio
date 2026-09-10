import { useEffect, useMemo, useState } from "react";
import { navItems } from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import "../../css/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="header__inner">
        <a
          className="header__brand"
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
        >
          Portfolio
        </a>

        <nav
          id="primary-nav"
          className={`header__nav${menuOpen ? " header__nav--open" : ""}`}
          aria-label="주요 메뉴"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`header__link${
                activeId === item.id ? " header__link--active" : ""
              }`}
              aria-current={activeId === item.id ? "true" : undefined}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`header__toggle${menuOpen ? " header__toggle--open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
