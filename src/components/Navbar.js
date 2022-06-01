const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#profile" className="logo">
        AF.
      </a>

      <ul className="nav-links">
        <li className="nav-link main-projects-link">
          <a className="main-projects-cta nav-link-cta" href="#main-projects">
            main projects
          </a>
        </li>
        <li className="nav-link mini-projects-link">
          <a className="mini-projects-cta nav-link-cta" href="#mini-projects">
            mini projects
          </a>
        </li>
        <li className="nav-link communication-link">
          <a
            className="communication-link-cta nav-link-cta"
            href="#communication-wrapper"
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
