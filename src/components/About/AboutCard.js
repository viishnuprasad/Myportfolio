import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishnuprasad V </span>
            from <span className="purple"> Thrissur, India.</span>
            <br />
            Currently leveraging my design skills and education in Automobile Engineering to contribute innovative ideas to the automotive industry. My goal is to contribute innovative
design ideas and technical skills to support the automotive industry.
            <br />
            I have completed Bachelor of Technology (B.Tech) in Automobile Engineering at Malabar Engineering College, Thrissur.
            <br />
            <br />
            Apart from Designing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Technical Update Tracking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Designing the wings of dreams to reality"{" "}
          </p>
          <footer className="blockquote-footer">Vishnuprasad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
