
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><Link to="/">Food Blog</Link></h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Abouts">Abouts</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;