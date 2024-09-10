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
              description="I designed and implemented a personal video calling application, similar to Google Meet, that measures user engagement by analyzing gestures and head movements. The app provides hosts with real-time engagement scores as a percentage. This project was developed using Builder.ai during my time at Spectus Infotech Pvt. Ltd."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Model App"
              description="A personal video conferencing application, similar to Google Meet, designed to enhance user engagement analytics. Miro.AI quantifies participant engagement by capturing and analyzing gestures and head movements, providing the host with a real-time engagement score in percentage. I spearheaded the design and implementation of this application using Builder.ai during my tenure at Spectus Infotech Pvt. Ltd."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="HRMS"
              description="A web application designed to maintain comprehensive employee records for an organization, with functionality to track employee leave and generate salary slips."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Invoice Mangement"
              description="This application manages invoice records, generates digital invoices, and includes advanced features such as automatically imposing penalties on overdue, unpaid invoices."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
