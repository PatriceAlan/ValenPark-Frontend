import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          ValenPark
        </a>
        <ul className="nav-menu">
          <li>
            <a href="/" className="navbar-link">
              Accueil
            </a>
          </li>
          <li>
            <a href="/explorer" className="navbar-link">
              Explorer
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              A propos
            </a>
          </li>
          <li>
            <a href="/connexion" className="navbar-connexion">
              Connexion
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
