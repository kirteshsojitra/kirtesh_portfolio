import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Miro.AI"
              description="Pesonal video calling application like google meet it shows engagement of user to host in percentage by capturing their gestures and head movements. I designed and implemented this app with builder ai while working at Spectus Infotech Pvt Ltd."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Model App"
              description="This web application serves purpose similar to instagram as this application contains 5 different modules like photos, videos, live streming, personal chat, and video calling. Along with this I integrate Razor pay for payment to access paid content."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="HRMS"
              description="A web application which preserves records of all employees working in particular organization and it tracks an employees leaves and their salary slips."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Invoice Mangement"
              description="This app is all about keeping records of invoices and digitally creates invoice, along with some extraordinary functionalities imposing penalties on outdated invoices which has not paid yet."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
