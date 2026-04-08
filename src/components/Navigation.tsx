import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/het-huisje", label: "Het huisje" },
  { to: "/aankomst-vertrek", label: "Aankomst & Vertrek" },
  { to: "/tarieven", label: "Tarieven & Voorwaarden" },
  { to: "/het-park", label: "Het Park" },
  { to: "/contact", label: "Contact" },
  { to: "/reserveren", label: "Reserveren" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <NavLink
          to="/"
          className="site-logo"
          onClick={() => setMenuOpen(false)}
        >
          Capfun De Bongerd 227
        </NavLink>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Navigatiemenu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        <nav
          id="main-nav"
          className={`site-nav${menuOpen ? " open" : ""}`}
          aria-label="Hoofdnavigatie"
          onKeyDown={handleNavKeyDown}
        >
          <ul>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
