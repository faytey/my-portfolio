import "./Hero.css";
import HeroImg from "../../images/faith.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="info">
        <p className="greet">HI👋 I'm</p>
        <p className="name">Faith M. Roberts</p>
        <p className="role">A Web Developer</p>
        <Link
          to={{ pathname: "https://www.github.com/faytey" }}
          target="_blank"
        >
          <button>Visit My Github</button>
        </Link>
      </div>
      <img src={HeroImg} alt="Faith.png" />
    </div>
  );
};

export default Hero;
