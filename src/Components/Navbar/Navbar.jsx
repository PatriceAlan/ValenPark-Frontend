import './Navbar.css';

const Navbar = () => {
    return (
      <div className="nav">

      <div className="nav-logo">ValenPark </div>

          <ul className="nav-menu">

            <a href="/" className='navbar-link'><li>Accueil</li></a>
            
            <a href="#" className='navbar-link'><li>Explorer</li></a>

            <a href="#" className='navbar-link'><li>A propos</li></a>
            
            <a href="#" className='nav-connexion'><li>Connexion</li></a>
          </ul>
      
     </div>
      
    )
  }
  
  export default Navbar;