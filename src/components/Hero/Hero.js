import "./Hero.css";
import pic from "../../images/faith.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="info red-top">
        <img src={pic} alt="user" />
        <div>
          <button className="bg">Post a Project</button>
          <button className="bg-red">Post a Job</button>
        </div>
      </div>
      <div className="info profiler">
        <div className="bio spaced">
          <div className="bio gapped">
            <img src={pic} alt="user" />
            <div>
              <h4>Faith M. Roberts</h4>
              <p>🕑 3 min ago</p>
            </div>
          </div>
          <span>:</span>
        </div>
        <div className="bio spaced">
          <div className="bio gapped">
            <span>🪟 Epic Coder</span>
            <div className="bio gapped">
              <span className="location"></span>
              <span>Nigeria</span>
            </div>
          </div>
          <div className="bio gapped">
            <span className="bg-green slightly-rounded">
              <span className="label"></span>
            </span>
            <span className="bg-red slightly-rounded">✉️</span>
          </div>
        </div>
        <h2>Senior Web Developer</h2>
        <div className="bio gapped">
          <span className="bg-green">Full Time</span>
          <span>$30/hr</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel
          laborum rem libero vero molestiae accusamus debitis autem dolor odio
          mollitia distinctio eos quasi, consectetur magni excepturi saepe?
          Ducimus, iste.
        </p>
        <div className="bio gapped">
          <button className="btns">HTML</button>
          <button className="btns">PHP</button>
          <button className="btns">CSS</button>
          <button className="btns">Javascript</button>
          <button className="btns">Wordpress</button>
        </div>
        <hr />
        <div className="bio spaced">
          <div className="bio gapped">
            <div className="bio gapped">
              <span>🖤</span>
              <span>Like</span>
              <span className="bg-red rounded">25</span>
            </div>
            <div className="bio gapped">
              <span>📤</span>
              <span>Comments</span>
              <span>15</span>
            </div>
          </div>
          <div className="bio gapped">
            <span>👁️‍🗨️</span>
            <span>Views</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <div className="profiler top-profiles">
        <div className="top-profile bio spaced">
          <h2>Top Profiles</h2>
          <span>:</span>
        </div>
        <div className="card-display">
          <div className="card">
            <div className="top-card">
              <img src={pic} alt="user" />
              <h4>Faith M. Roberts</h4>
              <p>Frontend Developer</p>
              <div className="bio gapped">
                <button className="bg-green slightly-rounded">Follow</button>
                <button className="bg-red slightly-rounded">✉️</button>
                <button className="bg-blue slightly-rounded">Hire</button>
              </div>
            </div>
            <button className="card-btn bg-white">View Profile</button>
          </div>
          <div className="card">
            <div className="top-card">
              <img src={pic} alt="user" />
              <h4>Faith M. Roberts</h4>
              <p>Frontend Developer</p>
              <div className="bio gapped">
                <button className="bg-green slightly-rounded">Follow</button>
                <button className="bg-red slightly-rounded">✉️</button>
                <button className="bg-blue slightly-rounded">Hire</button>
              </div>
            </div>
            <button className="card-btn bg-white">View Profile</button>
          </div>
          <div className="card">
            <div className="top-card">
              <img src={pic} alt="user" />
              <h4>Faith M. Roberts</h4>
              <p>Frontend Developer</p>
              <div className="bio gapped">
                <button className="bg-green slightly-rounded">Follow</button>
                <button className="bg-red slightly-rounded">✉️</button>
                <button className="bg-blue slightly-rounded">Like</button>
              </div>
            </div>
            <button className="card-btn bg-white">View Profile</button>
          </div>
        </div>
      </div>
      <div className="info profiler">
        <div className="bio spaced">
          <div className="bio gapped">
            <img src={pic} alt="user" />
            <div>
              <h4>Faith M. Roberts</h4>
              <p>🕑 3 min ago</p>
            </div>
          </div>
          <span>:</span>
        </div>
        <div className="bio spaced">
          <div className="bio gapped">
            <span>🪟 Epic Coder</span>
            <div className="bio gapped">
              <span className="location"></span>
              <span>Nigeria</span>
            </div>
          </div>
          <div className="bio gapped">
            <span className="bg-green slightly-rounded">
              <span className="label"></span>
            </span>
            <span className="bg-red slightly-rounded">✉️</span>
            <span className="bg-blue slightly-rounded">Bid Now</span>
          </div>
        </div>
        <h2>Simplified Classified Site</h2>
        <div className="bio gapped">
          <span>$300 - $350</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel
          laborum rem libero vero molestiae accusamus debitis autem dolor odio
          mollitia distinctio eos quasi, consectetur magni excepturi saepe?
          Ducimus, iste.
        </p>
        <div className="bio gapped wrap">
          <button className="btns">HTML</button>
          <button className="btns">PHP</button>
          <button className="btns">CSS</button>
          <button className="btns">Javascript</button>
          <button className="btns">Wordpress</button>
          <button className="btns">Photoshop</button>
          <button className="btns">Illustrator</button>
          <button className="btns">Corel Draw</button>
        </div>
        <hr />
        <div className="bio spaced">
          <div className="bio gapped">
            <div className="bio gapped">
              <span>❤️</span>
              <span className="red">Like</span>
              <span className="bg-red rounded">25</span>
            </div>
            <div className="bio gapped">
              <span>📤</span>
              <span>Comments</span>
              <span>15</span>
            </div>
          </div>
          <div className="bio gapped">
            <span>👁️‍🗨️</span>
            <span>Views</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <div className="info profiler">
        <div className="bio spaced">
          <div className="bio gapped">
            <img src={pic} alt="user" />
            <div>
              <h4>Faith M. Roberts</h4>
              <p>🕑 3 min ago</p>
            </div>
          </div>
          <span>:</span>
        </div>
        <div className="bio spaced third">
          <div className="bio gapped">
            <span>🪟 Epic Coder</span>
            <div className="bio gapped">
              <span className="location"></span>
              <span>Nigeria</span>
            </div>
          </div>
          <div className="bio gapped">
            <span className="bg-green slightly-rounded">
              <span className="label"></span>
            </span>
            <span className="bg-red slightly-rounded">✉️</span>
          </div>
        </div>
        <h2>Senior Web Developer</h2>
        <div className="bio gapped">
          <span className="bg-green">Full Time</span>
          <span>$30/hr</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel
          laborum rem libero vero molestiae accusamus debitis autem dolor odio
          mollitia distinctio eos quasi, consectetur magni excepturi saepe?
          Ducimus, iste.
        </p>
        <div className="bio gapped">
          <button className="btns">HTML</button>
          <button className="btns">PHP</button>
          <button className="btns">CSS</button>
          <button className="btns">Javascript</button>
          <button className="btns">Wordpress</button>
        </div>
        <hr />
        <div className="bio spaced lined">
          <div className="bio gapped">
            <div className="bio gapped">
              <span>🖤</span>
              <span>Hire</span>
              <span className="bg-red rounded">25</span>
            </div>
            <div className="bio gapped">
              <span>📤</span>
              <span>Comments</span>
              <span>15</span>
            </div>
          </div>
          <div className="bio gapped">
            <span>👁️‍🗨️</span>
            <span>Views</span>
            <span>50</span>
          </div>
        </div>
        <div className="bio center">
          <span>+</span>
        </div>
        <div className="gapped top third">
          <img src={pic} alt="user" />
          <div>
            <h4>Faith M. Roberts</h4>
            <p>🕑 3 min ago</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <span> Reply</span>
            <br />
            <br />
            <div>
              <div className="gapped top">
                <img src={pic} alt="user" />
                <div>
                  <h4>Faith M. Roberts</h4>
                  <p>🕑 3 min ago</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span> Reply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="gapped top third">
          <img src={pic} alt="user" />
          <div>
            <h4>Faith M. Roberts</h4>
            <p>🕑 3 min ago</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem voluptatem necessitatibus porro doloremque rerum
              officiis obcaecati eum magnam sed adipisci!
            </p>
            <span> Reply</span>
          </div>
        </div>
        <br />
        <div className="bio spaced third">
          <img src={pic} alt="" />
          <input type="text" placeholder="Post a Comment" />
          <button className="bg-red">Send</button>
        </div>
      </div>
      <div className="center">
        <span>...</span>
      </div>
    </div>
  );
};

export default Hero;
