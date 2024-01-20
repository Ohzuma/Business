import React from "react";
import Ti1 from "../../assets/image/re1.jpg";
import Ti2 from "../../assets/image/re2.jpg";
import Ti3 from "../../assets/image/afro.png";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <section className="Team">
      <header className="ServiceHeading">
        <h3 className="global_h3">Our Team</h3>
        <h1>Our Amazing Team</h1>
      </header>
      <div className="TeamBoxes">
        <div className="Team-box">
          <div className="team-img">
            <img src={Ti2} alt="author-1" />
          </div>
          <div className="profile">
            <div className="profile_name">
              <h2>Ozuma Friday</h2>
              <p>Fronetend Enginer</p>
            </div>
            <div className="profile_info">
              <p>Lives in Nigeria, Gombe State, Oppt. Mega Station</p>
              <div className="profile_contact">
                <div>
                  <span>
                    <FiPhone />
                  </span>
                  <span>+234 8163697235</span>
                </div>
                <div>
                  <span>
                    <FaGithub />
                  </span>
                  <span>@ohzuma</span>
                </div>
                <div>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>@ohzvma</span>
                </div>
                <div>
                  <span>
                    <FaInstagram />
                  </span>
                  <span>@Ohzuma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Team-box">
          <div className="team-img">
            <img src={Ti1} alt="author-1" />
          </div>
          <div className="profile">
            <div className="profile_name">
              <h2>Robert Samuel</h2>
              <p>Senior React Dev.</p>
            </div>
            <div className="profile_info">
              <p>Lives in Nigeria, Gombe State, Oppt. Mega Station</p>
              <div className="profile_contact">
                <div>
                  <span>
                    <FiPhone />
                  </span>
                  <span>+234 8163697235</span>
                </div>
                <div>
                  <span>
                    <FaGithub />
                  </span>
                  <span>@ohzuma</span>
                </div>
                <div>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>@ohzvma</span>
                </div>
                <div>
                  <span>
                    <FaInstagram />
                  </span>
                  <span>@Robertz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Team-box">
          <div className="team-img">
            <img src={Ti3} alt="author-1" />
          </div>
          <div className="profile">
            <div className="profile_name">
              <h2>Jonny Gates</h2>
              <p>Ui Designer</p>
            </div>
            <div className="profile_info">
              <p>Lives in Nigeria, Gombe State, Oppt. Mega Station</p>
              <div className="profile_contact">
                <div>
                  <span>
                    <FiPhone />
                  </span>
                  <span>+234 70668445965</span>
                </div>
                <div>
                  <span>
                    <FaGithub />
                  </span>
                  <span>@Jonny</span>
                </div>
                <div>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>@JonnyGate</span>
                </div>
                <div>
                  <span>
                    <FaInstagram />
                  </span>
                  <span>@JonnyGate@1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
