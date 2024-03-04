import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "D:/Portfoliosoumya/src/Assets/certificate/problem.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "D:/Portfoliosoumya/src/Assets/certificate/leader.webp";
import suicide from "D:/Portfoliosoumya/src/Assets/certificate/team.jpeg";
import bitsOfCode from "D://Portfoliosoumya//src//Assets//carbeurator.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My<strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few achievements and strengths.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Leadership"
              description={<strong style={{ color: "violet" }}>Won the election campaign at high school level for class representative post with a lead of 49 points.</strong>}
         
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Team Player"
              description={<strong style={{ color: "violet" }}>Collaborated effectively with cross-functional teams at Honda
              Cars, fostering a collaborative work environment and contributing to successful project
              outcomes,
              Department cricket captain</strong>}
         
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Problem-Solving Recognition"
              description={<strong style={{ color: "violet" }}>Received acknowledgment for strong problem-solving
              skills, successfully resolving complex technical issues during the PDI process.</strong>}
         
              
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
