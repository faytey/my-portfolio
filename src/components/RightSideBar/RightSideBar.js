import "./RightSideBar.css";
import UserPic from "../../images/faith.jpg";

const RightSideBar = () => {
  return (
    <div className="left">
      <div className="bio-data">
        <h1>W</h1>
        <h3>Track time on Workwise</h3>
        <p>Pay only for the hours worked</p>
        <br />
        <hr />
        <h3>Sign Up</h3>
        <button className="view">Learn More</button>
      </div>
      <div className="bio-data">
        <h2>Top Jobs</h2>

        <div className="person .right">
          <div className="data">
            <div>
              <h4>Web Developer</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div>$25/hr</div>
        </div>
        <div className="person .right">
          <div className="data">
            <div>
              <h4>Web Developer</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div>$25/hr</div>
        </div>
        <div className="person .right">
          <div className="data">
            <div>
              <h4>Web Developer</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div>$25/hr</div>
        </div>
        <div className="person .right">
          <div className="data">
            <div>
              <h4>Web Developer</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div>$25/hr</div>
        </div>
        <div className="person .right">
          <div className="data">
            <div>
              <h4>Web Developer</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div>$25/hr</div>
        </div>
      </div>
      <div className="bio-data">
        <h2>Most Viewed This Week</h2>

        <div className="person .right">
          <div className="data">
            <div>
              <h4>Web Developer</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div>$25/hr</div>
        </div>
        <div className="person .right">
          <div className="data">
            <div>
              <h4>Web Developer</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div>$25/hr</div>
        </div>
        <div className="person .right">
          <div className="data">
            <div>
              <h4>Web Developer</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div>$25/hr</div>
        </div>
      </div>
      <div className="bio-data">
        <h2>Most Viewed People</h2>

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
    </div>
  );
};

export default RightSideBar;
