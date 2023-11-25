import React from "react";
import Ti1 from "../../assets/image/team-1.jpg";
import Ti2 from "../../assets/image/team-2.jpg";
import Ti3 from "../../assets/image/team-3.jpg";

const Team = () => {
  return (
    <section className="Team">
      <header className="ServiceHeading">
        <h3 className="global_h3">Our Team</h3>
        <h1>Our Amazing Team</h1>
        <p>
          <span>
            There are many variations of passages of Lorem Ipsum available,
          </span>
          <span> but the majority have suffered alteration in some form.</span>
        </p>
      </header>
      <div className="TeamBoxes">
        <div className="Team-box">
          <div className="team-img">
            <img src={Ti1} alt="author-1" />
          </div>

          <div className="info">
            <div className="author-social">
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, eligendi.{" "}
              </span>
            </div>
            <div className="author-name">
              <h3>Jeffery Riley</h3>
              <p>Art Director</p>
            </div>
          </div>
        </div>

        <div className="Team-box">
          <div className="team-img">
            <img src={Ti2} alt="author-2" />
          </div>

          <div className="info">
            <div className="author-social">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, eligendi.
              </span>
            </div>
            <div className="author-name">
              <h3>Jeffery Riley</h3>
              <p>Web Designer</p>
            </div>
          </div>
        </div>

        <div className="Team-box">
          <div className="team-img">
            <img src={Ti3} alt="author-3" />
          </div>

          <div className="info">
            <div className="author-social">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, eligendi.
              </span>
            </div>
            <div className="author-name">
              <h3>Jeffery Riley</h3>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
