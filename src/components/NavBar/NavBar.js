import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [toggler, setToggler] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);
  const toggleMenu = () => {
    setToggler(!toggler);
  };

  useEffect(() => {
    const width = () => {
      setScreen(window.innerWidth);
    };

    return () => {
      window.removeEventListener("resize", width);
    };
  }, []);
  return (
    <nav className="nav">
      <div className="navs">
        <Link to="/">
          <div className="nav-brand">FAITH R.</div>
        </Link>
        <div className="toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {(toggler || screen > 900) && (
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
      )}
    </nav>
  );
};

export default NavBar;
