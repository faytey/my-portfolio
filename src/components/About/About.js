import NavBar from "../NavBar/NavBar";
import "./About.css";
import image from "../../images/faith.jpg";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="About">
      <NavBar />
      <div className="myInfo">
        <h1>
          <span>About</span> Me
        </h1>
        <hr />
        <div className="aboutFaith">
          <div className="image"></div>
          <p>
            My name is Faith M. Roberts and I am a frontend web developer with
            less than a year of experience working with ReactJS. I have a strong
            understanding of JavaScript and am skilled at using React to build
            efficient and user-friendly web applications. I am also proficient
            in HTML, CSS, and responsive design techniques. In my previous role,
            I worked on a number of projects where I utilized my React skills to
            build components, manage state, and implement features such as
            authentication and data visualization. I am a quick learner and am
            always looking to expand my skillset and stay up to date with the
            latest industry trends. I am excited to continue growing as a
            developer and making meaningful contributions to projects.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
