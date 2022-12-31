import "./LeftSideBar.css";
import UserPic from "../../images/faith.jpg";

const LeftSideBar = () => {
  return (
    <div className="left">
      <div className="bio-data left-bio">
        <div className="user">
          {/* <img src={UserPic} alt="user" /> */}
        </div>
        <div className="info">
          <span>Faith M. Roberts</span>
          <p>Web Developer at Self Employed</p>
        </div>
        <div className="following">
          <span>Following</span>
          <h4>34</h4>
        </div>
        <div className="followers">
          <span>Followers</span>
          <h4>154</h4>
        </div>
        <button className="view">View Profile</button>
      </div>

      <div className="bio-data">
        <h2>Suggestions</h2>

        <div className="person">
          <div className="data">
            <img src={UserPic} alt="user" />
            <div>
              <h4>Faith M. Roberts</h4>
              <span>Web Developer</span>
            </div>
          </div>
          <div>+</div>
        </div>
        <div className="person">
          <div className="data">
            <img src={UserPic} alt="user" />
            <div>
              <h4>Faith M. Roberts</h4>
              <span>Web Developer</span>
            </div>
          </div>
          <div>+</div>
        </div>
        <div className="person">
          <div className="data">
            <img src={UserPic} alt="user" />
            <div>
              <h4>Faith M. Roberts</h4>
              <span>Web Developer</span>
            </div>
          </div>
          <div>+</div>
        </div>
        <div className="person">
          <div className="data">
            <img src={UserPic} alt="user" />
            <div>
              <h4>Faith M. Roberts</h4>
              <span>Web Developer</span>
            </div>
          </div>
          <div>+</div>
        </div>
        <div className="person">
          <div className="data">
            <img src={UserPic} alt="user" />
            <div>
              <h4>Faith M. Roberts</h4>
              <span>Web Developer</span>
            </div>
          </div>
          <div>+</div>
        </div>
        <div className="person">
          <div className="data">
            <img src={UserPic} alt="user" />
            <div>
              <h4>Faith M. Roberts</h4>
              <span>Web Developer</span>
            </div>
          </div>
          <div>+</div>
        </div>
        <button className="view">View More</button>
      </div>
      <div className="bio-data footers">
        <div>Help Center | About | Privacy Policy</div>
        <div>Community Guidelines | Cookies Policy</div>
        <div>Career | Language | Copyright Policy</div>
        <br />
        <span>W Workwise</span> <span>&copy; Copyright 2017</span>
      </div>
    </div>
  );
};

export default LeftSideBar;
