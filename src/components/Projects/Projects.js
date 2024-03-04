import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "D://Portfoliosoumya//src//Assets//reentrant.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "D://Portfoliosoumya//src//Assets//carbeurator.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Re-entrant Combustion Chamber"
              description="The re-entrant combustion chamber helped in reducing detonation of CI engines
              which helped in improving better ignition and reducing ignition delay. This project
              also helped in improving brake thermal efficiency.
              "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" Fume Ignition with Flow Regulating Carburetor"
              description="This project helped to achieve better fuel efficiency and improved emission characteristics by supplying lean mixture for combustion with the help of a vacuum
              chamber."
           
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
