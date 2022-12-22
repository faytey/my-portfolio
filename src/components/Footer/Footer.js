import "./Footer.css";
import linkedIn from "../../images/linkedin-logo.svg";
import twitter from "../../images/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyrights &copy; Faith Mama Roberts 2022. All Rights Reserved.</p>
      <Link
        to={{ pathname: "https://www.linkedin.com/in/faytey7" }}
        target="_blank"
      >
        <img src={linkedIn} alt="LinkedIn Profile" />
      </Link>
      <Link
        to={{ pathname: "https://www.twitter.com/faytey7" }}
        target="_blank"
      >
        <img src={twitter} alt="Twitter Profile" />
      </Link>
    </div>
  );
};

export default Footer;
