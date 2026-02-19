import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

// import { FaTelegramPlane } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, problem solving and I’ve never
              looked back.
              <br />
              <br />I trouble shoot systems, perform vulnerability assessment
              and resolving technical issues in ways that are:
              <br />
              <i>
                <b className="purple">
                  Well documented, precise and unambigous
                </b>
              </i>
              <br />
              <br />
              <i>
                <b className="white">
                  Follow best practices and industry standards
                </b>
              </i>
              <br />
              <br />
              <i>
                <b className="purple">
                  Open to feedback, open to learning and growing as well as
                  experimenting
                </b>
              </i>
              <br />
              <br />
              {/* <i>
                <b className="white">
                  🛠️ Component Craftsman building reusable, scalable design
                  systems with React, Tailwind, and friends
                </b>
              </i> */}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <i>
                <b className=""> Let’s build the future together. 🔥</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://x.com/adewusi_nifemi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/Nifemi-Adewusi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
