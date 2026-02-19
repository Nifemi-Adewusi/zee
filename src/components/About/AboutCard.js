import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nifemi </span>
            from <span className="purple"> From Nigeria.</span>
            <br />
            A Software Engineer passionate about building tools that change the
            world.
            <br />
            I'm a Computer Scientist and also a Graduate Member Of The Computer
            Professional Nigeria(GMCPN).
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nifemi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
