import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import quiz from "D://Portfoliosoumya//src//Assets//certificate//autoquiz.jpg";
import cad from "D://Portfoliosoumya//src//Assets//certificate//cadd.jpg";
import ift from "D://Portfoliosoumya//src//Assets//certificate//ift.jpg";
import sae from "D://Portfoliosoumya//src//Assets//certificate//sae.jpg";
import pre from "D://Portfoliosoumya//src//Assets//certificate//vyvidh.jpg";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

    <Col md={7} className="project-card">
      <ProjectCard
        imgPath={quiz}
      
      />
    </Col>

    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={cad}
        
      />
    </Col>
    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={ift}
        
      />
    </Col>
    <Col md={7} className="project-card">
      <ProjectCard
        imgPath={sae}
        
      />
    </Col>
    <Col md={7} className="project-card">
      <ProjectCard
        imgPath={pre}
        
      />
    </Col>
   
  </Row>
  );
}

export default Techstack;
