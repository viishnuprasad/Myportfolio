import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAutodesk,
  SiNetlify,
  SiMicrosoft,
  SiBlender
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
    </Row>
  );
}

export default Toolstack;
