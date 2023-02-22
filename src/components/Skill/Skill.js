import "./Skill.css";

const Skill = ({ text, backgroundImage }) => {
  return (
    <div className="skill" style={{backgroundImage}}>
      <span>{text}</span>
    </div>
  );
};

export default Skill;
