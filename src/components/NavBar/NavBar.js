import "./NavBar.css";
import userImg from "../../images/faith.jpg";
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
        <div className="nav-brand">W</div>
        <input type="text" placeholder="Search.." />
        <div className="toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {(toggler || screen > 400) && (
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Companies</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Profiles</li>
          <li className="nav-item">Jobs</li>
          <li className="nav-item">Messages</li>
          <li className="nav-item">Notification</li>
        </ul>
      )}
      <div className="user">
        <img src={userImg} alt="user" />
        <span>Faith</span>
        <span className="arrow-down"></span>
      </div>
    </nav>
  );
};

export default NavBar;
