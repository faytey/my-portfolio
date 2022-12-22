import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav-brand">FAITH R.</div>
      </Link>
      <ul className="nav-list">
        <Link to="/">
          <li className="nav-item">HOME</li>
        </Link>
        <Link to="/about">
          <li className="nav-item">ABOUT</li>
        </Link>
        <Link to="/skills">
          <li className="nav-item">SKILLS</li>
        </Link>
        <Link to="/contact">
          <li className="nav-item">CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
