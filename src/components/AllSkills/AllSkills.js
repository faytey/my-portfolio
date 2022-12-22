import Skill from "../Skill/Skill";
import "./AllSkills.css";
import html from "../../images/html.jfif";
import css from "../../images/css.jpeg";
import js from "../../images/js.webp";
import bootstrap from "../../images/bootstrap.webp";
import tailwind from "../../images/tailwind.png";
import react from "../../images/react.png";

const AllSkills = () => {
  return (
    <div className="allSkills">
      <Skill className="skill1" backgroundImage={`url(${html})`} text="HTML" />
      <Skill className="skill2" backgroundImage={`url(${css})`} text="CSS" />
      <Skill
        className="skill3"
        backgroundImage={`url(${js})`}
        text="JAVASCRIPT"
      />
      <Skill
        className="skill4"
        backgroundImage={`url(${bootstrap})`}
        text="BOOTSTRAP"
      />
      <Skill
        className="skill5"
        backgroundImage={`url(${tailwind})`}
        text="TAILWIND"
      />
      <Skill
        className="skill6"
        backgroundImage={`url(${react})`}
        text="REACT"
      />
    </div>
  );
};

export default AllSkills;
